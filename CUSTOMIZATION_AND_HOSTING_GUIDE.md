# AlgoraX — Customization & Hosting Guide

Everything you need to change text, colors, images, and deploy your site live with your own domain.

---

## 1. How the Site Is Organized

```
algorax-website/
├── src/
│   ├── config/
│   │   └── site.ts        ← ✅ THE ONLY FILE YOU NEED TO EDIT 90% OF THE TIME
│   ├── components/         ← Individual page sections (Navbar, Hero, etc.)
│   ├── app/
│   │   ├── page.tsx        ← Controls which sections appear & their order
│   │   ├── layout.tsx      ← Page title, description, fonts
│   │   └── globals.css     ← Base background color, scrollbar, selection color
│   └── ...
├── public/                 ← Put your images & videos here
└── package.json
```

---

## 2. Changing Text (Headlines, Descriptions, FAQ, etc.)

Open **`src/config/site.ts`** — every piece of text on the site lives here.

### Examples

| What to change | Where in site.ts |
|---|---|
| Brand name | `name: "AlgoraX"` |
| Hero headline | `hero.headline` |
| Hero subtitle | `hero.subtitle` |
| Hero badge text | `hero.badge` |
| Stats bar numbers | `hero.stats` array |
| Feature titles & descriptions | `features.items` array |
| Trading mode names & bullets | `tradingModes.modes` array |
| How It Works steps | `howItWorks.steps` array |
| Testimonials | `reviews.items` array |
| Pricing plans, prices, features | `pricing.plans` array |
| FAQ questions & answers | `faq.items` array (use `q:` and `a:`) |
| Footer disclaimer | `footer.disclaimer` |
| Footer links | `footer.links` array |

Just find the section, change the text in quotes, save, and refresh.

---

## 3. Changing Colors (Gradient Theme)

In `src/config/site.ts` → `colors` object:

```ts
colors: {
  gradientFrom: "#3b82f6",   // Gradient start (blue)
  gradientVia:  "#7c3aed",   // Gradient middle (violet)
  gradientTo:   "#a855f7",   // Gradient end (purple)
  ...
}
```

**To re-theme the entire site**, just change those 3 hex values. Everything — buttons, badges, glows, borders — adapts automatically.

### Popular color combos to try

| Theme | From | Via | To |
|---|---|---|---|
| Blue → Purple (default) | `#3b82f6` | `#7c3aed` | `#a855f7` |
| Teal → Emerald | `#14b8a6` | `#10b981` | `#34d399` |
| Orange → Red | `#f97316` | `#ef4444` | `#f43f5e` |
| Pink → Purple | `#ec4899` | `#a855f7` | `#7c3aed` |
| Gold → Amber | `#f59e0b` | `#d97706` | `#b45309` |

### Background colors

```ts
bgPrimary:   "#030014",   // Main page background
bgSecondary: "#080525",   // Alternating sections
bgCard:      "#0c0a2a",   // Card backgrounds
bgCardHover: "#14103a",   // Card hover/active state
```

If you change `bgPrimary`, also update `globals.css` line 4:
```css
--background: #030014;  /* ← match this to bgPrimary */
```

---

## 4. Adding Your Own Images & Videos

### Is the `public/` folder safe?

**Yes — the `public/` folder is specifically designed for files you want visitors to see** (images, videos, logos). Think of it like a public display shelf. Only put files here that you're okay with anyone viewing — never put passwords, API keys, or private documents here. Your source code and config files are *not* in `public/` and are never exposed to visitors.

### Step 1: Add files to `/public/`

Drag and drop your image or video file into the `public/` folder inside your project. In Windsurf, you'll see it in the left file panel.

For example:
```
public/
├── chart-screenshot.png    ← your chart screenshot
├── hero-bg.mp4             ← optional background video
└── hero-bg.jpg             ← optional background image
```

> **File size tips for fast loading:**
> - Images: Use `.jpg` or `.webp`, ideally **under 400KB**. You can compress free at [squoosh.app](https://squoosh.app)
> - Videos: Use `.mp4`, keep it **under 8MB**, short 5–15 second loops look best
> - Screenshot: A `.png` of your TradingView chart works perfectly

### Step 2: Reference them in site.ts

Open `src/config/site.ts` and set the paths. The `/` at the start means "look in the public folder":

**Hero background video (plays silently behind the headline):**
```ts
hero: {
  backgroundVideo: "/hero-bg.mp4",   // ← your video filename
  backgroundImage: "/hero-bg.jpg",   // ← shows while video loads (or if no video)
}
```

**Before / After comparison slider (the chart preview section):**

The preview section shows a draggable slider that lets visitors compare a chart WITHOUT your indicator (left) versus WITH your indicator signals visible (right).

```ts
preview: {
  beforeImage: "/chart-before.png",   // ← chart WITHOUT AlgoraX (left side)
  afterImage:  "/chart-after.png",    // ← chart WITH AlgoraX signals (right side)
}
```

**How to set it up:**
1. Take a screenshot of your TradingView chart **without** the indicator active → save as `chart-before.png`
2. Take a screenshot of the **same chart** with AlgoraX signals visible → save as `chart-after.png`
3. Drag both files into the `public/` folder
4. Set the paths in `site.ts` as shown above
5. Save — the slider will appear immediately with your images

> **Tips for great comparison images:**
> - Use the exact same chart (same asset, same timeframe, same candles) for both screenshots so the comparison is clear
> - Crop both screenshots to the same dimensions before saving
> - Highlight a BUY signal with the TP/SL levels clearly visible in the "after" image
> - Use `.png` for sharp chart lines, ideally under 500KB (compress free at [squoosh.app](https://squoosh.app))

If both fields are left as `""`, a styled placeholder with instructions is shown instead.

**To use only an image (no video) for the hero background:** leave `backgroundVideo: ""` and only fill in `backgroundImage`.

**To use only a gradient background:** leave both hero fields as `""`.

---

## 5. Changing Links (Discord, Payment, Contact)

In `src/config/site.ts` → `links`:

```ts
links: {
  discord:   "https://discord.gg/YOUR_INVITE",
  getAccess: "#pricing",                        // or a Stripe/Gumroad link
  contact:   "mailto:support@algorax.com",
}
```

For pricing CTA buttons, each plan has its own `ctaLink`:
```ts
plans: [
  {
    name: "Monthly",
    ctaLink: "https://buy.stripe.com/your-monthly-link",
    ...
  },
]
```

---

## 6. Adding / Removing / Reordering Sections

Open **`src/app/page.tsx`**. The sections render top-to-bottom:

```tsx
<Navbar />
<Hero />
<Preview />
<TradingModes />
<Features />
<HowItWorks />
<Reviews />
<Pricing />
<FAQ />
<Footer />
```

- **Remove a section:** Delete its line and its import at the top.
- **Reorder:** Move the line up or down.
- **Add a new section:** Create a component in `src/components/`, import it, and add it here.

---

## 7. Changing the Navbar Links

In **`src/components/Navbar.tsx`**, lines 7–12:

```ts
const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Results",  href: "#reviews" },
  { label: "Pricing",  href: "#pricing" },
  { label: "FAQ",      href: "#faq" },
];
```

Change labels or add/remove items freely. The `href` must match the `id` on the target section (e.g., `id="pricing"` on the Pricing section).

---

## 8. SEO — Getting Found on Google

SEO (Search Engine Optimization) helps Google understand what your site is about. Here's everything you can set:

### Page title & description

Open **`src/app/layout.tsx`** and edit the metadata block. This controls what Google shows in search results and what appears in the browser tab:

```ts
export const metadata: Metadata = {
  title: "AlgoraX — TradingView Indicator for Forex, Crypto & Stocks",
  description:
    "AlgoraX gives traders precise buy/sell signals, automated TP & SL, and real-time trend detection on TradingView. Try it today.",
};
```

> **Title tips:** Keep it under 60 characters. Include your brand name and your main keyword (e.g. "TradingView indicator").
> **Description tips:** Keep it under 160 characters. Describe what you offer and add a light call to action.

### Open Graph (link previews on social media & Discord)

When someone shares your link on Twitter/X, Discord, or WhatsApp, this controls the preview card. Add this inside the same `metadata` object in `layout.tsx`:

```ts
export const metadata: Metadata = {
  title: "AlgoraX — TradingView Indicator",
  description: "Precise buy/sell signals, auto TP & SL, real-time trend detection.",
  openGraph: {
    title: "AlgoraX — TradingView Indicator",
    description: "Precise buy/sell signals, auto TP & SL, real-time trend detection.",
    url: "https://yourdomain.com",
    siteName: "AlgoraX",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",  // ← put a 1200×630px promo image in /public/
        width: 1200,
        height: 630,
        alt: "AlgoraX Trading Indicator",
      },
    ],
    type: "website",
  },
};
```

> **Create an OG image:** Make a 1200×630px banner image (e.g. in Canva) with your brand name and a chart screenshot. Save it as `og-image.jpg` in your `public/` folder.

### Quick SEO checklist

- [ ] Page title includes your main keyword
- [ ] Description is under 160 characters and describes what you offer
- [ ] OG image created and added to `public/`
- [ ] Domain connected (Google ranks real domains higher than `.vercel.app`)
- [ ] Submit your site to [Google Search Console](https://search.google.com/search-console) after going live — it's free and tells Google you exist

---

## 9. Hosting Your Site (with your GoDaddy domain)

### Recommended Setup: Vercel (free hosting) + GoDaddy (your domain)

This is the easiest and best-performing option for a Next.js site. Vercel is free for personal/small sites and deploys in about 60 seconds.

### Step-by-step:

#### A. Push your code to GitHub

> **What is this?** GitHub stores your code online so Vercel can read it. You only need to do this setup once.

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Click the **+** icon → **New repository**. Name it `algorax-website`. Leave everything else default, click **Create repository**.
3. Open a terminal in the project folder (in Windsurf: press `` Ctrl+` ``) and run these commands one at a time:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/algorax-website.git
   git push -u origin main
   ```
   *(Replace `YOUR_USERNAME` with your actual GitHub username)*

#### B. Deploy on Vercel (free)

1. Go to [vercel.com](https://vercel.com) → **Sign up with GitHub**.
2. Click **Add New → Project**.
3. You'll see your `algorax-website` repository listed — click **Import**.
4. Leave all settings as-is and click **Deploy**.
5. Done! Your site is live at `algorax-website.vercel.app` in about 60 seconds.

#### C. Connect your GoDaddy domain

1. In Vercel, go to your project → **Settings → Domains**.
2. Type your domain (e.g., `algorax.com`) and click **Add**.
3. Vercel will show you DNS records. You'll see something like:
   ```
   Type: A       Name: @    Value: 76.76.21.21
   Type: CNAME   Name: www  Value: cname.vercel-dns.com
   ```
4. Log in to your **GoDaddy account** → click your domain → **DNS** (or "Manage DNS").
5. Find the existing **A record** for `@` and click the pencil/edit icon. Change the value to `76.76.21.21`.
6. Find (or add) a **CNAME record** for `www`. Set the value to `cname.vercel-dns.com`.
7. Save changes. Wait 5–30 minutes for DNS to update worldwide.
8. Back in Vercel, click **Verify** — once it shows a green checkmark, your domain is live with free HTTPS automatically!

> **Tip:** GoDaddy sometimes shows an upsell for "SSL certificates" — you don't need to buy one. Vercel provides free SSL automatically.

### Alternative: Netlify

Same process — push to GitHub, connect Netlify, add DNS records in GoDaddy. Both are free for personal/small sites.

---

## 10. Updating Your Site After Changes

Once hosted on Vercel + GitHub, publishing an update is 3 commands:

1. Make your changes (e.g. edit `src/config/site.ts`).
2. Save the file (Cmd+S / Ctrl+S).
3. Open the terminal in Windsurf (`` Ctrl+` ``) and run:
   ```bash
   git add .
   git commit -m "What I changed"
   git push
   ```
4. Vercel automatically rebuilds and deploys within ~30 seconds. Your live site updates instantly!

> **What does each command do?**
> - `git add .` → stages all your saved changes
> - `git commit -m "..."` → saves a snapshot (write any description you like)
> - `git push` → uploads it to GitHub, which triggers Vercel to rebuild

---

## Quick Reference Cheat Sheet

| I want to... | Edit this... |
|---|---|
| Change any text, prices, reviews, FAQ | `src/config/site.ts` |
| Change colors/gradient theme | `src/config/site.ts` → `colors` |
| Add hero image or video | Put file in `public/`, set path in `site.ts` → `hero` |
| Add before/after slider images | Put both files in `public/`, set paths in `site.ts` → `preview.beforeImage` and `preview.afterImage` |
| Change Discord / payment links | `src/config/site.ts` → `links` + `pricing.plans[].ctaLink` |
| Change navbar links | `src/components/Navbar.tsx` → `navLinks` |
| Change page title & SEO | `src/app/layout.tsx` → `metadata` |
| Add OG social preview image | Put `og-image.jpg` in `public/`, add to `layout.tsx` |
| Reorder or remove sections | `src/app/page.tsx` |
| Publish updates to live site | `git add . && git commit -m "msg" && git push` |

---

That's it! The site is designed so you can change **everything** from one config file. If you ever get stuck, just ask.
