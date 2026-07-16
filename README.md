# Vely Website

The public marketing and legal website for Vely, built independently from the mobile app and backend.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` when overriding the production URLs.

## Verification

```bash
npm run check
```

This runs ESLint, strict TypeScript checks, component tests, and a production build.

## Deployment

1. Import this directory as a standalone Vercel project.
2. Set `NEXT_PUBLIC_SITE_URL=https://joinvely.com`.
3. Set the production Google Play URL if it changes.
4. Enable Vercel Web Analytics in the project dashboard.
5. Connect `joinvely.com` and redirect `www.joinvely.com` to the apex domain.
6. Update Play Console and other external legal links to the new clean routes.

The Next.js configuration preserves old `.html` legal paths when they are requested on the new domain. Keep the old legal host online until external store links have been updated and propagated.

### GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**. Every push to `main` will verify the project, export static HTML into `out/`, and publish it at:

`https://vely-technology.github.io/vely-website/`

Do not select “Deploy from a branch”; that publishes repository files and displays the README instead of building the Next.js application.

When `joinvely.com` is ready, add it under the GitHub Pages custom-domain setting, set `GITHUB_PAGES_CUSTOM_DOMAIN=true` for the build, and update `NEXT_PUBLIC_SITE_URL` in the workflow to the custom domain.

## Content safety

The website uses code-built product mockups with fictional initials and no real user data. Legal text is implementation-aligned but should receive owner/legal review before production launch.
