// Moves human-readable text out of the site's .tsx/.ts files into JSON files under
// src/content/text/, and rewrites the source to read it from there.
//
//   npm run cms:extract -- --dry     report what would change (new, unconverted files only)
//   npm run cms:extract -- --write   apply
//
// Rules are deliberately conservative: only JSX text, a few text attributes, and string
// values of object properties that look like prose are moved. Anything that looks like a
// class list, id, path, URL, CRM value or code is left alone.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const root = path.resolve(process.argv[2]);
const WRITE = process.argv.includes('--write');
const require = createRequire(path.join(root, 'package.json'));
const ts = require('typescript');

const SRC = path.join(root, 'src');
const OUT = path.join(SRC, 'content', 'text');
const IMPORT_NAME = 'tx';

// ---- scope -------------------------------------------------------------------------
const INCLUDE_DIRS = ['app', 'components'];
const EXCLUDE = [
  /^app\/admin\//,
  /^app\/api\//,
  /\/route\.ts$/,
  /^app\/(robots|sitemap|manifest)\.ts$/,
  /^app\/(not-found|error|global-error|loading)\.tsx$/,
  // Decorative UI mock-ups: tiny fake labels, not page copy.
  /^components\/work\/ProjectMock\.tsx$/,
  /^components\/HeroWorkflowEditor\.tsx$/,
  /^components\/WorkflowAnimation\.tsx$/,
  /^components\/ui\/ServiceIcon\.tsx$/,
  /^components\/products\/data\.ts$/,
  /^components\/(MotionProvider|ScrollPerfGuard|ScrollToTop|NavigationProgress|PageSkeleton|ConditionalNavbar|AnimatedCounter|InlineAnimatedCounter)\.tsx$/,
];
// Variables whose values feed logic (CRM mapping, filters): never touched here.
const SKIP_VARS = {
  'components/zoho/landing/data.ts': ['SERVICE_OPTIONS', 'BUDGET_OPTIONS'],
  'components/forms/ConsultationDialog.tsx': ['SERVICES'],
  'components/contact/ContactForm.tsx': ['SERVICES', 'HARDWARE_SERVICES', 'HARDWARE'],
  // Edited as collections (add / remove / reorder), not as loose text.
  'app/work/page.tsx': ['projects'],
};

// ---- what counts as text --------------------------------------------------------------
const TEXT_ATTRS = new Set(['alt', 'title', 'placeholder', 'aria-label', 'aria-description']);
const COMPONENT_TEXT_PROPS = new Set([
  'title', 'subtitle', 'description', 'heading', 'subheading', 'label', 'eyebrow', 'badge', 'kicker',
  'cta', 'ctaLabel', 'ctaText', 'text', 'caption', 'tagline', 'note', 'message', 'highlight', 'titleHighlight',
  'alt', 'placeholder', 'buttonText', 'secondaryCta', 'primaryCta', 'intro', 'summary', 'quote',
]);
const DENY_KEYS = new Set([
  'id', 'key', 'href', 'src', 'url', 'link', 'path', 'slug', 'icon', 'emoji', 'image', 'img', 'logo', 'avatar',
  'photo', 'category', 'type', 'kind', 'variant', 'tone', 'theme', 'color', 'colour', 'bg', 'tile', 'gradient',
  'className', 'class', 'style', 'size', 'sizes', 'pos', 'position', 'align', 'side', 'layout', 'state', 'status',
  'method', 'headers', 'mode', 'cache', 'credentials', 'rel', 'target', 'source', 'service', 'budget', 'form',
  'event', 'action', 'format', 'locale', 'timeZone', 'currency', 'weekday', 'month', 'year', 'day', 'hour',
  'minute', 'second', 'ease', 'easing', 'display', 'weight', 'subsets', 'variable', 'fetchPriority', 'loading',
  'decoding', 'priority', 'mime', 'contentType', 'file', 'name_slug', 'value', 'tag', 'hover', 'accent', 'ring',
  'check', 'chip', 'dot', 'shadow', 'border', 'iconBg', 'iconColor', 'glow', 'from', 'to', 'via', 'tint',
  'mapUrl', 'embed', 'email', 'phone', 'tel', 'mailto', 'lat', 'lng', 'coordinates', 'address', 'whatsapp',
  'xmlns', 'viewBox', 'd', 'fill', 'stroke', 'pattern', 'regex', 'channel', 'platform', 'network', 'handle',
  'og', 'twitterHandle', 'locale_', 'robots', 'canonical', 'Content-Type', 'Accept', 'Authorization',
]);
const SKIP_CALLS = new Set(['fetch', 'fetchWithTimeout', 'trackEvent', 'stringify', 'json', 'log', 'error', 'warn',
  'info', 'getElementById', 'querySelector', 'querySelectorAll', 'addEventListener', 'removeEventListener',
  'dispatchEvent', 'setItem', 'getItem', 'removeItem', 'Caveat', 'Inter', 'Geist', 'localFont', 'cn', 'clsx',
  'redirect', 'push', 'replace', 'startsWith', 'endsWith', 'includes', 'match', 'test', 'split', 'createElement']);
const SKIP_ELEMENTS = new Set(['code', 'pre', 'script', 'style', 'svg', 'path', 'kbd', 'samp']);

const CLASS_TOKEN = /^(?:[a-z0-9]+:)*-?[a-z0-9]+(?:-[a-z0-9./[\]()%#_]+)+$|^(?:[a-z0-9]+:)*(?:flex|grid|block|hidden|inline|relative|absolute|fixed|sticky|italic|underline|uppercase|lowercase|capitalize|truncate|border|rounded|shadow|transition|transform|grow|shrink|invisible|visible|contents|table|static|isolate|ring|outline|sr-only|not-sr-only)$/;

const PROSE_KEYS = new Set(['label', 'title', 'name', 'heading', 'text', 'subtitle', 'description']);
function looksLikeText(s, key = '') {
  const v = s.trim();
  if (PROSE_KEYS.has(key) && /^[a-z]+[A-Z][a-zA-Z]*$/.test(v)) return true; // eCommerce, iPhone
  if (!/[A-Za-z]/.test(v)) return false;
  if (/^(https?:|mailto:|tel:|\/|#|\.|data:)/.test(v)) return false;
  if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(v)) return false;
  if (/^[a-z][a-zA-Z0-9]*$/.test(v)) return false; // camelCase / lowercase identifier
  if (/^[A-Z0-9_]+$/.test(v)) return false; // CONSTANT / POST
  if (/^[a-z0-9]+(?:[-_][a-z0-9]+)+$/.test(v)) return false; // kebab-case / snake_case id
  const tokens = v.split(/\s+/);
  if (tokens.every((t) => CLASS_TOKEN.test(t))) return false;
  // Tailwind class lists with arbitrary values: lowercase tokens full of -, [, : or _.
  if (tokens.every((t) => !/[A-Z]/.test(t)) && tokens.filter((t) => /[-[\]:_#]/.test(t)).length >= Math.ceil(tokens.length / 2)) return false;
  if (/\$\{|=>|\(\)|;\s*$/.test(v)) return false;
  return /\s/.test(v) || /^[A-Z0-9₹$]/.test(v) || /[A-Z].*[a-z]|[a-z].*[A-Z]/.test(v);
}

// ---- JSX text whitespace + entities (matches React/Babel) ------------------------------
const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', mdash: '—', ndash: '–', hellip: '…',
  rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', copy: '©', reg: '®', trade: '™', times: '×', rarr: '→',
  larr: '←', middot: '·', bull: '•', deg: '°', rupee: '₹', laquo: '«', raquo: '»', check: '✓', hearts: '♥',
};
function decodeEntities(s, onUnknown) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    if (e in ENTITIES) return ENTITIES[e];
    onUnknown(m);
    return m;
  });
}
function cleanJsxText(raw) {
  const lines = raw.split(/\r\n|\n|\r/);
  let last = 0;
  lines.forEach((l, i) => { if (/[^ \t]/.test(l)) last = i; });
  let out = '';
  lines.forEach((line, i) => {
    let t = line.replace(/\t/g, ' ');
    if (i !== 0) t = t.replace(/^[ ]+/, '');
    if (i !== lines.length - 1) t = t.replace(/[ ]+$/, '');
    if (t) {
      if (i !== last) t += ' ';
      out += t;
    }
  });
  return out;
}

// ---- helpers ------------------------------------------------------------------------
function walk(dir, list = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, list);
    else if (/\.(tsx|ts)$/.test(e.name) && !/\.d\.ts$/.test(e.name)) list.push(p);
  }
  return list;
}
const rel = (p) => path.relative(SRC, p).split(path.sep).join('/');

function slugKey(text, used) {
  const words = text.normalize('NFKD').replace(/[^\w\s]/g, ' ').trim().toLowerCase().split(/\s+/).filter(Boolean);
  let base = words.slice(0, 5).join('_').replace(/[^a-z0-9_]/g, '').slice(0, 40).replace(/_+$/, '') || 'text';
  if (!/^[a-z]/.test(base)) base = 't_' + base;
  let k = base;
  for (let n = 2; used.has(k); n++) k = `${base}_${n}`;
  used.add(k);
  return k;
}

function propName(node) {
  const n = node.name;
  if (!n) return '';
  if (ts.isIdentifier(n) || ts.isStringLiteral(n) || ts.isNumericLiteral(n)) return n.text;
  return '';
}

function insideSkipped(node, skipVars) {
  for (let p = node.parent; p; p = p.parent) {
    if (ts.isVariableDeclaration(p) && ts.isIdentifier(p.name) && skipVars.includes(p.name.text)) return true;
    if (ts.isCallExpression(p)) {
      const callee = p.expression;
      const name = ts.isIdentifier(callee) ? callee.text : ts.isPropertyAccessExpression(callee) ? callee.name.text : '';
      if (SKIP_CALLS.has(name)) return true;
    }
    if (ts.isJsxAttribute(p)) {
      const an = p.name.getText();
      if (an === 'className' || an === 'style' || an === 'href' || an === 'src') return true;
    }
    if (ts.isBinaryExpression(p) && [ts.SyntaxKind.EqualsEqualsEqualsToken, ts.SyntaxKind.ExclamationEqualsEqualsToken, ts.SyntaxKind.EqualsEqualsToken].includes(p.operatorToken.kind)) return true;
    if (ts.isCaseClause(p) || ts.isElementAccessExpression(p) || ts.isImportDeclaration(p) || ts.isExportDeclaration(p)) return true;
    if (ts.isTypeNode(p)) return true;
    // JSON-LD structured data: schema.org values must stay exactly as they are.
    if (ts.isObjectLiteralExpression(p) && p.properties.some((q) => ts.isPropertyAssignment(q) && ['@context', '@type'].includes(propName(q)))) return true;
  }
  return false;
}

function jsxParentTag(node) {
  for (let p = node.parent; p; p = p.parent) {
    if (ts.isJsxElement(p)) return p.openingElement.tagName.getText();
    if (ts.isJsxSelfClosingElement(p)) return p.tagName.getText();
  }
  return '';
}
function insideSkippedElement(node) {
  for (let p = node.parent; p; p = p.parent) {
    if (ts.isJsxElement(p) && SKIP_ELEMENTS.has(p.openingElement.tagName.getText())) return true;
  }
  return false;
}
function kindFor(tag) {
  if (/^h[1-6]$/.test(tag)) return `heading ${tag}`;
  if (tag === 'p') return 'paragraph';
  if (tag === 'button') return 'button';
  if (tag === 'a' || tag === 'Link') return 'link';
  if (tag === 'li') return 'list item';
  if (tag === 'label') return 'form label';
  if (tag === 'option') return 'option';
  if (tag === 'th' || tag === 'td') return 'table cell';
  return 'text';
}
function groupFor(node) {
  // Nearest top-level declaration name: a data constant or the component.
  let top = node;
  while (top.parent && !ts.isSourceFile(top.parent)) top = top.parent;
  let name = '';
  if (ts.isVariableStatement(top)) name = top.declarationList.declarations[0]?.name.getText() ?? '';
  else if (ts.isFunctionDeclaration(top) || ts.isClassDeclaration(top)) name = top.name?.getText() ?? '';
  else if (ts.isExportAssignment(top)) name = 'default';
  // Data arrays inside a component: use the inner variable name.
  for (let p = node.parent; p && p !== top; p = p.parent) {
    if (ts.isVariableDeclaration(p) && ts.isIdentifier(p.name) && (ts.isArrayLiteralExpression(p.initializer ?? p) || ts.isObjectLiteralExpression(p.initializer ?? p))) {
      name = p.name.text;
      break;
    }
  }
  return name || 'content';
}

// ---- main ---------------------------------------------------------------------------
const files = INCLUDE_DIRS.flatMap((d) => walk(path.join(SRC, d)))
  .filter((f) => !EXCLUDE.some((re) => re.test(rel(f))));

const report = [];
const problems = [];
let total = 0;
const allMeta = {};

for (const file of files) {
  const r = rel(file);
  const code = fs.readFileSync(file, 'utf8');
  if (code.includes(`@/content/text/`)) { problems.push(`${r}: already converted, skipped`); continue; }
  const sf = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true, file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const skipVars = SKIP_VARS[r] ?? [];
  const edits = [];
  const values = {};
  const meta = {};
  const used = new Set();
  const byText = new Map();
  const keyFor = (text, kind, group, node) => {
    const id = `${group}\u0000${text}`;
    if (byText.has(id)) { meta[byText.get(id)].count++; return byText.get(id); }
    const k = slugKey(text, used);
    byText.set(id, k);
    values[k] = text;
    meta[k] = { kind, group, line: sf.getLineAndCharacterOfPosition(node.getStart()).line + 1, count: 1 };
    return k;
  };
  const exprFor = (k) => `${IMPORT_NAME}.${k}`;

  const visit = (node) => {
    // JSX text children
    if (ts.isJsxText(node) && !insideSkippedElement(node)) {
      const cleaned = cleanJsxText(node.getFullText());
      if (/[A-Za-z]/.test(cleaned)) {
        let unknown = false;
        const decoded = decodeEntities(cleaned, (m) => { unknown = true; problems.push(`${r}:${sf.getLineAndCharacterOfPosition(node.getStart()).line + 1} unknown entity ${m}`); });
        if (!unknown) {
          const lead = decoded.match(/^ */)[0];
          const trail = decoded.match(/ *$/)[0];
          const core = decoded.slice(lead.length, decoded.length - trail.length);
          const k = keyFor(core, kindFor(jsxParentTag(node)), groupFor(node), node);
          const rep = (lead ? `{${JSON.stringify(lead)}}` : '') + `{${exprFor(k)}}` + (trail ? `{${JSON.stringify(trail)}}` : '');
          edits.push({ start: node.getFullStart(), end: node.getEnd(), text: rep });
        }
      }
      return;
    }
    // Text attributes: alt="…", placeholder="…", <Hero title="…" />
    if (ts.isJsxAttribute(node) && node.initializer && ts.isStringLiteral(node.initializer)) {
      const an = node.name.getText();
      const owner = node.parent.parent; // JsxOpeningElement | JsxSelfClosingElement
      const tag = owner.tagName?.getText() ?? '';
      const isComponent = /^[A-Z]/.test(tag);
      if ((TEXT_ATTRS.has(an) || (isComponent && COMPONENT_TEXT_PROPS.has(an))) && looksLikeText(node.initializer.text) && !insideSkipped(node, skipVars)) {
        const kind = an === 'alt' ? 'image alt text' : an === 'placeholder' ? 'placeholder' : an.startsWith('aria') ? 'screen-reader label' : an;
        const k = keyFor(node.initializer.text, kind, groupFor(node), node);
        edits.push({ start: node.initializer.getStart(), end: node.initializer.getEnd(), text: `{${exprFor(k)}}` });
      }
      return;
    }
    // String children inside {…}: {cond ? 'A' : 'B'}
    if ((ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) && looksLikeText(node.text)) {
      let p = node.parent;
      while (p && (ts.isConditionalExpression(p) || ts.isParenthesizedExpression(p) || (ts.isBinaryExpression(p) && [ts.SyntaxKind.AmpersandAmpersandToken, ts.SyntaxKind.BarBarToken, ts.SyntaxKind.QuestionQuestionToken].includes(p.operatorToken.kind)))) {
        if (ts.isConditionalExpression(p) && p.condition === node) { p = null; break; }
        p = p.parent;
      }
      if (p && ts.isJsxExpression(p) && p.parent && (ts.isJsxElement(p.parent) || ts.isJsxFragment(p.parent)) && !insideSkipped(node, skipVars) && !insideSkippedElement(node)) {
        const k = keyFor(node.text, kindFor(jsxParentTag(node)), groupFor(node), node);
        edits.push({ start: node.getStart(), end: node.getEnd(), text: exprFor(k) });
        return;
      }
    }
    // Object property values: { title: '…', features: ['…'] }
    if (ts.isPropertyAssignment(node)) {
      const key = propName(node);
      const init = node.initializer;
      if (key && !DENY_KEYS.has(key) && !insideSkipped(node, skipVars)) {
        const take = (lit, kind) => {
          if (!looksLikeText(lit.text, key)) return;
          const k = keyFor(lit.text, kind, groupFor(node), lit);
          edits.push({ start: lit.getStart(), end: lit.getEnd(), text: exprFor(k) });
        };
        if (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init)) take(init, key);
        else if (ts.isArrayLiteralExpression(init) && init.elements.length && init.elements.every((e) => ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e))) {
          init.elements.forEach((e) => take(e, `${key} item`));
          return;
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);

  if (!edits.length) continue;
  edits.sort((a, b) => b.start - a.start);
  for (let i = 1; i < edits.length; i++) {
    if (edits[i].end > edits[i - 1].start) problems.push(`${r}: overlapping edits at ${edits[i].start}`);
  }
  let out = code;
  for (const e of edits) out = out.slice(0, e.start) + e.text + out.slice(e.end);

  // Import after directives.
  const jsonRel = `@/content/text/${r.replace(/\.(tsx|ts)$/, '')}.json`;
  if (new RegExp(`\\b${IMPORT_NAME}\\b`).test(code)) problems.push(`${r}: identifier '${IMPORT_NAME}' already used`);
  const imp = `import ${IMPORT_NAME} from '${jsonRel}';\n`;
  const directive = out.match(/^(\s*(['"])use (client|server)\2;?\s*\n)/);
  out = directive ? directive[1] + imp + out.slice(directive[1].length) : imp + out;

  total += Object.keys(values).length;
  report.push({ file: r, fields: Object.keys(values).length, edits: edits.length });
  allMeta[r] = meta;
  if (WRITE) {
    const jsonPath = path.join(OUT, r.replace(/\.(tsx|ts)$/, '') + '.json');
    fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
    fs.writeFileSync(jsonPath, JSON.stringify(values, null, 2) + '\n');
    fs.writeFileSync(file, out);
  } else if (process.argv.includes('--list') && process.argv.some((x) => r.includes(x) && x.length > 3 && !x.startsWith('-') && x !== root)) {
    for (const [k, m] of Object.entries(meta)) console.log(`  ${r} ${m.line} [${m.kind}] ${JSON.stringify(values[k]).slice(0, 90)}`);
  } else if (process.argv.includes('--show') && process.argv.includes(r)) {
    console.log(JSON.stringify(values, null, 2));
    console.log(out);
  }
}

if (WRITE) {
  fs.mkdirSync(path.join(SRC, 'content'), { recursive: true });
  fs.writeFileSync(path.join(SRC, 'content', 'text-meta.json'), JSON.stringify(allMeta, null, 2) + '\n');
}
report.sort((a, b) => b.fields - a.fields);
for (const x of report) console.log(String(x.fields).padStart(4), x.file);
console.log(`\n${report.length} files, ${total} text fields${WRITE ? ' written' : ' (dry run)'}`);
if (problems.length) console.log('\nPROBLEMS:\n' + problems.join('\n'));
