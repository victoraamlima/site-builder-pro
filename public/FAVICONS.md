Favicons and PWA assets
=======================

This project now references a complete set of favicon and PWA assets from the `public/` folder. Place the provided image files (the green "M" logos you attached) into `public/` using the filenames below so each platform uses the correct asset:

- `/favicon.ico` — classic ICO (contains multiple sizes) used by legacy browsers and some link fallbacks.
- `/favicon-16x16.png` — 16×16 PNG for small favicon slots.
- `/favicon-32x32.png` — 32×32 PNG for standard favicons.
- `/apple-touch-icon.png` — 180×180 PNG used when users add the site to iOS home screen.
- `/android-chrome-192x192.png` — 192×192 PNG used by Android/Chrome for homescreen icons.
- `/android-chrome-512x512.png` — 512×512 PNG used for store/launcher and high-resolution needs.
- `/android-chrome-192x192-maskable.png` — 192×192 maskable PNG (optional) for Android adaptive icons.
- `/android-chrome-512x512-maskable.png` — 512×512 maskable PNG (optional) for Android adaptive icons.
- `/mstile-150x150.png` — 150×150 PNG used by Windows tiles.
- `/safari-pinned-tab.svg` — monochrome SVG used by Safari pinned tabs (set color via `mask-icon` link in `index.html`).

Notes:
- Filenames above are referenced from `index.html` and `public/site.webmanifest`.
- For best results, create properly-sized PNG exports (exact sizes listed). For `favicon.ico` you can include multiple sizes inside one .ico file (16,32,48).
- The SVG for `safari-pinned-tab.svg` should be a single-color vector (ideally white-on-transparent) — Safari tints it using the color specified in the `mask-icon` link.

If you want, I can generate placeholder SVG/PNG variants or create a script to produce the ICO from PNGs — tell me which images you'd like me to synthesize from the attachments.
