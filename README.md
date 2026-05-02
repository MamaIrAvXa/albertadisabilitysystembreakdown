# The Alberta Disability System Breakdown — Web App

A drop-in static site for Netlify. No build step. No framework. Drag the folder, deploy.

## Deploy in 60 seconds

### Option A — drag & drop (simplest)

1. Go to **https://app.netlify.com/drop**
2. Drag this entire folder (the one containing `index.html`) onto the page
3. Done. You'll get a random subdomain like `https://lyrical-rose-12345.netlify.app`
4. To use the canonical URL: in the Netlify site settings, change the site name to **albertadisabilitysystembreakdown** so the URL becomes `https://albertadisabilitysystembreakdown.netlify.app`

### Option B — replace an existing Netlify site

1. Open your existing site dashboard at https://app.netlify.com
2. Go to **Deploys** → **Drag and drop your site folder here**
3. Drop this folder. Netlify replaces the live site within ~30 seconds

### Option C — Git-based deploy (for ongoing updates)

1. Create a new GitHub/GitLab repo
2. Push the contents of this folder to the repo
3. In Netlify: **Sites** → **Add new site** → **Import from Git** → connect repo
4. Build command: leave blank. Publish directory: `/`. Deploy.

## File structure

```
/
├── index.html           Single-page site, all sections
├── netlify.toml         Caching, headers, redirects (don't touch)
├── robots.txt           SEO — allows all indexing
├── sitemap.xml          SEO — points to the canonical URL
├── README.md            This file
│
├── css/
│   └── styles.css       Navy + gold + wild rose theme
│
├── js/
│   └── app.js           Renders all card grids from manifests
│
├── assets/
│   ├── wild-rose-mark.png   Primary logo mark (matches brand cards/letterhead)
│   ├── wild-rose.svg        Geometric SVG fallback (vector, scales infinitely)
│   ├── wild-rose.jpg    Original raster wild rose
│   ├── card-front-facebook.jpg
│   └── card-back-app.jpg
│
└── pdfs/                All campaign PDFs (216 files, organized)
    ├── adsb-report-series/
    ├── compound-failure/
    ├── consultation-gap-rebuttal/
    ├── fillable/
    ├── flyers/
    │   ├── posters/
    │   ├── comics/
    │   └── impact/
    ├── indigenous-sections/
    ├── information-asymmetry/
    ├── legalese/
    ├── new-adsb-docs/
    ├── plain-language/
    ├── sourced-briefs/
    └── systematic-exclusion-sections/
```

## Updating content

### Add a new PDF

1. Drop the PDF into the right `/pdfs/<category>/` folder
2. Open `js/app.js`
3. Find the matching array (`REPORTS`, `DOCUMENTS`, `PROVINCES`, or `FLYERS`)
4. Add an entry with `title`, `desc`, and `file` fields
5. Re-deploy by dragging the folder back to Netlify

### Add a new flyer image

1. Drop the PNG/JPG into `/pdfs/flyers/posters/`
2. Open `js/app.js`, find the `FLYERS` array
3. Add `{ label: "Display label", img: "filename.png" }`
4. Re-deploy

### Change a stat number on the homepage

Open `index.html`. Search for the number. Update it in place. The numbers section is in the `<section id="numbers">` block.

### Change colors

Open `css/styles.css`. The CSS variables at the top under `:root` control the entire palette. Changing `--gold-400` updates every gold accent on the site.

## Domain / canonical URL

The site is built to live at:
**https://albertadisabilitysystembreakdown.netlify.app**

If you change the URL, search-and-replace it inside:
- `index.html` (Open Graph tags, footer links)
- `sitemap.xml`
- `robots.txt`

## What this site does NOT include

By design — this is the public canonical canon:
- No legal name. The byline is *The Alberta Disability System Breakdown*.
- No personal phone or email beyond `albertadisabilitybreakdown@outlook.com`.
- No file numbers, AISH IDs, or kids' names — anywhere.

If a PDF is dropped in that contains any of these, it must be scrubbed first. The clean library in `/pdfs/` was already scrubbed in a prior session.

## Tone & voice

The site copy is written in the campaign's voice:
- Direct. No filler. No hedging.
- "Free to share. Free to save. Free to distribute."
- "Reports. Flyers. Tools."
- "Speak up. Speak out. Be heard."

If you edit the copy, keep that voice. Clinical inside the PDFs; community-facing on the website.

## Accessibility

- Body type: **Atkinson Hyperlegible** — designed by the Braille Institute for low-vision readers.
- Color contrast: gold on navy meets WCAG AA at all text sizes.
- Keyboard: all interactive elements are reachable by Tab.
- Screen reader: section landmarks, skip-link, descriptive link text on every PDF link.
- Reduced motion: respected via `prefers-reduced-motion`.

## License

The site code is yours to modify and deploy. The PDFs are already labelled "Free to share. Free to print." — that posture continues here.

— Built April 2026
