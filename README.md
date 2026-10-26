# Datum Plumbing & Heating Ltd. — website

Single-page static site: plain HTML + Tailwind CSS v3 (compiled and committed), vanilla JS, self-hosted fonts. Served by GitHub Pages.

## Folder layout

```
index.html              single page, sections separated by comment banners
assets/css/styles.css   compiled Tailwind (committed; rebuild with npm run build)
assets/js/main.js       mobile menu, gallery lightbox
assets/fonts/           self-hosted woff2 + OFL licences
images/brand/           logo SVG (traced) and mark
images/work/            job photos: name.webp (large) + name-sm.webp (small)
images/                 favicons, apple-touch-icon, og-image.jpg (1200x630)
src/input.css           Tailwind source + @font-face + custom CSS
tailwind.config.js      brand colours + font families
package.json            build / watch scripts
_fb-pack/               Facebook source pack (not published: underscore folder is ignored by Jekyll)
```

## Brand

| Name | Hex | Used for |
|---|---|---|
| navy | `#0b3369` | Logo lettering; headings, hero and about backgrounds |
| steel / steel-pale / steel-mist | `#95a9b8` / `#d8e3ea` / `#eef3f7` | Logo secondary tones; borders, section backgrounds |
| copper | `#c2410c` | Accent for buttons (taken from the orange expansion vessels in the cover photo) |

Fonts: Barlow Semi Condensed (headings) and Source Sans 3 (body), both OFL, via `@fontsource`.
Logo: the supplied logo was only 232px wide, so it was redrawn as an SVG (`images/brand/datum-logo.svg`). It uses system serif fonts for the lettering, so it is an approximation; ask the client for the original artwork if they have it. The favicons are a simple navy "D" placeholder.

## Editing

- **Text:** edit `index.html`.
- **Colours:** edit `tailwind.config.js`, then `npm install && npm run build`.
- **Adding a work photo:** save `name.webp` (~1600px long side) and `name-sm.webp` (~800px) in `images/work/`, then copy one `<li>` in the gallery section and change the file names, sizes and alt text.

## Before going live — checklist

- [ ] Swap `https://tobygregg.github.io/datum/` for the real domain (canonical, og tags, twitter image, JSON-LD in `index.html`).
- [ ] Point the form at the client's email (currently `toby1@greggs.org`) and activate FormSubmit (first submission sends a confirmation email).
- [ ] Confirm phone 07781 122085 and email datumph@gmail.com.
- [ ] Get the client to sign off the services wording.
- [ ] Assumptions / gaps: the pack had only one post, two reviews (one visible recommendation, Daniel P., no text) and no address, hours, prices, service area or accreditations, so none are on the site. The services list is inferred from the page bio ("All plumbing, heating and renewables"), the one post and the photos (heat pumps, cylinders, underfloor heating, a plant room). "General plumbing" and "Boilers and plant rooms" rest on the bio and the cover photo only. Ask the client for service area, hours, Gas Safe / MCS / insurance details and a proper logo. The plant-room cover photo is of unknown age and location.
- [ ] Ask whether "Ecostor" in the gallery intro is the right brand spelling for the old electric system.

## Source

Built from the Facebook pack in `_fb-pack/` (not published on the live site).
