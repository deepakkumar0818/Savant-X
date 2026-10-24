import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';

/**
 * Where CMS content is read from and published to.
 *
 * - GitHub (production): every publish is one commit on the configured branch; Vercel then
 *   rebuilds the site. Needs GITHUB_TOKEN (contents: read & write on this repository).
 * - Local files (development only): edits are written straight into the project folder.
 *
 * Only files under src/content/ and public/uploads/ can ever be written.
 */

export type StoredFile = { path: string; content: string; sha: string };
export type FileChange =
  | { path: string; content: string; encoding?: 'utf-8'; baseSha?: string | null }
  | { path: string; content: string; encoding: 'base64'; baseSha?: string | null };
export type CommitResult = { commit: string; url?: string };
export type HistoryEntry = { commit: string; message: string; author: string; date: string; url?: string };

export class StoreError extends Error {
  status: number;
  detail?: unknown;
  constructor(status: number, message: string, detail?: unknown) {
    super(message);
    this.status = status;
    this.detail = detail;
  }
}

const WRITABLE = [/^src\/content\/[\w./-]+\.json$/, /^public\/uploads\/[\w./-]+\.(png|jpe?g|webp|gif|avif)$/i];

export function assertWritable(p: string) {
  if (p.includes('..') || p.startsWith('/') || !WRITABLE.some((re) => re.test(p))) {
    throw new StoreError(400, `This file cannot be edited from the admin: ${p}`);
  }
}

/** Git's blob id for some content, so both backends report comparable versions. */
export function gitBlobSha(content: Buffer | string): string {
  const buf = typeof content === 'string' ? Buffer.from(content, 'utf8') : content;
  return createHash('sha1').update(`blob ${buf.length}\0`).update(buf).digest('hex');
}

export type StoreInfo = { mode: 'github' | 'local' | 'readonly'; repo?: string; branch?: string };

export function storeInfo(env = process.env): StoreInfo {
  if (env.GITHUB_TOKEN && env.GITHUB_REPO) return { mode: 'github', repo: env.GITHUB_REPO, branch: env.GITHUB_BRANCH || 'main' };
  if (env.NODE_ENV !== 'production') return { mode: 'local' };
  return { mode: 'readonly' };
}

// ---------------------------------------------------------------------------
// GitHub
// ---------------------------------------------------------------------------

async function gh<T>(pathname: string, init: RequestInit = {}): Promise<T> {
  const token = process.env.GITHUB_TOKEN;
  const res = await fetch(`https://api.github.com${pathname}`, {
    ...init,
    cache: 'no-store',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
      ...init.headers,
    },
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { message?: string };
    const message =
      res.status === 401 ? 'GitHub rejected the access token. Check GITHUB_TOKEN.'
      : res.status === 403 || res.status === 404 ? `GitHub refused access (${body.message ?? res.status}). The token needs "Contents: read and write" on ${process.env.GITHUB_REPO}.`
      : `GitHub error ${res.status}: ${body.message ?? 'unknown'}`;
    throw new StoreError(res.status === 409 || res.status === 422 ? 409 : 502, message, body);
  }
  return (await res.json()) as T;
}

type Tree = { tree: { path: string; type: string; sha: string }[]; truncated: boolean };

async function githubHead(repo: string, branch: string) {
  const ref = await gh<{ object: { sha: string } }>(`/repos/${repo}/git/ref/heads/${encodeURIComponent(branch)}`);
  const commit = await gh<{ tree: { sha: string } }>(`/repos/${repo}/git/commits/${ref.object.sha}`);
  return { commit: ref.object.sha, tree: commit.tree.sha };
}

async function githubShas(repo: string, branch: string, prefix: string): Promise<Map<string, string>> {
  const head = await githubHead(repo, branch);
  const tree = await gh<Tree>(`/repos/${repo}/git/trees/${head.tree}?recursive=1`);
  const map = new Map<string, string>();
  for (const e of tree.tree) if (e.type === 'blob' && e.path.startsWith(prefix)) map.set(e.path, e.sha);
  return map;
}

async function githubBlob(repo: string, sha: string): Promise<string> {
  const blob = await gh<{ content: string; encoding: string }>(`/repos/${repo}/git/blobs/${sha}`);
  return Buffer.from(blob.content, blob.encoding === 'base64' ? 'base64' : 'utf8').toString('utf8');
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

const ROOT = process.cwd();

/** Reads files (repo-relative paths). Missing files are omitted. */
export async function readFiles(paths: string[]): Promise<StoredFile[]> {
  const info = storeInfo();
  if (info.mode === 'github') {
    const prefix = commonPrefix(paths);
    const shas = await githubShas(info.repo!, info.branch!, prefix);
    return Promise.all(
      paths.filter((p) => shas.has(p)).map(async (p) => ({ path: p, sha: shas.get(p)!, content: await githubBlob(info.repo!, shas.get(p)!) }))
    );
  }
  const out: StoredFile[] = [];
  for (const p of paths) {
    try {
      const buf = await fs.readFile(path.join(ROOT, p));
      out.push({ path: p, content: buf.toString('utf8'), sha: gitBlobSha(buf) });
    } catch {
      // missing
    }
  }
  return out;
}

/** Repo-relative paths of files under a folder (e.g. "public/uploads/"). */
export async function listFiles(prefix: string): Promise<string[]> {
  const info = storeInfo();
  if (info.mode === 'github') return [...(await githubShas(info.repo!, info.branch!, prefix)).keys()].sort();
  const out: string[] = [];
  const walk = async (dir: string) => {
    let entries: import('node:fs').Dirent[] = [];
    try {
      entries = await fs.readdir(path.join(ROOT, dir), { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const p = `${dir}${e.name}`;
      if (e.isDirectory()) await walk(`${p}/`);
      else out.push(p);
    }
  };
  await walk(prefix);
  return out.sort();
}

function commonPrefix(paths: string[]): string {
  if (!paths.length) return '';
  let prefix = paths[0];
  for (const p of paths) while (!p.startsWith(prefix)) prefix = prefix.slice(0, prefix.lastIndexOf('/', prefix.length - 2) + 1);
  return prefix.slice(0, prefix.lastIndexOf('/') + 1);
}

/**
 * Writes several files as one change. When a change carries `baseSha`, it is rejected with
 * 409 if the file was changed by someone else since it was loaded.
 */
export async function commitFiles(changes: FileChange[], message: string, author: string): Promise<CommitResult> {
  if (!changes.length) throw new StoreError(400, 'Nothing to publish.');
  changes.forEach((c) => assertWritable(c.path));
  const info = storeInfo();
  if (info.mode === 'readonly') {
    throw new StoreError(503, 'Publishing is not set up. Add GITHUB_TOKEN and GITHUB_REPO to the environment variables.');
  }

  if (info.mode === 'local') {
    const current = await readFiles(changes.map((c) => c.path));
    for (const c of changes) {
      const existing = current.find((f) => f.path === c.path);
      if (c.baseSha !== undefined && (existing?.sha ?? null) !== c.baseSha) throw conflict(c.path);
    }
    for (const c of changes) {
      const target = path.join(ROOT, c.path);
      await fs.mkdir(path.dirname(target), { recursive: true });
      await fs.writeFile(target, c.encoding === 'base64' ? Buffer.from(c.content, 'base64') : c.content);
    }
    return { commit: 'local' };
  }

  const repo = info.repo!;
  const branch = info.branch!;
  for (let attempt = 0; attempt < 2; attempt++) {
    const head = await githubHead(repo, branch);
    const shas = await githubShas(repo, branch, commonPrefix(changes.map((c) => c.path)));
    for (const c of changes) {
      if (c.baseSha !== undefined && (shas.get(c.path) ?? null) !== c.baseSha) throw conflict(c.path);
    }
    const tree = await gh<{ sha: string }>(`/repos/${repo}/git/trees`, {
      method: 'POST',
      body: JSON.stringify({
        base_tree: head.tree,
        tree: await Promise.all(
          changes.map(async (c) => {
            const blob = await gh<{ sha: string }>(`/repos/${repo}/git/blobs`, {
              method: 'POST',
              body: JSON.stringify({ content: c.content, encoding: c.encoding === 'base64' ? 'base64' : 'utf-8' }),
            });
            return { path: c.path, mode: '100644', type: 'blob', sha: blob.sha };
          })
        ),
      }),
    });
    const commit = await gh<{ sha: string; html_url: string }>(`/repos/${repo}/git/commits`, {
      method: 'POST',
      body: JSON.stringify({ message: `${message}\n\nPublished from the website admin by ${author}.`, tree: tree.sha, parents: [head.commit] }),
    });
    try {
      await gh(`/repos/${repo}/git/refs/heads/${encodeURIComponent(branch)}`, { method: 'PATCH', body: JSON.stringify({ sha: commit.sha, force: false }) });
      return { commit: commit.sha, url: commit.html_url };
    } catch (error) {
      // Someone pushed in between: rebuild on the new head once.
      if (attempt === 0 && error instanceof StoreError && error.status === 409) continue;
      throw error;
    }
  }
  throw new StoreError(409, 'The site changed while publishing. Please try again.');
}

function conflict(p: string) {
  return new StoreError(409, `"${p}" was changed by someone else after you opened it. Reload the page to get the latest version, then make your change again.`);
}

/** Recent published changes to some paths (GitHub only). */
export async function history(paths: string[], limit = 20): Promise<HistoryEntry[]> {
  const info = storeInfo();
  if (info.mode !== 'github') return [];
  const lists = await Promise.all(
    paths.map((p) =>
      gh<{ sha: string; html_url: string; commit: { message: string; author: { name: string; date: string } } }[]>(
        `/repos/${info.repo}/commits?sha=${encodeURIComponent(info.branch!)}&path=${encodeURIComponent(p)}&per_page=${limit}`
      )
    )
  );
  const seen = new Map<string, HistoryEntry>();
  for (const c of lists.flat()) {
    seen.set(c.sha, { commit: c.sha, message: c.commit.message.split('\n')[0], author: c.commit.author.name, date: c.commit.author.date, url: c.html_url });
  }
  return [...seen.values()].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
}

/** A file's content at an earlier commit (GitHub only). */
export async function readAt(p: string, commit: string): Promise<string | null> {
  const info = storeInfo();
  if (info.mode !== 'github') return null;
  try {
    const file = await gh<{ content: string }>(`/repos/${info.repo}/contents/${p.split('/').map(encodeURIComponent).join('/')}?ref=${commit}`);
    return Buffer.from(file.content, 'base64').toString('utf8');
  } catch {
    return null;
  }
}

/** Vercel's deployment state for a commit, as reported to GitHub. */
export async function deployStatus(commit: string): Promise<{ state: 'pending' | 'success' | 'failure' | 'unknown'; url?: string }> {
  const info = storeInfo();
  if (info.mode !== 'github' || commit === 'local') return { state: 'unknown' };
  const status = await gh<{ statuses: { context: string; state: string; target_url?: string }[] }>(`/repos/${info.repo}/commits/${commit}/status`);
  const vercel = status.statuses.find((s) => /vercel/i.test(s.context));
  if (!vercel) return { state: 'pending' };
  const state = vercel.state === 'success' ? 'success' : vercel.state === 'pending' ? 'pending' : 'failure';
  return { state, url: vercel.target_url };
}
