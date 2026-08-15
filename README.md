# JALORA – Premium Customized Drinking Water Brand Website

Official website for **JALORA (जलोरा)** – customized packaged drinking water bottles for hotels, weddings, restaurants, corporate events and more.

**Tagline:** हर अवसर पर, आपकी पहचान।

## Features

- Premium, modern, realistic design (no generic AI look)
- Interactive bottle label preview (type your brand name → see it live)
- Hero bottle with automatic label rotation (JALORA → Hotel → Wedding → Restaurant → Your Brand)
- Product cards for 250 ml / 500 ml / 750 ml / 1 L
- Occasion-based label showcase
- 4-step “How It Works”
- Full custom quote form → opens WhatsApp with pre-filled order details
- Sticky mobile bottom bar: WhatsApp Order | Call Now
- SEO-ready meta tags, Open Graph, semantic HTML
- Fully responsive + accessible (respects `prefers-reduced-motion`)
- Lightweight – pure HTML / CSS / vanilla JS (no heavy frameworks)

## Quick Start

1. Replace the placeholders in `js/main.js`:
   ```js
   const WHATSAPP_NUMBER = '919876543210'; // your number without +
   const PHONE_NUMBER = '+919876543210';
   ```
2. Open `index.html` in a browser or deploy the folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).

## Deploy to GitHub Pages

1. Create a new repository named `jalora` (or push this folder into an existing one).
2. Enable GitHub Pages on the `main` branch (root or `/docs`).
3. Your site will be live at `https://<username>.github.io/jalora/`.

## Customization

- All WhatsApp deep links are generated from the single config at the top of `js/main.js`.
- Label designs and occasion names can be edited in the same file.
- Colors live in the Tailwind config inside `index.html` and in `css/styles.css`.

## License

© 2026 JALORA. All Rights Reserved.
