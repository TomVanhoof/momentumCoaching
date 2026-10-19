# Coach Fuai · Momentum Coaching — website build brief

You're building the website for **Fuai**, a personal trainer who works out of **Basic-Fit Leuven (Bondgenotenlaan)**, Belgium. Her business is called **Momentum Coaching**, but the site is about **her as a person** first and the company second.

**Slogan:** Move better. Get stronger. Feel amazing.

The design is finished and approved. Your job is to rebuild it faithfully as a fast, accessible, fully static Astro site. Do not redesign. Where something is unclear, follow the design files and this brief, and ask before adding new sections or content.

---

## 1. Tech stack (fixed)

- **Astro** (latest stable), `output: 'static'`. No SSR adapter and no server code in the first version.
- **Hosting:** Cloudflare Pages, free plan. The build output is `dist/`.
- **Styling:** plain CSS with the custom properties in `design/tokens.css`, using Astro's scoped `<style>` per component plus one global stylesheet. No Tailwind and no UI framework unless I ask.
- **JavaScript:** as close to zero as possible. Only small islands where needed (mobile nav toggle, form submit).
- **Fonts:** self-host them. Don't use the Google Fonts CDN (better for GDPR in Belgium and for speed). Use the Fontsource packages and check the exact names on npm: Bricolage Grotesque (variable), Figtree (variable), Instrument Serif (regular + italic). Subset to Latin and use `font-display: swap`.
- **Images:** use `astro:assets` (`<Image />` / `<Picture />`) with AVIF/WebP, explicit width and height, and lazy loading below the fold.
- **Content:** keep editable copy in one place so Fuai's details can be filled in without touching layout. Use content collections or a `src/data/*.ts` file for packages, certifications, testimonials, way-of-working steps and contact details.

## 2. What's in this folder

```
CLAUDE.md                     ← this brief
design/
  tokens.css                  ← colours, type, radii, spacing — the source of truth
  html/home.html              ← static design reference (open in a browser)
  html/about.html
  html/packages.html
  screenshots/*.png           ← full-page renders: desktop 1440px + home on mobile 390px
  source/*.dc.html            ← original design-tool files (Main = home, About, Packages,
                                 Mobile = home at phone width, StyleGuide). Reference only;
                                 they use a template syntax ({{accent}} = #35B6FF, <sc-for> loops).
assets/
  avatar.jpg                  ← small round photo of Fuai, used in the header (temporary crop)
```

Treat `design/html/*.html` and the screenshots as the visual spec. Their inline styles give exact sizes, spacing and colours. Rebuild them as clean components with classes, not inline styles.

## 3. Pages and routes

| Route | Design file | Purpose |
|---|---|---|
| `/` | home.html | One-pager: hero, focus areas, meet your coach, way of working, packages, reviews, contact |
| `/about` | about.html | Her story, what she stands for, **certifications** (very important to her) |
| `/packages` | packages.html | Package details, comparison table, getting started |
| `/privacy` | — (not designed) | Simple privacy policy page in the same style; placeholder text |
| `404` | — | Simple branded 404 using the same header and footer |

Anchors on the home page: `#about`, `#way`, `#packages`, `#contact`. The nav links "Way of working" and "Contact" from other pages go to `/#way` and `/#contact`.

## 4. Design system

All values are in `design/tokens.css`. The key rules:

**Colours**
- Background: warm off-white `#F3F1EC`. White `#FFFFFF` is for cards and alternating bands.
- Dark sections: petrol `#17323F`, with cards on top in `#21404E`. Text on petrol is white for headings and `#D5DEE2` for paragraphs.
- Text: ink `#15232B` for headings, `#3D4A50` for body, `#4F5B60` for labels.
- **Accent: Neon azure `#35B6FF`.** Use it for the main CTA buttons, one highlighted word per big heading, step numbers, and checkmarks and icons on petrol.
  - Text on the accent is always ink `#15232B`. Never white.
  - Never use the accent as a text colour on the light background (contrast is too low). On petrol it's fine.
  - Don't use it for large areas. The one exception is the "04 Train & adjust" card, which is intentional.
- **No sage or green tints.** These were removed on purpose.

**Typography**
- Headings: Bricolage Grotesque, semibold, tight letter-spacing.
- Personal accents: Instrument Serif *italic*, for **one or two words only** (Fuai, better, stronger, amazing, momentum, your…). Never use it for whole sentences.
- Body and UI: Figtree. Labels are 13px uppercase with 0.14em tracking.

**Shapes:** pill buttons (radius 999px), cards 24–28px, photos 32px, the contact band 36px. Primary buttons are at least 52px tall, and every tap target is at least 44px.

**Rhythm:** container max-width 1280px, side padding 32px (around 20px on phone), section padding about 112px vertically. On the home page, light and dark sections alternate. Never put two dark sections next to each other.

## 5. Page content and structure

Copy all copy exactly from the design files. Placeholders in **[square brackets]** are content Fuai still has to supply. Keep them visibly bracketed in the build so they're easy to find. Never invent facts, prices, numbers or reviews.

**Header (all pages):** round avatar + "Coach Fuai" + small "MOMENTUM COACHING" label · nav: About me, Way of working, Packages, Contact · dark "Book a free intro" button. On mobile, collapse the nav into an accessible menu button (`aria-expanded`, focus handling, Escape closes it). The design file just wraps the links; a proper menu is better.

**Home**
1. Hero: location pill, "Hi, I'm *Fuai* — your personal trainer.", H1 slogan over three lines (italic words, "amazing." highlighted in accent), intro text, two CTAs (Book a free intro → `#contact`, See packages → `/packages`), small trust line. On the right, a large photo with a "View my certifications" badge (→ `/about#certifications`) and a white card showing the location and 1-1 / Hybrid / Online chips.
2. Focus strip (petrol): Strength · Weight loss · Power · Energy · Mobility.
3. Meet your coach: photo + text + 3 certification rows + link to `/about`.
4. Way of working (petrol): 4 steps. Free intro → Assessment → Your plan → Train & adjust (the accent card).
5. Packages: 1-1 coaching, Hybrid coaching (petrol card, featured), Online coaching. Each has a price placeholder, 4 checkmarks and a CTA to `#contact`.
6. What clients say: white band with 3 quote cards (placeholders).
7. Contact: a petrol rounded band with phone, email, Instagram and location on the left, and a form on the right.
8. Footer: logo placeholder, links, © line with ondernemingsnummer placeholder.

**About:** intro + facts list (Where, Coaching since, Languages, Coaching types) + portrait · "What I stand for" (petrol) with three pillars from the slogan · **Certifications** (`id="certifications"`): a grid of cards (name, institution, year, one line on what it means for clients) plus a "Currently studying" bar · CTA band · footer. Build the certifications from a data array so Fuai can add or remove them easily. The design shows 4; support any number.

**Packages:** title + intro · three detailed package cards (photo, description, "Best for", price, extra terms, checkmarks, CTA) · "Compare at a glance" table (keep it in an `overflow-x: auto` wrapper with a proper `<th scope>`) · "Three steps to your first session" · CTA band · footer.

**Known fix:** in the 1-1 package card, the price line "[€ PRICE] / [session or month]" wraps badly at desktop width. Keep the price on one line (`white-space: nowrap` on the amount, unit underneath if needed).

## 6. Contact form (static hosting)

The site is fully static on Cloudflare Pages, so the form needs a third-party endpoint. Build it so the provider can be swapped by changing one config value:

- Fields: name, email (required), goal (select), package (select), message, plus a hidden honeypot field.
- **Preferred first step:** a free form backend that accepts a plain HTML POST, such as Web3Forms or Formspree. Check their current free-tier limits. Put the endpoint and key in an env var (`PUBLIC_FORM_ENDPOINT`).
- Progressive enhancement: the form works as a normal POST without JS. With JS it submits via `fetch` and shows an inline success or error message (`aria-live="polite"`).
- Spam protection: add Cloudflare Turnstile if the chosen provider supports it.
- Always keep the `mailto:` and `tel:` links visible next to the form as a fallback.
- Later option, not now: a Cloudflare Pages Function plus an email API. Leave a short note in the README on how we'd switch.

## 7. Contact details & business info (real)

- Phone: **0456 56 07 02** (`tel:+32456560702`)
- Email: **Coach.Fuai@gmail.com**
- Location: **Basic-Fit Leuven, Bondgenotenlaan [nr], 3000 Leuven** (street number to be confirmed)
- Instagram: [handle to be supplied]
- Ondernemingsnummer: [to be supplied]. It's legally required in the footer in Belgium.

## 8. Placeholders still to come from Fuai

Logo (header/footer, SVG preferred) · 4–6 photos (hero portrait ≥1600px tall, coaching shots, package images, about portrait) · her story/bio · certifications (name, institution, year) · years of experience · languages · prices and terms per package · number of 1-1 sessions in hybrid · check-in frequency · session length · client quotes (with permission) · Instagram handle · street number · company number.

Until real photos exist, render images as the striped placeholder box with a short caption, as in the designs. Make it a single `<PhotoPlaceholder label="…" />` component so it's easy to swap.

## 9. Quality bar

- **Accessibility:** WCAG 2.1 AA. Use semantic landmarks, one `h1` per page, real `<button>`/`<a>`/`<label>` elements, visible focus styles (accent outline on dark, ink outline on light), a skip link, `alt` text on every photo, and decorative SVGs with `aria-hidden`. Respect `prefers-reduced-motion`.
- **Responsive:** check it at 360, 390, 768, 1024, 1280 and 1440px. Grids collapse to one column on phones, and the mobile home should match `screenshots/home-mobile.png`.
- **Performance:** aim for Lighthouse 95+ on all four categories. No layout shift from fonts or images.
- **SEO / local SEO:** unique `<title>` and meta description per page (target: "personal trainer Leuven"), Open Graph tags, canonical URLs, `sitemap.xml` (@astrojs/sitemap), `robots.txt`, JSON-LD with `Person` + `LocalBusiness` (personal trainer, Leuven address, phone, email). Use `lang="en"` for now.
- **Language:** English only for now. Structure the copy so a Dutch version (`/nl/`) can be added later without restructuring.
- **Privacy:** no Google Fonts CDN and no tracking scripts by default. If analytics is added later, use Cloudflare Web Analytics (cookieless).

## 10. Deliverables

1. Astro project with components: `BaseLayout`, `Header`, `Footer`, `Button`, `SectionHeading`, `PackageCard`, `CertificationCard`, `StepCard`, `Testimonial`, `PhotoPlaceholder`, `ContactForm`.
2. A data file (or content collections) holding all editable content.
3. A README with local dev, build and Cloudflare Pages deploy steps (build command `npm run build`, output `dist`), plus how to change the accent colour, add a certification, and swap the form provider.
4. A short list of every remaining `[placeholder]`, generated by grepping the build.

Work in small steps: scaffold the project and tokens → layout, header and footer → home → about → packages → form → SEO and polish. Show me the home page before moving on to the other pages.
