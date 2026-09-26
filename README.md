# KuduPray — Next.js

An editable Next.js App Router conversion of `kudupray-premium.html`, preserving its visual design, content, tab navigation, and browser features.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

For production:

```sh
npm run build
npm start
```

## Source structure

- `app/layout.jsx`: document metadata, font/icon stylesheets, and global layout.
- `app/page.jsx`: the main Next.js page.
- `app/globals.css`: the original responsive styles, including the fixed Qur’an player.
- `components/KuduPray.jsx`: the stable React application shell.
- `components/sections/`: 15 editable React sections for the header, prayer times, Qur’an reader, guides, duas, Arabic learning, settings, support, navigation, and dialogs.
- `components/runtime-events.js`: bridges React events to the original browser handlers.
- `public/kudupray-runtime.js`: original prayer calculations, API integrations, audio streaming/caching, preferences, and dynamically populated content. Loaded with `next/script` after hydration.
- `scripts/convert-html.mjs`: optional source-import utility; rerunning it overwrites generated components, styles, and runtime.

This is an incremental React migration. The static interface is JSX rendered by Next.js; the existing browser runtime continues to own dynamic content and audio. Keep the application shell stable when editing: the runtime moves some dialog elements and updates lists directly. A future hooks/state refactor should migrate those features together with their DOM ownership. The app uses the original single-page tabs at `/`.

## Preserved features

Prayer times and location selection, Qibla tools, Islamic calendar, Qur’an reading and recitation, reciter/surah/speed pickers, immediate streaming with background caching, duas and favourites, daily companion and dhikr counter, guides and Arabic learning, dark mode, and reading preferences.

Local preferences stay in browser localStorage; users opening the app on a different origin start with fresh preferences. Live prayer data, unsaved Qur’an content/audio, fonts, photos, and map services require connectivity. Browser permissions still apply to location and compass access. No new backend or account system is added.

## Verification

```sh
npm test
npm run build
```

The streaming regression checks immediate play, streaming fallback, cached replay, failure isolation, retries, cancellation, and yielding downloads during buffering. I also smoke-tested the running app in Microsoft Edge, including settings, duas, dhikr, Qur’an controls, and the fixed player at desktop and mobile widths.

Framework reference: [Next.js App Router documentation](https://nextjs.org/docs/app).

## Search engine visibility

The app publishes metadata, Open Graph cards, JSON-LD application data,
`/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest`. Set
`NEXT_PUBLIC_SITE_URL` to the canonical production URL before deployment so
the canonical links and sitemap point to the live site. To verify ownership in
Google Search Console, set `GOOGLE_SITE_VERIFICATION` to the token supplied by
Google, deploy, then submit `https://<your-domain>/sitemap.xml` in Search
Console. Indexing and rankings still depend on Google crawling the deployed
site and on the usefulness and authority of the published content.
## Reader release checks

The reader offers full-surah and ayah-by-ayah audio downloads. Browser downloads
are separate from the playback cache; this app does not guarantee offline app
access or persistent storage of all recitations.

Before release, check playback, seeking, reciter changes, and download options
on Android Chrome and iOS Safari. Minimize and restore during playback, visit
Settings, then close the reader and confirm the floating player disappears.

`npm test` covers playback fallback and cancellation, restricted preference
storage, and closing both the full and minimized reader. External audio services
and real-device background playback still need device testing.
