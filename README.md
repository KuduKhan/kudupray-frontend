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
# kudupray-frontend

## Offline Qur’an release checks

“Download all surahs” first saves the production app shell and all 114 surahs in
the currently selected translation (including Arabic and transliteration), then
saves the reciter’s audio. Keep the tab open during preparation and download.
Other translations need an online visit or download before offline use.
Downloads resume by skipping files already in Cache Storage. Browser storage
can be evicted or manually cleared; the completion message reports whether
persistent storage was granted. Folder export, when available, is a separate copy.

Before release on Android Chrome and iOS Safari:

1. Finish a recitation download, close the browser, enable airplane mode, and reopen the same origin.
2. Open the reader, play and seek an ayah, then switch surahs.
3. Pause/resume a partial download and verify saved files are retained.
4. Simulate full/blocked storage and confirm the error stays visible.
5. Test supported folder export, cancellation, a full destination, and partial recitations.
6. Confirm export/removal cannot run during a download or another export/removal.

`npm test` includes fallback count/Juz, persistent reader data, resume, storage
errors, operation guards, export failure, service-worker byte ranges, and shell
preparation regression tests. These tests use synthetic fixtures; real device
backgrounding, eviction, audio-CDN availability, and folder permissions still
require the device checks above.
