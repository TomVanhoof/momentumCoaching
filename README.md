# Coach Fuai · Momentum Coaching

Static Astro site for Fuai's personal training business in Leuven. Hosted on Cloudflare Pages.

## Local development

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs dist/
npm run preview    # serve dist/ locally
npm run placeholders   # after a build: list every remaining [placeholder]
```

Requires Node 20+ (developed on Node 24).

## Deploy to Cloudflare Pages

1. Push the repo to GitHub and create a Pages project from it.
2. Build command `npm run build`, output directory `dist`.
3. Environment variables (Settings → Environment variables):
   - `SITE_URL`: the live URL, e.g. `https://example.com`. Used for canonical URLs, the sitemap and `robots.txt`. Without it these point at localhost.
   - `PUBLIC_FORM_ENDPOINT` and `PUBLIC_FORM_ACCESS_KEY`: see the contact form below.

## Where things live

| What | Where |
|---|---|
| Contact details, address, company number, form config | `src/data/site.ts` |
| All copy (English): nav, home, about, packages, privacy, 404 | `src/data/content.en.ts` |
| Colours, type, radii, spacing | `src/styles/tokens.css` |
| Global styles, buttons, focus | `src/styles/global.css` |
| Logo (inlined, recoloured by context) | `src/assets/logo.svg` |

Placeholders are written in `[square brackets]` and stay visible until replaced.

## How to…

**Change the accent colour.** Edit `--color-accent` in `src/styles/tokens.css`. Text on the accent stays ink; check the contrast before choosing a new colour. Also update the `#35B6FF` mentions in `design/` only if you still use those files.

**Add or remove a certification.** Edit the `certifications` array in `src/data/content.en.ts`. Each entry is `{ name, institution, year, meaning }`. The About page shows all of them; the home page shows the first `coach.certsShown` (default 3).

**Replace a photo placeholder.** Put the image in `src/assets/` and swap the `<PhotoPlaceholder … />` for Astro's `<Image />` (from `astro:assets`) with explicit `width` and `height`.

**Add Dutch later.** Copy `content.en.ts` to `content.nl.ts` with the same shape, then add pages under `src/pages/nl/` that read from it and set `lang="nl"` in the layout.

## Contact form

The form posts to `PUBLIC_FORM_ENDPOINT`. It works without JavaScript as a normal POST; with JS it submits via `fetch` and shows an inline message. A hidden honeypot field (`botcheck`) is included. If no endpoint is set, the form falls back to opening the visitor's mail client, and the phone and email links remain next to it.

**Web3Forms (suggested first step):** create an access key at web3forms.com, then set
`PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit` and `PUBLIC_FORM_ACCESS_KEY=<key>`.
Check their current free-tier limits and whether Turnstile or another captcha is available on that plan before relying on it.

**Swap provider:** change `PUBLIC_FORM_ENDPOINT` (and clear or replace the access key). For providers with a different honeypot field name, change `site.form.honeypot` in `src/data/site.ts`. Providers that need extra hidden fields can be handled in `src/components/ContactForm.astro`.

**Later option (not built):** a Cloudflare Pages Function at `functions/api/contact.ts` that validates Turnstile and sends mail through an email API (e.g. Resend). Point `PUBLIC_FORM_ENDPOINT` at `/api/contact` and the existing form keeps working.

## Still to do before launch

- Fill in every `[placeholder]` (run `npm run placeholders`).
- Real photos, certifications, prices and terms, quotes, Instagram handle, street number, ondernemingsnummer.
- Replace the privacy policy placeholder text.
- Set `SITE_URL` and the form variables in Cloudflare.
- Run Lighthouse on the deployed site.
# momentumCoaching
# momentumCoaching
