import formsDefaults from '@/content/forms.json';
import { CMS_ICON_NAMES } from './icons';
import { readFiles, StoreError, type FileChange } from './store';
import { toJson, validateForms, validateProducts, validateProjects, validateSite, validateText, ValidationError } from './validate';

/** Every file the admin can open, and how a change to it is checked. */
export type ContentKind = 'text' | 'site' | 'forms' | 'products' | 'projects';

export function kindOf(path: string): ContentKind | null {
  if (/^src\/content\/text\/[\w./()[\]-]+\.json$/.test(path) && !path.includes('..')) return 'text';
  if (path === 'src/content/site.json') return 'site';
  if (path === 'src/content/forms.json') return 'forms';
  if (path === 'src/content/collections/products.json') return 'products';
  if (path === 'src/content/collections/projects.json') return 'projects';
  return null;
}

export type Change = { path: string; data: unknown; baseSha?: string | null };

/** Validates edited files against their current versions and returns what to commit. */
export async function prepareChanges(changes: Change[]): Promise<FileChange[]> {
  if (!Array.isArray(changes) || !changes.length) throw new StoreError(400, 'Nothing to publish.');
  if (changes.length > 60) throw new StoreError(400, 'Too many files in one publish.');
  for (const c of changes) {
    if (!c || typeof c.path !== 'string' || !kindOf(c.path)) throw new StoreError(400, `This file cannot be edited from the admin: ${c?.path}`);
  }
  const current = new Map((await readFiles(changes.map((c) => c.path))).map((f) => [f.path, f]));

  return changes.map((c) => {
    const existing = current.get(c.path);
    if (!existing) throw new StoreError(404, `"${c.path}" no longer exists. Reload the admin.`);
    const before = JSON.parse(existing.content);
    let data: unknown;
    try {
      switch (kindOf(c.path)) {
        case 'text':
          data = validateText(c.data, before, labelFor(c.path));
          break;
        case 'site':
          data = validateSite(c.data);
          break;
        case 'forms':
          data = validateForms(c.data, before ?? formsDefaults);
          break;
        case 'products':
          data = validateProducts(c.data, CMS_ICON_NAMES);
          break;
        case 'projects':
          data = validateProjects(c.data, CMS_ICON_NAMES);
          break;
      }
    } catch (error) {
      if (error instanceof ValidationError) throw new StoreError(422, error.message);
      throw error;
    }
    return { path: c.path, content: toJson(data), baseSha: c.baseSha === undefined ? undefined : c.baseSha };
  });
}

/** "src/content/text/components/home/SolutionsShowcase.json" -> "Solutions showcase" */
export function labelFor(path: string): string {
  const base = path.replace(/^src\/content\/(text\/)?/, '').replace(/\.json$/, '');
  const parts = base.split('/');
  let name = parts[parts.length - 1];
  if (name === 'page' || name === 'layout') {
    const dir = parts.filter((p) => !/^\(.*\)$/.test(p) && p !== 'app').slice(0, -1);
    name = `${dir.length ? dir[dir.length - 1] : 'home'} ${name === 'layout' ? 'SEO & layout' : 'page'}`;
  }
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]/g, ' ')
    .replace(/^./, (c) => c.toUpperCase())
    .replace(/\s+(.)/g, (_, c: string) => ` ${c.toLowerCase()}`)
    .replace(/\b(seo|faq|erp|crm|ui|ux|iot|pcb|cms|ai|3d)\b/gi, (w) => w.toUpperCase());
}
