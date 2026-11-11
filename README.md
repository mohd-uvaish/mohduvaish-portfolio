# Mohd Uvaish — Portfolio

A responsive personal portfolio built with React, Vite, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Add your resume

Copy your latest PDF resume into `public/` and name it `resume.pdf`.
The hero's **Download resume** button points to `/resume.pdf`.

## Before publishing

1. Confirm the phone number, email, location and project links.
2. Replace the LinkedIn placeholder URL in `src/App.tsx` with your actual profile URL.
3. Add your Twitter Clone live demo URL if available.
4. Add a real LinkedIn profile and any preferred social links.
5. Verify that the linked project websites are the correct public demos.

## Deploy to Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository.
4. Use these build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy, then add `mohduvaish.com` under **Custom domains** and follow Cloudflare's DNS instructions.

This is a static frontend portfolio. You do not need a backend or database for the current version.
