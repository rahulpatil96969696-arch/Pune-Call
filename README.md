# Pune Call Girl — Premium Escort Listing

Static Next.js 16 site for independent Pune escorts. No backend required.

**Stack:** Next.js 16.2 · React 19.2 · Node 20.9+

## Run

```bash
cd profile-gallery
npm install
npm run dev
```

### Windows / OneDrive dev errors

If you see `ENOENT: required-server-files.json` or webpack cache errors:

1. **Stop every** `npm run dev` terminal (Ctrl+C).
2. In Task Manager, end any leftover **Node.js** processes.
3. From `profile-gallery` run:

```bash
npm run dev:clean
```

Use **only one** dev server. Do not run `npm run build` and `npm run dev` at the same time.

If Turbopack still fails on OneDrive, try:

```bash
npm run dev:webpack
```

**Best fix:** move the project outside `OneDrive\Desktop`, or exclude the `.next` folder from OneDrive sync.

Open http://localhost:3000

## Add real photos

Replace placeholder JPEGs in:

```
public/profiles/[slug]/cover.jpg
public/profiles/[slug]/1.jpg
public/profiles/[slug]/2.jpg
public/profiles/[slug]/3.jpg
```

## Deploy

Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://punecallgirl.com`).

Deploy the `profile-gallery` folder to Vercel or any Node host:

```bash
npm run build
npm start
```

## Structure

- `app/` — routes, sitemap, robots
- `components/` — UI, home, profile, layout
- `lib/profiles.js` — 10 static escort profiles
- `lib/seo.js` — metadata & canonical URLs
- `lib/whatsapp.js` — WhatsApp deep links
