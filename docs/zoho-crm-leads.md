# Zoho CRM Leads integration

The website's enquiry forms create **Leads in Zoho CRM** through the Zoho CRM REST API (v8), using OAuth with a refresh token. Everything runs on the server; no Zoho credential ever reaches the browser.

| Form | Where | Endpoint |
|---|---|---|
| Zoho enquiry form (page + popup) | `/expertise/zoho-integrations` | `POST /api/leads` |
| Contact form ("Start Your Project") | `/contact` | `POST /api/leads` |
| Schedule a Consultation popup (`ConsultationDialog`) | Home, About | `POST /api/leads` |
| Request a demo | `/products` | `POST /api/leads` |
| Zoho strategy form (also copies to Google Sheets) | Zoho app pages | `POST /api/zoho-form` |
| Contact support popup | `/contact` (FAQ) | `POST /api/contact` |
| Newsletter signup | Footer, every page | `POST /api/contact` |

Every form creates a Lead. `/api/contact` and `/api/zoho-form` use `createLeadFromForm` in `src/lib/zohoLeadService.ts`: the API when OAuth is configured, Web-to-Lead when it isn't or the token is rejected.

The CRM has no Lead Type or Lead Source value for support or newsletter, so those Leads have **no Lead Type** and are marked in the Description ("Support request: …" / "Newsletter signup …"). Support uses Lead Source **Contact Form**; newsletter uses **Website**, with the email address as the Last Name (the form only asks for an email). To separate them in reports, add picklist values in the CRM first, then map them in `classifyService`.

## How a submission is handled

1. The form posts JSON to `/api/leads`.
2. The server checks it:
   - the request is same-origin, JSON, and at most 16 KB;
   - fields are validated and length-limited;
   - the hidden honeypot field is checked;
   - the per-visitor rate limit is applied;
   - repeats and double clicks are detected.
3. It gets an access token from `https://accounts.zoho.in/oauth/v2/token` using the refresh token. The token is cached until shortly before it expires, and concurrent requests share one refresh.
4. It calls `POST https://www.zohoapis.in/crm/v8/Leads` with `Authorization: Zoho-oauthtoken …` and `{ "data": [ { … } ] }`. If Zoho answers `401`, it refreshes the token once and retries once.
5. **Only when Zoho returns `SUCCESS` with a record id** does the visitor see the success message. Only then does the team notification email go out. The form is reset only after this confirmation.
6. Any failure returns a generic message to the visitor; their details stay in the form so they can retry. The server log records only the Zoho error code (and the field name, if any). It never records the visitor's details or any credentials.

### Field mapping

The API names and picklist values below come from the SavantX CRM. Fields marked *internal* are set by the server, and visitors never see them.

| Zoho field (API name) | Value |
|---|---|
| First Name / Last Name (`First_Name`, `Last_Name`) | Name, split on the last space; a single word becomes Last Name |
| Email (`Email`) | Email |
| Phone (`Phone`) | Phone |
| Mobile (`Mobile`) | Only when a form provides a separate mobile number (none does today) |
| Company (`Company`) | Company; blank → `Website Enquiry` |
| Budget (`Budget`) | The budget range chosen |
| Interest Zoho Apps (`Interest_Zoho_Apps`) | The Zoho app named in the service (e.g. "Zoho CRM QuickStart" → `Zoho CRM`), or the strategy form's "Zoho apps" field |
| Description (`Description`) | Message, plus service, budget, page and campaign (UTM) details |
| Lead Source (`Lead_Source`) — *internal* | `Contact Form` for the Contact page; `Website` for every other form (override with `ZOHO_LEAD_SOURCE`) |
| Lead Status (`Lead_Status`) — *internal* | "New Lead" (sent as its stored value `Attempted to Contact`) |
| Lead Type (`Lead_Type`) — *internal* | From the service: hardware, IoT, embedded, PCB, firmware or 3D printing → `Electronics Hardware`; hardware plus software → `Both`; anything else → `IT Services` |
| IT Lead Subcategory (`IT_Lead_Subcategory1`) — *internal* | From the service (see below) |
| Electronics Lead Subcategory (`Electronics_Lead_Subcategory1`) — *internal* | Hardware services: IoT → `IoT`; embedded or firmware → `Embedded Systems`; PCB or circuit → `PCB Design`; 3D printing → `3D Printing`; prototyping or product development → `Product Development`; industrial automation → `Industrial Hardware` + `Automation` |
| Priority (`Rating`) — *internal* | From the budget: up to ₹25,000 → Low; ₹25,000 – ₹1,00,000 → Medium; above ₹1,00,000 or the monthly membership → High (stored value `ShutDown`); none or "not sure" → Medium |
| Contact Date (`Contact_Date`) — *internal* | Time of submission (India time) |
| Name & Email (`Name_Email`) — *internal* | `Name (email)` |

**IT Lead Subcategory**, from the service the visitor chose:

| Service | Subcategory |
|---|---|
| Zoho services, CRM, Creator, Books, People, Recruit, membership, and anything sent from the Zoho page | `Zoho Development` |
| ERP | `ERP` |
| Website, web application or e-commerce | `Website Development` |
| Mobile | `Mobile App` |
| AI or analytics | `AI / ML` |
| Automation, workflow or integration | `Automation` |
| Shopify | `Shopify` |

**Demo requests** from the Products page are recorded with Lead Type `Request For Demo`, and IT Lead Subcategory set to the product chosen: `Vidya Setu`, `Sehat Setu`, `FleetMint`, `Student Portal`, `Food Ordering App` or `Garage Management`. Subcategory is left empty for "Not sure yet". If you rename a product, rename it in the CRM picklist too.

The rules live in `classifyService` and `priorityFromBudget` in `src/lib/zohoLeads.ts`; change them there. **Picklists must be sent as stored values, not labels.** Zoho stores an "actual value" behind each label shown in CRM, and in this CRM some differ: Lead Status "New Lead" is stored as `Attempted to Contact`, and Priority "High" as `ShutDown`. `inspect` lists both, and it was checked against the live CRM on 23 Oct 2026.

If Zoho ever rejects one of the internal or optional fields, the lead is created without that field rather than lost. That could happen if a picklist value is renamed in CRM, for example. The server log then records `created without an optional field Zoho rejected: INVALID_DATA field=…`.

All of these values are listed in `LEAD_FIELDS` in `src/lib/zohoLeads.ts`. They were taken from the CRM's API-names page and picklists, and a test ensures the site never sends a field or picklist value outside that list. Run `npm run zoho:oauth -- inspect` to re-check them against the live CRM, for example after renaming a picklist value.

## Environment variables

Set these in `.env.local` for local use, and in your host's environment settings for production (Vercel → Project → Settings → Environment Variables). **Never** prefix them with `NEXT_PUBLIC_`, and never commit them. `.env*` files are git-ignored.

| Variable | Required | Value |
|---|---|---|
| `ZOHO_CLIENT_ID` | yes | Client ID of the OAuth client that generated the refresh token |
| `ZOHO_CLIENT_SECRET` | yes | That client's secret |
| `ZOHO_REFRESH_TOKEN` | yes | Written by `npm run zoho:oauth -- exchange` |
| `ZOHO_ACCOUNTS_URL` | no | `https://accounts.zoho.in` (default; India data centre) |
| `ZOHO_API_DOMAIN` | no | `https://www.zohoapis.in` (default) |
| `ZOHO_LEAD_SOURCE` | no | Lead Source for non-Contact-page leads (default `Website`); must be a value in the Lead Source picklist |
| `ZOHO_REDIRECT_URI` | Server-based app only | The redirect URI registered for that app |

Empty values, and values starting with `REPLACE_WITH`, count as "not configured". The server checks them on every request.

**Until all three required values are set**, the site uses the previous Zoho **Web-to-Lead** form so leads keep arriving, and the server log notes this each time. Web-to-Lead can only fill the fields in that Zoho webform: Last Name, Company, Email, Mobile (it receives the phone number), Description and Interest Zoho Apps. Lead Type, Priority, Budget, Phone and the other fields above are filled **only through the API**.

## Commands

All of these run locally from the project folder. They read `.env.local`, never print secrets, grant codes or tokens, and exit with status 1 on any failure.

| Command | What it does |
|---|---|
| `npm run zoho:oauth -- exchange` | Asks for a grant code and exchanges it for tokens. Saves `ZOHO_REFRESH_TOKEN` into `.env.local` without printing it. |
| `npm run zoho:oauth -- check` | Gets an access token with the refresh token, which proves OAuth works. Creates and changes nothing in CRM. With no refresh token yet, it reports whether Zoho accepts the client ID and secret. |
| `npm run zoho:oauth -- inspect` | Reads the live Leads field list. Confirms that every API name and picklist value the site sends exists and is writable, and lists system-mandatory fields. Needs the extra `ZohoCRM.settings.fields.READ` scope. |
| `npm run zoho:oauth -- url [--inspect]` | Server-based apps only: prints the consent URL. |

You can also run `exchange <code>`, but typing the code as an argument leaves it in your shell history.

## Getting the refresh token (India data centre)

A refresh token belongs to the client that generated the grant code. The client ID and secret in `.env.local` **must** be that client's.

### Option A: Self Client (recommended for a single website)

1. Sign in to <https://api-console.zoho.in> with the Zoho account that administers the CRM.
2. Open **Self Client**, or choose **Add Client → Self Client** if there isn't one.
3. Open the **Client Secret** tab. Put that Client ID and Client Secret in `.env.local`. A Self Client's credentials differ from any Server-based client's.
4. Open **Generate Code** and fill in the form:
   - **Scope:** `ZohoCRM.modules.leads.CREATE,ZohoCRM.modules.leads.READ,ZohoCRM.modules.leads.UPDATE,ZohoCRM.settings.fields.READ`. Lead creation needs only the first; the admin's Leads page needs READ and UPDATE; `inspect` and the admin's picklist checks need `settings.fields.READ`.
   - **Time duration:** 10 minutes
   - **Description:** "Website leads"
5. Press **Create**, choose the SavantX CRM organisation if asked, and copy the code.
6. Within the time limit, run `npm run zoho:oauth -- exchange` and paste the code.
7. Run `npm run zoho:oauth -- check`.

### Option B: Server-based Application

1. In <https://api-console.zoho.in>, choose **Add Client → Server-based Applications**.
2. Enter a name, the homepage URL and an **Authorized Redirect URI**, for example `https://www.savantxtechnologies.com/zoho-oauth-callback`. The page doesn't need to exist; you only copy the code from the address bar.
3. Put the client ID, secret and redirect URI (`ZOHO_REDIRECT_URI`) in `.env.local`.
4. Run `npm run zoho:oauth -- url` (it requests all four scopes above). Open the URL while signed in as a CRM admin and accept. It requests offline access, so Zoho issues a refresh token.
5. Copy `code` from the address bar you land on. Within a few minutes, run `npm run zoho:oauth -- exchange` and paste it.
6. Run `npm run zoho:oauth -- check`.

### Then

- Add the same three values to the production environment variables and redeploy.
- Restart the dev server so it loads the new values.
- Send one test enquiry and confirm the Lead's fields in CRM.

## If the client secret has been exposed

The secret for client `1000.CWWK…` has been shared in plain text, in chat and in earlier prompts, so treat it as compromised. Whether the API Console can regenerate a secret depends on the client type and console version, so check before deciding:

1. In <https://api-console.zoho.in>, open the client and look at its **Client Secret** tab or menu for a regenerate or reset option.
   - **If there is one:** regenerate. Every refresh token issued with the old secret may stop working, so run `exchange` again, then update `.env.local` and the production variables.
   - **If there isn't one:** create a new client (Option A or B), generate a new refresh token with it, and update all three variables. Confirm that `check` passes, and that production works after redeploying.
2. Then **delete the old client**. This revokes its refresh tokens, so do it only after the new client works. Anyone holding the old secret then has nothing to use it with.
3. Also review **Zoho Accounts → Security → Connected Apps** (accounts.zoho.in) and revoke anything you don't recognise.

Never paste secrets, grant codes or refresh tokens into chat, tickets or source code. `exchange` writes the refresh token straight to `.env.local` for this reason.

## Production notes

- **Rate limiting** (8 valid submissions per visitor per 10 minutes) and **duplicate detection** (2 minutes) are in memory, so each server instance keeps its own count. On serverless hosting with several instances, back `isRateLimited` / `isDuplicate` / `remember` in `src/app/api/leads/route.ts` with a shared store such as Upstash Redis or Vercel KV. Consider a CAPTCHA (for example Cloudflare Turnstile) if spam appears.
- **Token reuse:** the access token is cached per server instance. Zoho limits how often tokens can be generated. The cache keeps one instance to one refresh an hour, but many cold starts can still add up.
- **Zoho-side duplicates:** to stop repeat leads with the same email, add `duplicate_check_fields: ["Email"]` to the insert body. Zoho will then reject repeats with `DUPLICATE_DATA`, which is treated as a failure, so decide how you want returning prospects handled first.
- **Timeouts:** each Zoho request has an 8-second timeout. The browser waits up to 25 seconds.
- **Team email:** the notification email needs `EMAIL_USER` and `EMAIL_PASS`. Save env files as UTF-8; Next.js cannot read a UTF-16 file.

## Tests

```
npm test
```

The tests use Node's built-in test runner (`tests/zoho-leads.test.mjs`) with a scripted fake in place of Zoho; they never call the real API. They cover:
- validation and missing or invalid fields;
- field mapping;
- token reuse and expiry;
- invalid OAuth credentials, and retrying after a `401`;
- Zoho rejections, rate limits, outages and timeouts;
- the fallback when OAuth isn't configured;
- duplicates, double clicks and rate limiting.

They also check that no credential or personal data appears in responses or logs.

## Form options and CRM values

The Contact form and the Schedule a Consultation popup share their budget ranges, phone/email checks and UTM capture (`src/components/forms/leadForm.ts`). Their service labels are worded so `classifyService` maps each one to a CRM picklist value: for example "Mobile App Development" → IT Services / Mobile App, "Hardware & Electronics — PCB Design & Circuit Engineering" → Electronics Hardware / PCB Design. Budgets give Priority Low (up to ₹25,000), Medium (₹25,000 – ₹1,00,000, or not sure) or High (above ₹1,00,000).
