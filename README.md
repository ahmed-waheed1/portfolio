# Ahmed Waheed — Portfolio

Personal portfolio site for Ahmed Waheed, a Software Engineer and Flutter Developer. Live at [ahmedwaheed.me](https://ahmedwaheed.me).

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS v4 (theme tokens in `app/globals.css`)

## Running locally

```bash
npm install
npm run dev     # dev server at http://localhost:3000
npm run lint    # ESLint
npm run build   # static export to out/
```

To preview the production build, serve the `out/` folder with any static file server, e.g. `npx serve out`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, a GitHub Actions workflow that builds the static export and deploys it to GitHub Pages, served from the custom domain ahmedwaheed.me.
