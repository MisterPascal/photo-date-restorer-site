# DateBack Landing Page

Static GitHub Pages landing page for the Android app **DateBack** — a local utility
that restores photo dates from supported chat-style filenames (e.g. `IMG-20240510-WA0001.jpg`)
so the gallery sorts them correctly.

No build step, no framework, no external trackers, no cookies. The one font
(Hanken Grotesk, matching the app) is **bundled locally** in `assets/fonts/` — no CDN,
so the no-external-request privacy promise still holds.

The visual identity mirrors the Android app: sober dark "pro tool" theme, cool charcoal
surfaces, a single deep-blue accent (`#4F8DF5`), Hanken Grotesk. Design tokens live in
`assets/tokens.css`; the rest of the CSS references tokens only.

## Languages

The site is German by default and switchable to 8 more languages (English, Spanish,
French, Italian, Portuguese, Polish, Dutch, Turkish) via the header dropdown.

- All translatable text carries a `data-i18n="key"` attribute; translations live in
  `assets/i18n.js`.
- The chosen language is stored only in `localStorage` (a functional preference, not a
  cookie) and auto-detected from the browser on first visit (fallback: German).
- To edit a string, change it in `assets/i18n.js` for each language (the German `<html>`
  text is the visible fallback if JS is disabled).

## Structure

```
/
├── index.html        # Landing page
├── privacy.html      # Privacy policy
├── support.html      # Support / contact
├── 404.html          # Not-found page
├── robots.txt
├── sitemap.xml
├── .nojekyll         # Serve files as-is on GitHub Pages
├── README.md
└── assets/
    ├── tokens.css    # Design tokens (dark theme, blue accent, fonts)
    ├── styles.css    # Layout/components (references tokens + @font-face)
    ├── app-preview.svg
    ├── icon.svg      # Also used as favicon
    ├── fonts/        # Hanken Grotesk (bundled, no CDN)
    └── i18n.js       # Language switcher + translations (9 languages)
```

## Local preview

Serve the folder over HTTP so relative paths (CSS, JS) resolve — opening `index.html`
directly via `file://` may not load `assets/`:

```
python -m http.server 5000
```

Then open <http://localhost:5000>.

## Deployment

Enable GitHub Pages in the repository settings and publish from the main branch root.
The `.nojekyll` file ensures all files are served as-is.

## TODO

- **Real screenshots:** replace the placeholders in the Screenshots section with actual
  app screenshots (the `app-preview.svg` hero is an abstract mock).
- **Pages URL:** replace `https://example.github.io/` with the real GitHub Pages host (or
  custom domain) in `index.html` (canonical), `robots.txt`, and `sitemap.xml`. Pending the
  Pages/domain decision (and a possible repo rename to `dateback-site`).
- **Localise the sharpened copy:** the German + English strings were aligned with the app
  (100 files/day, photos *and* videos, undo/copy-mode, no all-files access, one-time pass
  €3.49 + yearly €2.99). The other 7 languages have the brand/price/links updated but still
  carry the older persuasive wording — propagate the DE/EN content to es/fr/it/pt/pl/nl/tr.
- Update the privacy policy (`pp.*` keys in `assets/i18n.js`) **before** enabling ads,
  analytics, crash reporting, or any other third-party SDK.

Done: brand → **DateBack**; dark app theme + bundled Hanken Grotesk; Google Play URL
(`com.dateback.app`); publish date (2026-06-09); price (€3.49 one-time); support email
(`dev@pascalsteinmueller.de`) in `privacy.html` and `support.html`.

## Legal note

"WhatsApp" is used in a descriptive sense only. This project uses no WhatsApp/Meta logos or
brand-like icons. The disclaimer of non-affiliation appears on every page.
