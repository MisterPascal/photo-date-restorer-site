# Photo Date Restorer Landing Page

Static GitHub Pages landing page for the Android app **Photo Date Restorer** — a local utility
that restores photo dates from supported chat-style filenames (e.g. `IMG-20240510-WA0001.jpg`)
so the gallery sorts them correctly.

No build step, no framework, no external trackers, no external fonts, no cookies.

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
    ├── styles.css
    ├── app-preview.svg
    ├── icon.svg      # Also used as favicon
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

- Insert the Google Play URL (search the code for `href="#"`).
- Insert the publish date — translate the `pp.updated` key in `assets/i18n.js`
  (placeholder `[DATUM EINFÜGEN]` / `[INSERT DATE]` per language).
- Replace `https://example.github.io/` with the real Pages URL in
  `index.html` (canonical), `robots.txt`, and `sitemap.xml`.
- Adjust the price in the Pricing section — `price.full.price` in `assets/i18n.js`.
- Update the privacy policy (`pp.*` keys in `assets/i18n.js`) **before** enabling ads,
  analytics, crash reporting, or any other third-party SDK.

Done: support email (`dev@pascalsteinmueller.de`) in `privacy.html` and `support.html`.

## Legal note

"WhatsApp" is used in a descriptive sense only. This project uses no WhatsApp/Meta logos or
brand-like icons. The disclaimer of non-affiliation appears on every page.
