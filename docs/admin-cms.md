# Admin & CMS

The admin at **/admin** edits the website's content without touching code:

| Section | What it edits | Stored in |
|---|---|---|
| Pages | Every piece of text on all 36 pages, plus the header, footer and site-wide SEO text | `src/content/text/**` |
| Projects | Work page projects (add, remove, reorder, featured showcase, screenshots, highlight chips) | `src/content/collections/projects.json` |
| Products | Product catalogue and “Trusted by” names | `src/content/collections/products.json` |
| Forms | Service and budget options of the Contact form, the Schedule a Consultation popup and the Zoho page form, with a live preview of the Zoho CRM mapping | `src/content/forms.json` |
| Site settings | Company name, phone, email, offices and map positions, social links, headline numbers | `src/content/site.json` |
| Media | Image uploads (PNG, JPEG, WebP, GIF, max 4 MB) | `public/uploads/YYYY/MM/` |
| Leads | Website enquiries read live from Zoho CRM; status changes are written back to Zoho | Zoho CRM |

## How publishing works

1. You edit, then press **Publish**. Unpublished edits are kept in your browser, so a reload does not lose them.
2. The server checks the change (see *Safety* below) and commits the changed files to GitHub as one commit, with your email in the message.
3. Vercel sees the commit and rebuilds the site. The admin's top bar shows **Website updating…** and then **Changes are live** (usually about 2 minutes).

Every publish is a Git commit, so each section has a **History** button with a one-click **Restore** (published as a new commit, so a restore can be undone too).

In local development (`npm run dev`, no `GITHUB_TOKEN`), Publish writes straight into the project files instead and the dev server shows the change immediately.

## Setup (Vercel → Settings → Environment Variables, then redeploy)

| Variable | Required | Value |
|---|---|---|
| `ADMIN_EMAIL` | yes | The email you sign in with. |
| `ADMIN_PASSWORD` | yes | A strong password, at least 8 characters (use 16+). There is **no default**: without these two the admin stays locked. |
| `ADMIN_SESSION_SECRET` | optional | A long random string. If unset, sessions are signed with a key derived from the password, so changing the password signs everyone out. |
| `GITHUB_TOKEN` | yes, for publishing | A fine-grained personal access token (see below). |
| `GITHUB_REPO` | yes, for publishing | `deepakkumar0818/Savant-X` |
| `GITHUB_BRANCH` | optional | The branch Vercel deploys to production. Default `main`. |

Without `GITHUB_TOKEN`/`GITHUB_REPO` the live admin is **read-only** (it shows a red “Read-only” badge).

### Creating the GitHub token

1. GitHub → your avatar → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
2. Name: `savantx-website-cms`. Expiration: up to 1 year (put a reminder to renew it).
3. **Repository access**: *Only select repositories* → `Savant-X`.
4. **Permissions** → Repository permissions → **Contents: Read and write** (Metadata: Read-only is added automatically). Nothing else.
5. Generate, copy it once, and paste it into `GITHUB_TOKEN` in Vercel. Never commit it or paste it into chats.

The token can only write `src/content/**.json` and `public/uploads/**` images through the admin: the server refuses every other path.

## Leads page: one extra Zoho permission

Website forms only need permission to *create* leads. Reading the list and changing a status also need `ZohoCRM.modules.leads.READ` and `ZohoCRM.modules.leads.UPDATE`. Until then the Leads page shows a short notice and an *Open Zoho CRM* button; the forms keep working.

Generate a refresh token with all four scopes (India data centre):

1. Open <https://api-console.zoho.in> → your **Self Client** → **Generate Code**.
2. Scope (paste exactly):
   `ZohoCRM.modules.leads.CREATE,ZohoCRM.modules.leads.READ,ZohoCRM.modules.leads.UPDATE,ZohoCRM.settings.fields.READ`
3. Time duration 10 minutes, description “website”, **Create**, and copy the code.
4. On your computer, in the project folder: `npm run zoho:oauth -- exchange` and paste the code when asked. The new refresh token is saved to `.env.local` (it is never printed).
5. `npm run zoho:oauth -- check` should pass. Then copy the new `ZOHO_REFRESH_TOKEN` value from `.env.local` into Vercel and redeploy.

## Safety

- **Login:** signed, expiring (8 hours) HttpOnly cookie, `SameSite=Strict`; 5 failed attempts lock that address for 15 minutes; every `/admin` page and `/api/admin` endpoint is checked by `src/middleware.ts` *and* again inside each endpoint; cross-site requests are refused; admin pages are `noindex`.
- **Text:** fields can be edited but not added or removed (the code reads them by name), and text that was filled in cannot be left empty.
- **Settings, forms, products, projects:** checked field by field (phone and email format, https links, exactly one headquarters, unique ids, valid categories and icons, at least one featured project, images only from `/images/` or `/uploads/`). The admin shows the reason when something is refused.
- **Concurrent edits:** if someone else published the same section after you opened it, your publish is refused instead of overwriting their work; reload and redo the change.
- **Uploads:** the file type is detected from its bytes (not its name); SVG and other formats are refused; the image size is read on the server.
- **Zoho CRM mapping:** the Forms page previews each option's Lead Type / subcategory with the same code the live forms use; the Products page warns when a product name is missing from Zoho's IT Lead Subcategory picklist.

## For developers

- Page text was moved out of the components into `src/content/text/<same path as the source file>.json`; components read it as `tx.<key>` (`import tx from '@/content/text/...json'`). `src/content/text-meta.json` describes each field (heading, button, list item…) for the editor.
- **New page or component:** write it normally, then run `npm run cms:extract -- --dry` (review), `npm run cms:extract -- --write`, and `npm run cms:index`. Already converted files are skipped. `npm test` fails if `src/content/pages.json` is out of date or if code and text files drift apart.
- The extraction leaves alone anything that is logic rather than copy: class names, ids, links, CRM values, JSON-LD, and the variables listed in `SKIP_VARS` in `scripts/cms-extract-text.mjs`.
- Collections and settings are read through `src/lib/company.ts`, `src/components/products/data.ts`, `src/app/work/page.tsx` and `src/components/zoho/landing/data.ts`; icons are chosen by name from `src/lib/cms/icons.ts`.
- Server code: `src/lib/cms/` (session, store, validation, Zoho admin calls) and `src/app/api/admin/`. UI: `src/app/admin/` and `src/components/admin/`.
- Tests: `tests/cms.test.mjs`.
