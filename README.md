# Satyanarayana Pentakoti Portfolio

Personal portfolio for Satyanarayana Pentakoti, Principal Enterprise Architect based in Abu Dhabi, UAE.

The site positions Satyanarayana around enterprise transformation, technology strategy, AI architecture, data architecture, cloud modernization, architecture governance, and regulated banking platforms.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Local Development

```sh
npm ci
npm run dev
```

The local development server runs on:

```text
http://localhost:8080
```

## Production Checks

```sh
npm run lint
npm run build
```

## Content Direction

- First screen: Principal Enterprise Architect, Abu Dhabi, UAE, and enterprise transformation positioning
- Profile: concise answer-style content for leadership, search, and AI discovery
- Proof: public-safe architecture case studies based on resume outcomes
- Skills: enterprise architecture, business architecture, AI, data, cloud, platform engineering, security, governance, and resilience
- Contact: email, phone, GitHub, and resume download
- Resume: current PDF available as `/resume.pdf`

## SEO And AEO

- Static metadata, canonical URL, Open Graph, Twitter card, and profile image
- JSON-LD for `WebSite`, `ProfilePage`, `Person`, and `FAQPage`
- `robots.txt`, `sitemap.xml`, and `llms.txt`
- No-script summary for crawlers and browsers without JavaScript

## Production Deployment

- Repository: https://github.com/satyanarayanapentakoti9/satyanarayana-portfolio
- Production: https://www.satyanarayanapentakoti.com/
- Root domain: https://satyanarayanapentakoti.com/ redirects to the www address.
- Vercel project: https://vercel.com/satyanarayana-pentakoti/satyanarayana-portfolio
- Hostinger manages the domain and DNS; ordinary content changes do not require DNS changes.

Vercel is connected to this repository. Pushing to `main` triggers a production deployment. Local edits alone do not publish the website.

### Update the website from this Mac

1. Open this repository and run `git pull --ff-only origin main` before starting changes.
2. Edit the site and preview it with `npm run dev` at http://localhost:8080.
3. Run `npm run lint` and `npm run build`. Resolve errors before publishing.
4. Review `git diff` and `git status`. Stage only the files intended for publication.
5. Commit and push:

```sh
git add <changed-files>
git commit -m "Describe the change"
git push origin main
```

6. Open Vercel Deployments, match the deployment to the pushed commit, and wait for Ready. Verify the change on the production domain.

Browser sign-in and terminal Git authentication are separate. If a push reports an authentication error, authenticate Git using GitHub CLI (`gh auth login`) or an existing Git credential manager; never put tokens into source files or remote URLs.

### Build configuration

Framework: Vite. Build command: `npm run build`. Output directory: `dist`. Repository root is the project root. The current static site requires no application environment variables.

### Recovery

If a production change needs undoing, use Vercel Instant Rollback to select a known good production deployment. Then revert the corresponding Git commit, validate the build, and push the revert so the repository matches the intended production code. Avoid force-pushing main.

### Content locations

- Main sections: `src/components/sections/`
- Navigation: `src/components/Navigation.tsx`
- Styles: `src/index.css`
- Downloadable resume: `public/resume.pdf`
- Canonical and social metadata: `index.html`
- Search discovery: `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`

The handover document describes the earlier setup. Live settings verified on 6 September 2026 use **www** as the production domain; the current metadata follows that address.
