# Web Resume — Ximo Liang

Personal resume/portfolio site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deploy to GitHub Pages

1. In `astro.config.mjs`, set `site` to `https://<your-username>.github.io` and `base` to `/<repo-name>`
   (remove `base` if the repo is named `<username>.github.io`).
2. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.
3. In the repo: **Settings → Pages → Source: GitHub Actions**.

## Structure

- `src/data/resume.ts` — all resume content (edit here, not in components)
- `src/components/` — Nav, Hero, Projects, Skills, Experience, Publications, Contact, Placeholder
- `src/pages/index.astro` — single-page layout
- `public/` — static assets (put `resume.pdf` here)

## TODO (placeholders to replace)

- [ ] Hero: animated data-viz background (particles / network graph)
- [ ] Featured projects: animated UI mockups (GPS dispatch dashboard, trading agent, hybrid search)
- [ ] Other projects: architecture diagrams
- [ ] Skills: interactive filterable visualization
- [ ] Add `public/resume.pdf`
- [ ] Set real `site` / `base` in `astro.config.mjs`
