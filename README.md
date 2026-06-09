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

The site is German by default and switchable to 15 more languages via the header dropdown —
the **same 16 languages as the app**: English, Spanish, French, Italian, Portuguese, Polish,
Dutch, Turkish, Russian, Hindi, Indonesian, Japanese, Korean, Chinese (Simplified) and
Arabic. Arabic switches the page to **RTL** (`<html dir="rtl">`, set by `i18n.js`).

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
    └── i18n.js       # Language switcher + translations (16 languages, incl. RTL)
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

- **Pages URL:** replace `https://example.github.io/` with the real GitHub Pages host (or
  custom domain) in `index.html` (canonical), `robots.txt`, and `sitemap.xml`. Pending the
  Pages/domain decision (and a possible repo rename to `dateback-site`).
- **Localise the sharpened copy in the original 7 languages:** the 7 newly added languages
  (ru, hi, id, ja, ko, zh, ar) ship with the app-aligned copy (100 files/day, photos *and*
  videos, undo/copy-mode, no all-files access, one-time pass €3.49 + yearly €2.99). The
  original es/fr/it/pt/pl/nl/tr still carry the older persuasive wording for the sharpened
  keys — propagate the DE/EN content to them.
- Update the privacy policy (`pp.*` keys in `assets/i18n.js`) **before** enabling ads,
  analytics, crash reporting, or any other third-party SDK.

Done: brand → **DateBack**; dark app theme + bundled Hanken Grotesk; Google Play URL
(`com.dateback.app`); publish date (2026-06-09); price (€3.49 one-time); support email
(`dev@pascalsteinmueller.de`) in `privacy.html` and `support.html`.

## Legal note

"WhatsApp" is used in a descriptive sense only. This project uses no WhatsApp/Meta logos or
brand-like icons. The disclaimer of non-affiliation appears on every page.
