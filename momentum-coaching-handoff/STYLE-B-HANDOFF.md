# Momentum Coaching — Colour update: "Style B · Bright studio"

> **Read this together with `CLAUDE.md`.** Layout, content, typography, spacing, shapes and tech stack stay exactly as in the existing brief and design files. **Only the colour system changes.** Where this file conflicts with `CLAUDE.md` or `design/tokens.css` on colour, **this file wins**. The old beige/petrol/neon-azure scheme is retired. Do not use it anywhere.

Reference for the look: the board "Style guide B — Bright studio" in the design file (`StyleGuideB.dc.html`).

---

## 1. What to do

1. Replace the colour tokens in `tokens.css` (section 2).
2. Recolour every section as described in section 4.
3. Apply the gradient only in the four places listed in section 5.
4. Check the rules in section 6 and the contrast table in section 7.
5. Remove every leftover `#35B6FF`, `#17323F`, `#21404E`, `#F3F1EC`, `#15232B` and any petrol/beige/azure naming. Grep for them at the end.
6. In the README, update the "how to change the accent colour" section to the new tokens.

---

## 2. Tokens (replace the old colour tokens)

```css
:root {
  /* Base */
  --color-base:        #F2F2F2; /* page background (light grey) */
  --color-surface:     #FDFEFF; /* cards, white bands, form fields */

  /* Rhythm — graphite replaces petrol */
  --color-graphite:    #212121; /* dark sections, headings, primary text */
  --color-graphite-card: #2E2E2E; /* cards ON graphite */
  --color-text-on-dark:  #BDBDC2; /* paragraph text on graphite (headings on dark = --color-surface) */

  /* Text on light */
  --color-text-body:   #4A4A4F; /* paragraphs */
  --color-text-muted:  #5A5A5F; /* labels, captions, small print */
  --color-line:        #E4E4E8; /* borders, dividers, table lines */

  /* Colour accents */
  --color-energy:      #FCCA82; /* "Sunset orange" — action + highlight */
  --color-lilac:       #D7D7F4; /* "Lilac" — personal, trust, certifications */

  /* Signature gradient — see section 5, only 4 allowed places */
  --gradient-signature: linear-gradient(100deg, #FCCA82 0%, #D7D7F4 50%);
}
```

Placeholder striping for photo placeholders: `repeating-linear-gradient(135deg, #E1E1E1 0 16px, #E8E8E8 16px 32px)`.

### Mapping from the old scheme

| Old | New |
|---|---|
| `#F3F1EC` warm off-white background | `--color-base` `#F2F2F2` |
| `#FFFFFF` white | `--color-surface` `#FDFEFF` |
| `#17323F` petrol (dark sections) | `--color-graphite` `#212121` |
| `#21404E` cards on petrol | `--color-graphite-card` `#2E2E2E` |
| `#15232B` ink | `--color-graphite` `#212121` |
| `#3D4A50` body text | `--color-text-body` `#4A4A4F` |
| `#4F5B60` labels | `--color-text-muted` `#5A5A5F` |
| `#D5DEE2` text on petrol | `--color-text-on-dark` `#BDBDC2` |
| `#35B6FF` neon azure accent | `--color-energy` `#FCCA82` (and lilac where listed below) |

---

## 3. Colour roles in one sentence each

- **Sunset orange `#FCCA82` = energy.** Things you do or should notice: main buttons, the one highlighted word in a big heading, step number 04, checkmarks and numbers on graphite.
- **Lilac `#D7D7F4` = personal.** Things that build trust: the "Certified personal trainer" badge, icon circles next to certifications, and the reviews section.
- **Graphite `#212121` = rhythm.** Dark bands that give contrast, plus all headings and primary text.
- **Grey `#F2F2F2` = base**, **white `#FDFEFF` = cards.** Sections are grey with white cards on top.

Approximate balance on a page: grey ~50 %, graphite ~20 %, white ~15 %, lilac ~10 %, orange ~5 %. Orange is deliberately rare. If a page looks "very orange", too much has been coloured.

---

## 4. Where each colour goes (component by component)

### Global
- `body` background: `--color-base`. Headings: `--color-graphite`. Paragraphs: `--color-text-body`. Labels/captions: `--color-text-muted`.
- Cards on grey: `--color-surface`, optionally 1px `--color-line` border.
- Focus outline: `--color-graphite` 2px on light, `--color-energy` 2px on graphite.
- Form fields: `--color-surface` background, `--color-line` border, graphite text.

### Header
- Background grey (same as page). Avatar with **gradient ring** (section 5, place A).
- Nav links graphite. "Book a free intro" button: **solid orange, graphite text** (see Buttons).

### Hero
- Grey background.
- Location pill: white with line border, graphite text.
- H1 slogan in graphite. **One** highlighted word ("amazing.") with a solid orange highlight behind it, graphite text. The Instrument Serif italic words stay graphite.
- "Hi, I'm *Fuai*" row: small avatar with **gradient ring** (place B).
- Primary CTA: solid orange. Secondary CTA: outline/ghost in graphite.
- Photo: placeholder striping above, with the **offset gradient shape** behind it (place C).
- "Certified personal trainer" / "View my certifications" badge on the photo: **lilac** background, graphite text.
- White card with location and chips: white, chips in grey/line.

### Focus strip (Strength · Weight loss · Power · Energy · Mobility)
- **Graphite** band, white text, orange dots/separators.

### Meet your coach
- Grey background. Three certification rows: **lilac circle** with a graphite icon, white row card.

### Way of working
- **Graphite** band, white heading, `--color-text-on-dark` paragraphs. Cards on it: `--color-graphite-card`.
- Step numbers 01–03 in orange. Step **04 "Train & adjust" is a solid orange card** with graphite text (the only large orange area on the site).
- The **4px journey line** above the four steps uses the gradient (place D).

### Packages
- Grey background, white cards.
- Featured **Hybrid** card: graphite background, white text, orange checkmarks, orange button with graphite text, and a **6px gradient strip along its top edge** (place E).
- 1-1 and Online cards: white, graphite text, checkmarks in graphite on an orange or lilac circle (pick orange, keep consistent), outline buttons.

### Reviews ("What clients say")
- **The whole section background is lilac `#D7D7F4`.** Quote cards inside are grey `#F2F2F2`. Quote text graphite, names in muted text.
- Include the black CTA card "Let's build your momentum." (graphite background, white text, orange button) next to or below the quotes, as in the style guide.

### Contact
- **Graphite** rounded band (36px radius), white text, `--color-text-on-dark` paragraphs. Contact icons in orange. Form fields on it: white with graphite text. Submit button: orange with graphite text.

### Footer
- Grey background, graphite text, `--color-line` top border. Logo placeholder stays a placeholder.

### About page
- Intro + facts on grey/white. "What I stand for" band: **graphite**. Certifications grid: white cards with **lilac** icon circles; "Currently studying" bar: lilac. CTA band: graphite with orange button.
- Never put two graphite sections directly next to each other (same rule as before). If it happens, change one to grey or white.

### Packages page
- Same logic as the home packages: grey background, white cards, the featured one graphite. Comparison table: white, `--color-line` lines, graphite header row text, featured column highlighted in lilac at ~40 % tint (or just a lilac header cell). CTA band graphite.

---

## 5. The gradient — strictly 5 uses, never anywhere else

`linear-gradient(100deg, #FCCA82 0%, #D7D7F4 50%)` (direction/stops vary slightly per place):

| | Place | CSS |
|---|---|---|
| A | Ring around Fuai's avatar in the header (3px padding) | `linear-gradient(135deg, #FCCA82 0%, #D7D7F4 70%)` |
| B | Ring around Fuai's small photo in the "Hi, I'm Fuai" hero line (3px padding) | same as A |
| C | Offset shape behind the big hero photo: absolutely positioned, offset 16px down/right, same 28px radius, photo sits on top | `linear-gradient(135deg, #FCCA82 0%, #D7D7F4 60%)` |
| D | 4px rounded line above the four way-of-working steps | `linear-gradient(90deg, #FCCA82 0%, #D7D7F4 60%)` |
| E | 6px strip across the top of the featured Hybrid card | `linear-gradient(90deg, #FCCA82 0%, #D7D7F4 60%)` |

**Hard rules:** the gradient is never a section background, never behind text, never on buttons, never on cards as a fill. Lines, rings and frames only. Mark decorative gradient elements `aria-hidden="true"`. If a place isn't on the page (e.g. avatar in a different layout), skip it rather than inventing a new use.

---

## 6. Buttons and tags

- **Primary button:** background orange `#FCCA82`, text graphite `#212121`, pill (999px), min-height 52px. Hover: slightly darker orange (`#F7BD68` is fine) or lift 1px. Includes a small arrow circle in graphite with orange arrow, where the design has one.
- **Primary button on graphite:** identical (orange with graphite text).
- **Secondary:** transparent, 1.5px graphite border, graphite text. On graphite: 1.5px white border, white text.
- **Dark button** (where the old design used a dark button, e.g. some header states): graphite background, white text.
- **Tags / chips:** white or grey with `--color-line` border and graphite text. Only use lilac chips for certification-related tags.

---

## 7. Accessibility — contrast (verified)

| Combination | Ratio | Use |
|---|---|---|
| Graphite on orange `#FCCA82` | 10.7 : 1 | buttons, highlight, step 04 |
| Graphite on lilac `#D7D7F4` | 11.4 : 1 | badge, reviews, icon circles |
| Graphite on grey / white | > 14 : 1 | all headings |
| Body `#4A4A4F` on grey / white | > 7 : 1 | paragraphs |
| Muted `#5A5A5F` on grey / white | > 5.5 : 1 | labels, captions |
| `#BDBDC2` on graphite | > 8 : 1 | paragraphs on dark |
| White / orange on graphite | > 14 : 1 / 10 : 1 | headings, icons on dark |

**Hard rules**
1. **Text on orange or lilac is always graphite. Never white.**
2. **Never use orange or lilac as a text colour on light backgrounds.** They are fills and shapes only. (On graphite, orange text/icons are fine.)
3. Highlighted words are a solid orange highlight behind graphite text, not an orange-coloured font.
4. Tap targets ≥ 44px, primary buttons ≥ 52px.
5. Do not add new colours. No blues, greens or yellows. If something needs another colour, ask first.
6. Don't tint backgrounds with lilac except the reviews section (and the "Currently studying" bar and comparison highlight on the About/Packages pages).

---

## 8. Photo placeholders

Until real photos exist, keep the `<PhotoPlaceholder />` component, restyled with the grey stripes from section 2. Caption text in `--color-text-muted`.

---

## 9. Definition of done

- [ ] `tokens.css` updated; no hard-coded old hex values left (grep for `35B6FF`, `17323F`, `21404E`, `F3F1EC`, `15232B`, `3D4A50`, `4F5B60`, `D5DEE2`).
- [ ] Gradient appears in exactly the five places in section 5, and nowhere else.
- [ ] Reviews section is lilac; the featured package card and the contact band are graphite; no two graphite sections touch.
- [ ] Orange is limited to buttons, one highlight word per big heading, step numbers/checkmarks and the 04 card.
- [ ] All text on orange/lilac is graphite.
- [ ] Screenshot desktop (1440) and mobile (390) of Home, About and Packages and compare to the "Style guide B" board.
- [ ] README updated with the new colour tokens and "how to change the accent colour".
