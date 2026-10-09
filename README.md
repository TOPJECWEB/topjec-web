# TOPJEC WEB — Futuristic AI-inspired agency website

A responsive static website for Meta Ads, Instagram Marketing, Website Development, SEO and Lead Generation.

## Files
- `index.html` — page content and SEO metadata
- `styles.css` — layout, responsive styling and visual effects
- `script.js` — mobile menu, animated counter and FormSubmit-powered enquiry form

## Before publishing
1. Confirm the exact domain you own (for example, `topjecweb.com`). "TOPJEC WEB" by itself is not a complete domain name.
2. The enquiry form is configured for `info@topjecweb.com` and includes a required phone number field.
3. Replace the illustrative `+86%` campaign metric in the hero with a non-numeric statement or a real, substantiated result before using the site publicly.
4. Add your real phone/WhatsApp link, social profile links, privacy policy and business address if applicable.
5. The enquiry form submits to the supplied FormSubmit.app endpoint (`https://formsubmit.app/f/7984qvnzu7`) using a browser POST request. Confirm the endpoint is active and complete any email verification required by FormSubmit.app. Test a submission and check `info@topjecweb.com` (including Spam/Junk) before relying on it for live leads.

## Publish with GitHub Pages
1. Sign in at https://github.com and create a **public** repository named `topjec-web`.
2. Choose **Add file → Upload files** and upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, branch `main`, folder `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. The temporary URL will look like `https://YOUR-USERNAME.github.io/topjec-web/`.
6. For the custom domain, first enter your exact domain in **Settings → Pages → Custom domain**, then click Save.
7. In GoDaddy, open **My Products → Domains → your domain → DNS / Manage DNS**. Configure the DNS records for GitHub Pages as described in the official guide linked below. Do not delete email-related MX/TXT records.
8. For a root/apex domain, GitHub documents these A records:
   - `@` → `185.199.108.153`
   - `@` → `185.199.109.153`
   - `@` → `185.199.110.153`
   - `@` → `185.199.111.153`
9. For `www`, add a CNAME record with host `www` pointing to `YOUR-USERNAME.github.io` (replace with your actual GitHub username; do not include `/topjec-web`).
10. After DNS propagates, return to **Settings → Pages** and enable **Enforce HTTPS** when the option appears.

Official instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

DNS changes can take up to 24 hours. GitHub Pages is static hosting; it does not run a server-side backend or store contact form submissions.

## Multi-page service website

The deploy-ready multi-page package includes these service detail pages:
- `meta-ads.html` — Meta / Facebook Ads campaign workflow
- `instagram-marketing.html` — Instagram content and marketing workflow
- `website-development.html` — website design, development and launch workflow
- `seo.html` — technical and on-page SEO workflow
- `lead-generation.html` — lead funnel and enquiry workflow

Shared page styling is in `service-pages.css`. Keep all HTML, CSS and JavaScript files together in the repository root. The service cards on `index.html` link to the relevant detail pages. The contact form uses the configured FormSubmit.app endpoint in `script.js`; test an enquiry after deploying and complete any recipient verification required by the form provider.


## White interactive edition
- Pure white, clean modern theme with soft purple/cyan accents.
- Direct service links in the top navigation on desktop and mobile.
- Scroll progress indicator, back-to-top control, gentle reveal animations, interactive FAQ accordions, responsive menu, and contact form submission via FormSubmit.app.
- Upload all files in this folder to the GitHub repository root to publish.
