# Moshaheb Hossain — Personal Portfolio

A personal portfolio site for **Md. Moshaheb Hossain**, Business Analyst & Product Owner based in Dhaka, Bangladesh.

## Pages

| Route | Description |
|---|---|
| `/` | Hero, stats, and core competencies overview |
| `/about` | Photo gallery, professional summary, tools & BA artefacts |
| `/projects` | Domain expertise across 8 industry verticals |
| `/resume` | Timeline work experience, education, certifications |
| `/contact` | Social links and Netlify Forms contact form |

## Key Technologies

- **Framework**: TanStack Start (SSR React + Vite)
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v4 + custom CSS
- **Content**: content-collections (Markdown-based CV data)
- **Forms**: Netlify Forms
- **Images**: Netlify Image CDN (automatic optimisation & format negotiation)
- **Fonts**: Cormorant Garamond (display) + DM Sans (body) via Google Fonts
- **Hosting**: Netlify

## Running Locally

```bash
npm install
npm run dev
```

Runs on `http://localhost:3000`. (Image CDN, Forms) require the Netlify CLI:

```bash
netlify dev --port 8889
```

## Assets

- `public/profile.jpg` — primary profile photo
- `public/photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg` — gallery images
- `public/Moshaheb_Hossain_CV.pdf` — downloadable CV

<!-- pages-rebuild-trigger: 2026-06-03 -->
