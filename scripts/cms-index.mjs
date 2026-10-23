// Builds src/content/pages.json: every public page and the text files (src/content/text/**)
// it shows, found by following imports from the page and its layouts.
// Run after adding a page or component:  npm run cms:index   (npm run cms:index -- --check in CI/tests)
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const SRC = path.join(ROOT, 'src');
const TEXT = path.join(SRC, 'content', 'text');
const OUT = path.join(SRC, 'content', 'pages.json');
const CHECK = process.argv.includes('--check');

const rel = (p) => path.relative(SRC, p).split(path.sep).join('/');

function resolveImport(from, spec) {
  let base;
  if (spec.startsWith('@/')) base = path.join(SRC, spec.slice(2));
  else if (spec.startsWith('.')) base = path.resolve(path.dirname(from), spec);
  else return null;
  for (const c of [base, `${base}.tsx`, `${base}.ts`, path.join(base, 'index.tsx'), path.join(base, 'index.ts')]) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  }
  return null;
}

const importCache = new Map();
function importsOf(file) {
  if (!importCache.has(file)) {
    const code = fs.readFileSync(file, 'utf8');
    const specs = [...code.matchAll(/(?:from\s+|import\s*\(\s*)['"]([^'"]+)['"]/g)].map((m) => m[1]);
    importCache.set(file, specs.map((s) => resolveImport(file, s)).filter((p) => p && /\.(tsx|ts)$/.test(p)));
  }
  return importCache.get(file);
}

function textFileFor(file) {
  const json = path.join(TEXT, rel(file).replace(/\.(tsx|ts)$/, '.json'));
  return fs.existsSync(json) ? `src/content/text/${rel(file).replace(/\.(tsx|ts)$/, '.json')}` : null;
}

function reachable(entry, seen = new Set()) {
  if (seen.has(entry)) return seen;
  seen.add(entry);
  for (const dep of importsOf(entry)) reachable(dep, seen);
  return seen;
}

function walk(dir, list = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, list);
    else if (e.name === 'page.tsx') list.push(p);
  }
  return list;
}

const appDir = path.join(SRC, 'app');
const pageFiles = walk(appDir).filter((p) => !/[\\/](admin|api)[\\/]/.test(p));
const rootLayout = path.join(appDir, 'layout.tsx');

// Files every page shows (header, footer, site-wide metadata).
const pagesUsing = new Map();
const perPage = pageFiles.map((page) => {
  const dirRel = path.relative(appDir, path.dirname(page)).split(path.sep).join('/');
  const route = '/' + dirRel.split('/').filter((s) => s && !/^\(.*\)$/.test(s)).join('/');
  const layouts = [];
  for (let d = path.dirname(page); d.startsWith(appDir); d = path.dirname(d)) {
    const l = path.join(d, 'layout.tsx');
    if (fs.existsSync(l)) layouts.push(l);
    if (d === appDir) break;
  }
  const files = new Set();
  for (const entry of [page, ...layouts]) for (const f of reachable(entry)) files.add(f);
  const text = [...files].map(textFileFor).filter(Boolean);
  for (const t of text) pagesUsing.set(t, (pagesUsing.get(t) ?? 0) + 1);
  return { route, page: rel(page), text };
});

const sharedThreshold = Math.ceil(perPage.length * 0.5);
const shared = [...pagesUsing.entries()].filter(([, n]) => n >= sharedThreshold).map(([t]) => t).sort();
const rootText = textFileFor(rootLayout);
if (rootText && !shared.includes(rootText)) shared.push(rootText);

const meta = JSON.parse(fs.readFileSync(path.join(SRC, 'content', 'text-meta.json'), 'utf8'));
const titleOf = (route, text) => {
  if (route === '/') return 'Home';
  // The page's own SEO title, when it has one.
  for (const t of text) {
    const key = t.replace(/^src\/content\/text\//, '').replace(/\.json$/, '');
    if (!/\/(page|layout)$/.test(key) || shared.includes(t)) continue;
    const m = meta[`${key}.tsx`] ?? meta[`${key}.ts`];
    const values = JSON.parse(fs.readFileSync(path.join(ROOT, t), 'utf8'));
    for (const [k, v] of Object.entries(m ?? {})) if (v.kind === 'title' && v.group === 'metadata') return values[k];
  }
  return route === '/' ? 'Home' : route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};

const index = {
  shared,
  pages: perPage
    .map(({ route, page, text }) => ({ route, page, title: titleOf(route, text), text: text.filter((t) => !shared.includes(t)).sort() }))
    .sort((a, b) => (a.route === '/' ? -1 : b.route === '/' ? 1 : a.route.localeCompare(b.route))),
};
const json = JSON.stringify(index, null, 2) + '\n';

if (CHECK) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  if (current !== json) {
    console.error('src/content/pages.json is out of date. Run: npm run cms:index');
    process.exit(1);
  }
  console.log('src/content/pages.json is up to date.');
} else {
  fs.writeFileSync(OUT, json);
  console.log(`${index.pages.length} pages, ${shared.length} shared text files -> src/content/pages.json`);
}
