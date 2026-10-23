// Tests for the admin CMS: sessions, change validation, uploads, and the content wiring.
// Run with: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { adminConfig, createSession, verifySession, safeEqual } from '../src/lib/cms/session.ts';
import { toJson, validateForms, validateProducts, validateProjects, validateSite, validateText } from '../src/lib/cms/validate.ts';
import { imageInfo } from '../src/lib/cms/image.ts';
import { assertWritable, gitBlobSha } from '../src/lib/cms/store.ts';

const ROOT = path.resolve(import.meta.dirname, '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const json = (p) => JSON.parse(read(p));
const ICONS = [...read('src/lib/cms/icons.ts').match(/export const CMS_ICONS = \{([\s\S]*?)\}/)[1].matchAll(/\b([A-Z][A-Za-z0-9]+)\b/g)].map((m) => m[1]);

// ---------------------------------------------------------------------------
// Sessions
// ---------------------------------------------------------------------------
const ENV = { ADMIN_EMAIL: 'Admin@Example.com', ADMIN_PASSWORD: 'correct horse battery' };

test('admin login is disabled without an email and an 8+ character password', () => {
  assert.equal(adminConfig({}), null);
  assert.equal(adminConfig({ ADMIN_EMAIL: 'a@b.co', ADMIN_PASSWORD: 'short' }), null);
  assert.equal(adminConfig(ENV).email, 'admin@example.com');
});

test('a session verifies, and expires', async () => {
  const config = adminConfig(ENV);
  const now = Date.UTC(2026, 0, 1);
  const token = await createSession(config, now);
  assert.equal(await verifySession(token, config, now + 60_000), 'admin@example.com');
  assert.equal(await verifySession(token, config, now + 9 * 3600_000), null);
});

test('forged, tampered or foreign sessions are rejected', async () => {
  const config = adminConfig(ENV);
  const token = await createSession(config);
  const [payload, sig] = token.split('.');
  assert.equal(await verifySession(undefined, config), null);
  assert.equal(await verifySession('garbage', config), null);
  assert.equal(await verifySession(`${payload}.${sig.slice(0, -2)}xx`, config), null);
  const otherPayload = Buffer.from(JSON.stringify({ sub: 'admin@example.com', exp: 9999999999 })).toString('base64url');
  assert.equal(await verifySession(`${otherPayload}.${sig}`, config), null);
  // Changing the password signs everyone out.
  assert.equal(await verifySession(token, adminConfig({ ...ENV, ADMIN_PASSWORD: 'a different password' })), null);
  assert.equal(await verifySession(token, null), null);
});

test('safeEqual compares exactly', () => {
  assert.equal(safeEqual('abc', 'abc'), true);
  assert.equal(safeEqual('abc', 'abd'), false);
  assert.equal(safeEqual('abc', 'abcd'), false);
});

// ---------------------------------------------------------------------------
// Publishing an unchanged file must not change it
// ---------------------------------------------------------------------------
test('current site settings, forms, products and projects pass validation unchanged', () => {
  for (const [file, validate] of [
    ['src/content/site.json', (v) => validateSite(v)],
    ['src/content/forms.json', (v) => validateForms(v, v)],
    ['src/content/collections/products.json', (v) => validateProducts(v, ICONS)],
    ['src/content/collections/projects.json', (v) => validateProjects(v, ICONS)],
  ]) {
    assert.equal(toJson(validate(json(file))), read(file), `${file} would be rewritten by publishing it unchanged`);
  }
});

function textFiles(dir = path.join(ROOT, 'src/content/text'), out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) textFiles(p, out);
    else out.push(p);
  }
  return out;
}

test('every page text file passes validation unchanged', () => {
  const files = textFiles();
  assert.ok(files.length > 50);
  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(f, 'utf8'));
    assert.equal(toJson(validateText(data, data)), fs.readFileSync(f, 'utf8'), f);
  }
});

// ---------------------------------------------------------------------------
// Validation rejects broken edits
// ---------------------------------------------------------------------------
test('page text: fields cannot be added, removed, emptied or made non-text', () => {
  const current = { a: 'Hello', b: 'World', c: '' };
  assert.deepEqual(validateText({ a: 'Hi', b: 'World', c: '' }, current), { a: 'Hi', b: 'World', c: '' });
  assert.throws(() => validateText({ a: 'Hi', b: 'World' }, current), /added or removed/);
  assert.throws(() => validateText({ ...current, d: 'x' }, current), /added or removed/);
  assert.throws(() => validateText({ ...current, a: '  ' }, current), /cannot be left empty/);
  assert.throws(() => validateText({ ...current, a: 5 }, current), /must be text/);
  assert.throws(() => validateText({ ...current, a: 'x'.repeat(10_001) }, current), /too long/);
});

test('site settings reject a bad phone, email, link, headquarters or metric count', () => {
  const site = json('src/content/site.json');
  const bad = (patch, re) => assert.throws(() => validateSite(patch(structuredClone(site))), re);
  bad((s) => ((s.company.phone = '9888244166'), s), /international format/);
  bad((s) => ((s.company.email = 'nope'), s), /Email/);
  bad((s) => ((s.social.linkedin = 'linkedin.com/x'), s), /https/);
  bad((s) => (s.offices.forEach((o) => (o.type = 'office')), s), /headquarters/);
  bad((s) => (s.metrics.pop(), s), /exactly two/);
  bad((s) => ((s.offices[1].id = s.offices[0].id), s), /Two offices/);
  bad((s) => ((s.offices[0].coordinates = [200, 0]), s), /map position/);
});

test('forms: duplicates, missing hardware option and renamed Zoho ids are rejected', () => {
  const forms = json('src/content/forms.json');
  const bad = (patch, re) => assert.throws(() => validateForms(patch(structuredClone(forms)), forms), re);
  bad((f) => (f.budgets.push(f.budgets[0]), f), /twice/);
  bad((f) => ((f.contact.hardwareService = 'Gone'), f), /hardware list/);
  bad((f) => (delete f.zoho.serviceLabels.membership, f), /renamed/);
  bad((f) => ((f.consultation.services = ['Only one']), f), /at least 2/);
});

test('products and projects: ids, categories, icons, images and a featured project are enforced', () => {
  const products = json('src/content/collections/products.json');
  const projects = json('src/content/collections/projects.json');
  const badP = (patch, re) => assert.throws(() => validateProducts(patch(structuredClone(products)), ICONS), re);
  badP((p) => ((p.items[1].id = p.items[0].id), p), /Two products/);
  badP((p) => ((p.items[0].id = 'Not A Slug'), p), /lowercase/);
  badP((p) => ((p.items[0].icon = 'Nope'), p), /icon/);
  badP((p) => ((p.items[0].category = 'space'), p), /category/);
  badP((p) => ((p.items[0].screenshot.src = 'https://evil.example/x.png'), p), /uploaded image/);
  badP((p) => ((p.items = []), p), /at least one/);
  const badW = (patch, re) => assert.throws(() => validateProjects(patch(structuredClone(projects)), ICONS), re);
  badW((p) => (p.items.forEach((x) => (x.featured = false)), p), /featured/);
  badW((p) => ((p.items[0].highlights[0].tone = 'pink'), p), /colour/);
  badW((p) => ((p.items[1].id = p.items[0].id), p), /Two projects/);
});

// ---------------------------------------------------------------------------
// Storage safety and uploads
// ---------------------------------------------------------------------------
test('only content and upload files can ever be written', () => {
  for (const ok of ['src/content/site.json', 'src/content/text/app/about/page.json', 'public/uploads/2026/10/a-1b2c3d.webp']) assert.doesNotThrow(() => assertWritable(ok));
  for (const bad of ['src/app/page.tsx', '.env.local', 'package.json', 'src/content/../../.env', '/etc/passwd', 'public/uploads/x.svg', 'public/images/logo.png', 'src/content/site.js']) {
    assert.throws(() => assertWritable(bad), /cannot be edited/, bad);
  }
});

test('gitBlobSha matches git', () => {
  assert.equal(gitBlobSha('hello\n'), 'ce013625030ba8dba906f756967f9e9ca394464a');
});

test('uploaded images are recognised by their bytes, with their size', () => {
  const webp = fs.readFileSync(path.join(ROOT, 'public/images/work/laptop-frame.webp'));
  assert.deepEqual(imageInfo(webp), { ext: 'webp', width: 1400, height: 700 });
  const png = Buffer.alloc(33);
  png.writeUInt32BE(0x89504e47, 0);
  png.write('IHDR', 12, 'ascii');
  png.writeUInt32BE(640, 16);
  png.writeUInt32BE(480, 20);
  assert.deepEqual(imageInfo(png), { ext: 'png', width: 640, height: 480 });
  const gif = Buffer.concat([Buffer.from('GIF89a'), Buffer.from([0x20, 0x00, 0x10, 0x00]), Buffer.alloc(30)]);
  assert.deepEqual(imageInfo(gif), { ext: 'gif', width: 32, height: 16 });
  const jpeg = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x04, 0x00, 0x00, 0xff, 0xc0, 0x00, 0x11, 0x08, 0x01, 0x2c, 0x01, 0x90, ...Array(30).fill(0)]);
  assert.deepEqual(imageInfo(jpeg), { ext: 'jpg', width: 400, height: 300 });
  assert.equal(imageInfo(Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"></svg>'.padEnd(64))), null);
});

// ---------------------------------------------------------------------------
// Wiring: code and content stay in sync
// ---------------------------------------------------------------------------
test('every text field used in the code exists in its content file, and none is orphaned', () => {
  const src = path.join(ROOT, 'src');
  for (const f of textFiles()) {
    const rel = path.relative(path.join(src, 'content/text'), f).replace(/\\/g, '/').replace(/\.json$/, '');
    const source = ['.tsx', '.ts'].map((ext) => path.join(src, rel + ext)).find((p) => fs.existsSync(p));
    assert.ok(source, `${rel}: source file is missing`);
    const code = fs.readFileSync(source, 'utf8');
    const used = new Set([...code.matchAll(/\btx\.([a-z][a-z0-9_]*)/g)].map((m) => m[1]));
    const keys = new Set(Object.keys(JSON.parse(fs.readFileSync(f, 'utf8'))));
    for (const k of used) assert.ok(keys.has(k), `${rel}: tx.${k} has no text in the content file`);
    for (const k of keys) assert.ok(used.has(k), `${rel}: "${k}" is not used by the code`);
  }
});

test('the page index (src/content/pages.json) is up to date', () => {
  execFileSync(process.execPath, [path.join(ROOT, 'scripts/cms-index.mjs'), '--check'], { cwd: ROOT, stdio: 'pipe' });
});
