# Deployment Guide - Dental Clinic Website

## Quick Deploy Options (Free Tier)

### 1. Vercel (Recommended) ⚡

**Best for**: Next.js projects, automatic deployments, zero configuration

**Steps:**

1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**CLI Deployment:**
```bash
npm i -g vercel
vercel login
vercel
```

**Free Tier:**
- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS
- Custom domain support

---

### 2. Netlify 🎯

**Best for**: Static sites, form handling, serverless functions

**Steps:**

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select repo
5. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `.next`
6. Click "Deploy"

**Free Tier:**
- 100GB bandwidth/month
- 300 build minutes/month
- Automatic HTTPS
- Custom domain support

---

### 3. Railway 🚂

**Best for**: Full-stack apps, databases, backend services

**Steps:**

1. Push code to GitHub
2. Visit [railway.app](https://railway.app)
3. Click "Start a New Project"
4. Select "Deploy from GitHub repo"
5. Railway auto-detects Next.js and deploys

**Free Tier:**
- $5 free credit/month
- Custom domains
- Automatic SSL

---

### 4. Render 🎨

**Best for**: Web services, static sites, cron jobs

**Steps:**

1. Push to GitHub
2. Visit [render.com](https://render.com)
3. Click "New +" → "Web Service"
4. Connect GitHub repo
5. Settings:
   - Build command: `pnpm install && pnpm build`
   - Start command: `pnpm start`
6. Click "Create Web Service"

**Free Tier:**
- 750 hours/month
- Auto-sleep after inactivity
- Custom domains
- Automatic SSL

---

## Pre-Deployment Checklist

- [ ] Update all contact information (phone, email, address)
- [ ] Replace placeholder images with actual clinic photos
- [ ] Add Google Maps integration
- [ ] Test appointment form submission
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add favicon and logo
- [ ] Test on mobile devices
- [ ] Run production build locally: `pnpm build && pnpm start`
- [ ] Check all links work correctly
- [ ] Test WhatsApp integration
- [ ] Optimize images (use WebP format)
- [ ] Add Google Analytics (optional)

---

## Environment Variables

If you need environment variables (API keys, etc.):

### Vercel:
```bash
vercel env add NEXT_PUBLIC_API_KEY
```

Or via dashboard: Project Settings → Environment Variables

### Netlify:
Site settings → Build & deploy → Environment

### Railway/Render:
Project → Variables/Environment

---

## Custom Domain Setup

### 1. Purchase Domain
- Namecheap, GoDaddy, Google Domains, etc.

### 2. Add to Hosting Platform

**Vercel:**
- Project Settings → Domains → Add
- Update DNS records as instructed

**Netlify:**
- Domain Settings → Add custom domain
- Follow DNS setup

**Railway/Render:**
- Settings → Domains → Add custom domain
- Update DNS

### 3. DNS Records (Example)
```
Type: A
Name: @
Value: [Platform IP]

Type: CNAME
Name: www
Value: [Platform domain]
```

---

## Performance Optimization

### Image Optimization
```tsx
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/clinic-photo.jpg"
  alt="Dental clinic"
  width={800}
  height={600}
  quality={85}
  priority
/>
```

### Compress Images
- Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
- Convert to WebP format
- Aim for <200KB per image

### Enable Analytics

**Google Analytics:**

1. Get tracking ID from analytics.google.com
2. Install package:
```bash
pnpm add @next/third-parties
```

3. Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

---

## SEO Optimization

Update `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Clinic Name - Professional Dental Care',
  description: 'Expert dental services in [City]. Book your appointment today.',
  keywords: 'dental clinic, dentist, teeth cleaning, orthodontics, [City]',
  openGraph: {
    title: 'Your Clinic Name',
    description: 'Professional dental care',
    images: ['/og-image.jpg'],
  },
}
```

Add sitemap:
```bash
# Create app/sitemap.ts
```

Add robots.txt:
```bash
# Create public/robots.txt
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## Monitoring & Maintenance

- Set up uptime monitoring: [UptimeRobot](https://uptimerobot.com) (free)
- Monitor performance: Vercel Analytics, Google PageSpeed Insights
- Regular backups via Git
- Update dependencies monthly: `pnpm update`

---

## Troubleshooting

**Build fails:**
- Check Node.js version (16+)
- Clear cache: `rm -rf .next node_modules && pnpm install`
- Check error logs in deployment dashboard

**Images not loading:**
- Configure `next.config.ts` for external image domains
- Use Next.js Image component

**Form not submitting:**
- Add API route or connect to backend service
- Check CORS settings if using external API

---

## Support Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)
- [Netlify Docs](https://docs.netlify.com)

---

**Need help?** Check the SETUP.md file for development instructions.
