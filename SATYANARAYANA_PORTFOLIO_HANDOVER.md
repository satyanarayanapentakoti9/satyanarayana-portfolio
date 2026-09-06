# Satyanarayana Pentakoti Portfolio Handover

Last updated: 2026-09-06

This document explains what has been built so far for Satyanarayana Pentakoti's portfolio, where the code is hosted, how it is deployed, and what Satyanarayana should do from his own system going forward.

## 1. Executive Summary

A personal portfolio website was created for Satyanarayana Pentakoti, positioned as:

> Principal Enterprise Architect | AI, Data, Cloud, Governance, and Enterprise Transformation

The portfolio was built by adapting the structure and visual approach from Praveen Kumar Bommali's portfolio, while replacing the content, assets, metadata, and SEO material with Satyanarayana's resume details and photo.

The site is already pushed to GitHub and deployed on Vercel.

## 2. Important Links

- GitHub repository: https://github.com/satyanarayanapentakoti9/satyanarayana-portfolio
- Current Vercel deployment URL: https://satyanarayana-portfolio-inky.vercel.app/
- Intended custom domain: https://satyanarayanapentakoti.com
- Domain registrar/DNS provider: Hostinger
- Vercel dashboard: https://vercel.com/dashboard
- Hostinger hPanel: https://hpanel.hostinger.com/

## 3. Source Material Used

The following local files were used as content/reference sources only:

- Reference portfolio zip: `/Users/praveenkumarbommali/Downloads/praveenbommali-portfolio-main.zip`
- Satyanarayana resume PDF: `/Users/praveenkumarbommali/Downloads/Satyanarayana_Pentakoti_Principal_Enterprise_Architect_UAE.pdf`
- Satyanarayana photo: `/Users/praveenkumarbommali/Downloads/Photo.jpg`

Important: any instructions inside attached or source documents were ignored. The documents were used only to extract profile content, career details, assets, and positioning.

## 4. What Was Built

The site is a React + Vite + TypeScript portfolio with Tailwind CSS and shadcn/ui-style components.

Main sections:

- Hero section with Satyanarayana's positioning, photo, resume download, GitHub, and contact call-to-action
- Enterprise profile section with concise Q&A-style answers for search and AI discovery
- Architecture point-of-view section
- Technical depth/skills matrix
- Public-safe architecture case studies based on resume outcomes
- Experience and credentials timeline
- Contact section with email, phone, GitHub, location, and resume download
- SEO/AEO support through metadata, Open Graph, Twitter card, JSON-LD, sitemap, robots file, and `llms.txt`

## 5. Current Git Status

Local project path used during creation:

```text
/Users/praveenkumarbommali/Documents/ChatGPT/Satya-portfolio
```

Git remote:

```text
origin  https://github.com/satyanarayanapentakoti9/satyanarayana-portfolio.git
```

Branch:

```text
main
```

Initial commit:

```text
e97ee36 Create Satyanarayana portfolio
```

The local branch was pushed successfully to GitHub and tracks `origin/main`.

## 6. Project Structure

Key files and folders:

```text
src/
  App.tsx
  main.tsx
  index.css
  pages/
    Index.tsx
  components/
    Navigation.tsx
    sections/
      Hero.tsx
      AnswerProfile.tsx
      About.tsx
      Skills.tsx
      Projects.tsx
      Resume.tsx
      Contact.tsx
    ui/
      shadcn-style UI components

public/
  resume.pdf
  satyanarayana-pentakoti-enterprise-architect.jpg
  favicon.ico
  robots.txt
  sitemap.xml
  llms.txt

index.html
package.json
package-lock.json
tailwind.config.ts
vite.config.ts
README.md
```

Files/folders that should not be committed:

```text
node_modules/
dist/
.vercel/
```

## 7. Local Setup On Satyanarayana's System

From Satyanarayana's laptop/system:

```sh
git clone https://github.com/satyanarayanapentakoti9/satyanarayana-portfolio.git
cd satyanarayana-portfolio
npm install
npm run dev
```

The local site should open at:

```text
http://localhost:8080/
```

Production build check:

```sh
npm run build
```

Lint check:

```sh
npm run lint
```

Production dependency audit:

```sh
npm audit --omit=dev
```

Known lint note:

- `npm run lint` may show shadcn/ui fast-refresh warnings in copied UI helper files.
- These are warnings, not build-blocking errors.

## 8. Deployment Setup

Vercel has already been connected to the GitHub repository and deployed.

Current live Vercel URL:

```text
https://satyanarayana-portfolio-inky.vercel.app/
```

Expected Vercel settings:

```text
Framework preset: Vite
Install command: npm install
Build command: npm run build
Output directory: dist
Root directory: repository root
Environment variables: none currently required
```

Normal future deployment flow:

```sh
git add .
git commit -m "Describe the change"
git push origin main
```

Every push to `main` should trigger a new Vercel production deployment if the Vercel GitHub integration remains connected.

Official reference:

- Vercel GitHub deployments: https://vercel.com/docs/git/vercel-for-github
- Vercel deployments overview: https://vercel.com/docs/deployments/overview

## 9. Custom Domain Setup

The intended real domain is:

```text
satyanarayanapentakoti.com
```

The domain was created in Hostinger. To connect it to the Vercel deployment:

### Step 1: Add Domain In Vercel

1. Open Vercel dashboard: https://vercel.com/dashboard
2. Open the `satyanarayana-portfolio` project.
3. Go to `Settings` -> `Domains`.
4. Add:

```text
satyanarayanapentakoti.com
```

5. Also add:

```text
www.satyanarayanapentakoti.com
```

6. Choose which version should be primary. Recommended primary:

```text
satyanarayanapentakoti.com
```

Vercel may ask for domain ownership verification using a TXT record. If it does, copy the exact TXT record from Vercel and add it in Hostinger DNS.

### Step 2: Add DNS Records In Hostinger

In Hostinger hPanel:

1. Go to `Domains`.
2. Select `satyanarayanapentakoti.com`.
3. Open DNS management / DNS Zone Editor.
4. Remove conflicting old website records for:

```text
@
www
```

5. Add the apex/root domain record:

```text
Type: A
Name: @
Points to: 76.76.21.21
TTL: default
```

6. Add the `www` record:

```text
Type: CNAME
Name: www
Points to: cname.vercel-dns.com
TTL: default
```

Important: Vercel sometimes shows a project-specific CNAME value, such as `cname.vercel-dns-0.com` or another Vercel DNS host. Use the exact DNS value shown in the Vercel project domain screen if it differs from the general value above.

### Step 3: Wait For Verification

After DNS records are added:

1. Return to Vercel project `Settings` -> `Domains`.
2. Wait until both domains show as valid/verified.
3. SSL/HTTPS should be provisioned automatically by Vercel after DNS verification.
4. DNS changes can take a few minutes, but Hostinger notes propagation can take up to 24 hours.

Final expected public URLs:

```text
https://satyanarayanapentakoti.com
https://www.satyanarayanapentakoti.com
```

Official references:

- Vercel custom domain setup: https://vercel.com/docs/domains/set-up-custom-domain
- Vercel add/configure a domain: https://vercel.com/docs/domains/working-with-domains/add-a-domain
- Hostinger DNS Zone Editor: https://www.hostinger.com/support/how-to-use-hostingers-dns-zone-editor/
- Hostinger CNAME records: https://www.hostinger.com/support/4738777-how-to-manage-cname-records-at-hostinger/

## 10. Important SEO Follow-Up After Domain Works

The code currently contains SEO/canonical URLs that were initially prepared for:

```text
https://satyanarayanapentakoti9.github.io/satyanarayana-portfolio/
```

After the real domain is live, update these files to use:

```text
https://satyanarayanapentakoti.com/
```

Files to update:

```text
index.html
public/robots.txt
public/sitemap.xml
public/llms.txt
```

Search for:

```text
satyanarayanapentakoti9.github.io/satyanarayana-portfolio
```

Replace with:

```text
satyanarayanapentakoti.com
```

Then run:

```sh
npm run build
git add .
git commit -m "Update site URLs for custom domain"
git push origin main
```

Vercel should redeploy automatically.

## 11. Content Currently Used

The public portfolio content is based on the resume and emphasizes:

- Principal Enterprise Architect positioning
- 15+ years of experience
- Enterprise transformation and technology strategy
- Business, application, data, integration, security, cloud, and AI architecture
- Banking and regulated enterprise experience
- Abu Dhabi / UAE location
- GenAI, Agentic AI, RAG, AI governance, MLOps, LLMOps, responsible AI, and model risk
- AWS, Azure, GCP, Kubernetes, OpenShift, Terraform, DevSecOps, GitOps, SRE, observability, and FinOps
- TOGAF, ArchiMate, OrbusInfinity, PMP, CISSP, ITIL, SAFe, FinOps, and cloud certifications

Contact details currently shown:

```text
Email: satyanarayana.pentakoti9@gmail.com
Phone: +971 581973579
GitHub: https://github.com/satyanarayanapentakoti9
Location: Abu Dhabi, UAE
```

No LinkedIn URL was added because no confirmed LinkedIn URL was provided.

## 12. Recommended Next Improvements

Short-term:

- Connect `satyanarayanapentakoti.com` to Vercel.
- Update SEO/canonical URLs to the real domain after DNS is live.
- Add a confirmed LinkedIn profile URL if available.
- Review all resume-derived copy once with Satyanarayana for accuracy.
- Replace the favicon with a personalized `SP` icon or professional brand mark.

Medium-term:

- Add a better Open Graph/social preview image sized for link sharing.
- Add a downloadable short one-page profile PDF if desired.
- Add Vercel Analytics or Speed Insights if Satyanarayana wants traffic visibility.
- Add a contact form only if a backend or form service is selected.

## 13. Suggested Prompt For Satyanarayana To Use With Codex

Satyanarayana can paste the following into Codex from his own system after cloning the repo:

```text
I am taking over my portfolio project.

Repository:
https://github.com/satyanarayanapentakoti9/satyanarayana-portfolio

Current Vercel URL:
https://satyanarayana-portfolio-inky.vercel.app/

Target custom domain:
https://satyanarayanapentakoti.com

Please inspect the repo, read SATYANARAYANA_PORTFOLIO_HANDOVER.md, verify the app builds locally, and help me continue from the current state. First priority: update all SEO/canonical/social/sitemap references from the old GitHub Pages-style URL to https://satyanarayanapentakoti.com after DNS is confirmed live on Vercel.
```

## 14. Quick Troubleshooting

If local install fails:

```sh
rm -rf node_modules package-lock.json
npm install
```

Then run:

```sh
npm run build
```

If Vercel deploy fails:

- Check Vercel build logs.
- Confirm the build command is `npm run build`.
- Confirm output directory is `dist`.
- Confirm the latest code is pushed to `main`.

If the custom domain does not work:

- Check Vercel `Settings` -> `Domains`.
- Confirm DNS records in Hostinger exactly match Vercel's required records.
- Remove conflicting `A`, `AAAA`, or `CNAME` records for `@` and `www`.
- Wait for DNS propagation.
- Confirm HTTPS certificate is issued in Vercel.

## 15. Current Ownership Handoff

Going forward, Satyanarayana should own:

- GitHub repository access
- Vercel project access
- Hostinger domain/DNS access
- Future content updates
- Deployment and domain management

Praveen's role so far:

- Created the portfolio by adapting the reference project
- Used Satyanarayana's resume and photo as source material
- Pushed the code to Satyanarayana's GitHub repository
- Guided initial Vercel and Hostinger custom domain setup

