# Optical Vision Prototype

Build a mobile-first, Arabic (RTL) front-end prototype website for an eyeglasses store. This is a design prototype only: NO backend, NO database, NO authentication. Use mock data stored in a single file (src/data/products.ts) so it's easy to edit later.

## Brand
- Store name (Arabic): عبدالعزيز بن خليفة الزريق لنظارات
- Use the full name in the navbar (shortened on small screens if needed) and in the footer.
- Design a simple, clean text-based logo (e.g., a small glasses icon from lucide-react + the store name). No need for an image logo.

## Design direction
- Color palette: sky blue and white.
  - Primary: sky blue (#38BDF8 / #0EA5E9 range)
  - Light tint backgrounds: #F0F9FF
  - Main background: white
  - Text: dark slate (#0F172A) and gray (#64748B)
- Style: modern, clean, trustworthy, lots of white space, rounded corners (rounded-2xl), soft shadows, subtle hover/press animations.
- Font: Tajawal or Cairo from Google Fonts (Arabic-friendly).
- The whole site must be RTL (dir="rtl", lang="ar").
- MOBILE FIRST: most visitors will open this on their phones. Design for ~390px width first, then scale up to tablet/desktop. Buttons must be large and touch-friendly.

## Pages / sections (single page with smooth-scroll + one product details view)
1. Sticky navbar: logo/name, links (الرئيسية، النظارات، عن المتجر، تواصل معنا). Hamburger menu on mobile.
2. Hero section: big headline like "نظارات تناسب ذوقك... وتحمي عينيك", short subtitle, a sky-blue CTA button "تصفح النظارات" that scrolls to the products section, and a nice visual on the side/below (glasses image or a decorative sky-blue shape).
3. Products section ("النظارات"):
   - Category filter chips: الكل، رجالي، نسائي، شمسية، طبية
   - Responsive grid: 2 columns on mobile, 3 on tablet, 4 on desktop.
   - Product card: image, name, price, small category badge, and a "التفاصيل" button.
4. Product details (modal/drawer on mobile, or a separate route /product/:id): large image, name, price, description, specs (frame material, lens type, color, size), and a big button "اطلب عبر واتساب" that opens https://wa.me/PHONE_NUMBER with a pre-filled Arabic message containing the product name (use a placeholder phone number constant that's easy to change).
5. Why us section: 3 small feature cards with icons (جودة مضمونة، أسعار مناسبة، فحص نظر ومشورة).
6. About section (عن المتجر): short placeholder paragraph.
7. Contact section (تواصل معنا): WhatsApp button, phone, location placeholder, working hours placeholder.
8. Footer with the store name and copyright.

## Mock data
Create 6 sample products with realistic Arabic names, prices, descriptions, categories and specs. Put the currency in one constant (CURRENCY) so it's easy to change. Use placeholder eyeglasses images from Unsplash (or similar) via a single "image" field per product so I can swap them with the real photos later. Also incorporate the attached product images for the featured sunglasses.

## Tech
- React + TypeScript + Tailwind CSS + shadcn/ui components where helpful, lucide-react for icons.
- Keep the code clean and organized: components/ (Navbar, Hero, ProductCard, ProductGrid, ProductDetails, Features, About, Contact, Footer), data/products.ts, and a config file (src/config.ts) holding the store name, WhatsApp number, and currency.
- Good performance on mobile: lazy-load images, avoid heavy animations.

Make it look polished and professional, like a real optical store website.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://lovelook-ar.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/311db0e3-0f47-4433-ba53-9072e5ca2b78).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
