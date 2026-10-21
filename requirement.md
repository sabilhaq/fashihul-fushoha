# Landing Page Requirements: Fashihul Fushoha

> Status: **v1 built with placeholders.** Items marked _menyusul_ (coming later) are still open.

## 0. Confirmed Decisions (2026-10-15)

| Topic | Decision |
|---|---|
| Main goal / CTA | **Join the WhatsApp group** |
| Page language | **Indonesian** (Arabic used only for the name and decorative text) |
| Description | "Komunitas Belajar Bahasa Arab dari dasar hingga lancar. Belajar online." |
| Programs | 6 listed. Dasar: Durusul Lughoh Jilid 1 (Sabtu ba'da Shubuh, Akh Dhafa), Arobiyyah Baina Yadaik Jilid 1 (Ahad ba'da Shubuh, Akh Naufal). Menengah: Nahwu (Tuhfatus Saniyyah), Baca Kitab (Tafsir As-Sa'di), Percakapan (Durusul Lughoh Jilid 2), Percakapan (Arobiyyah Baina Yadaik Jilid 2). Prices _menyusul_ |
| Link preview & analytics | Static `src/app/opengraph-image.png`; Vercel Web Analytics via `@vercel/analytics` |
| Arabic name | **فصيح الفصحاء** |
| Tagline | **"Dari dasar hingga lancar"** |
| Logo & colors | Logo in `public/logo.png`. Palette taken from the logo: green `#00532c`, brown `#5c3d0a` |
| Social proof (stats, testimonials, teachers) | _menyusul_. Placeholders |
| WhatsApp group | https://chat.whatsapp.com/BDFbYkBos804aG55HfmAb5 |
| Contact & socials | _menyusul_. Placeholders |
| Domain | None yet. Deploy to a temporary `*.vercel.app` URL |
| Stack | Next.js (App Router) + Tailwind CSS, hosted on Vercel |

All placeholder content lives in `src/content/site.ts`, so real data can be dropped in there without touching layout code.

---

## 1. Project Overview

**Community name:** Fashihul Fushoha (فصيح الفصحاء)
**Type:** Arabic language learning community (online)
**Deliverable:** A one-page, responsive landing page (mobile-first)

### Primary goal of the page
- [x] Get people to join the community (WhatsApp group)

---

## 2. Information Needed

### A. Identity & Branding
- [ ] Correct spelling of the name in Latin and Arabic script (e.g. فصيح الفصحى?)
- [ ] Logo (SVG or high-res PNG). If none, should I design a simple text logo?
- [ ] Tagline or slogan (in Arabic, Indonesian and/or English)
- [ ] Brand colors (hex codes), or a preferred feel (e.g. classic/scholarly, modern/minimal, warm/friendly)
- [ ] Preferred fonts, especially the Arabic typeface (e.g. Amiri, Noto Naskh Arabic, Cairo, Tajawal)
- [ ] Reference websites you like (links)

### B. Language & Audience
- [ ] Page language(s): Indonesian / English / Arabic / multiple with a language switcher?
- [ ] Target audience (beginners, students, santri, working adults, children, non-Arabs worldwide…)
- [ ] Age range and region/country of the audience

### C. About the Community
- [ ] Short description (2–4 sentences): what Fashihul Fushoha is and why it exists
- [ ] Vision & mission
- [ ] Founding story / year founded
- [ ] Teaching approach or method (e.g. nahwu-sharaf focus, conversational, Qur'anic Arabic, Madinah books, Al-Arabiyyah Baina Yadaik)
- [ ] What makes it different from other Arabic learning communities

### D. Programs / Classes
For each program, please provide:

| Field | Program 1 | Program 2 | Program 3 |
|---|---|---|---|
| Name | | | |
| Level (beginner / intermediate / advanced) | | | |
| Short description | | | |
| Format (online / offline / hybrid) | | | |
| Platform (Zoom, Google Meet, WhatsApp, Telegram…) | | | |
| Schedule & duration | | | |
| Price (or free) | | | |
| Quota / batch info | | | |
| Registration link | | | |

### E. Teachers / Mentors (optional)
- [ ] Name, photo, short bio and credentials for each teacher (e.g. alumni of Al-Azhar, LIPIA, Madinah)

### F. Social Proof
- [ ] Number of members / alumni / batches / countries (e.g. "1,200+ members")
- [ ] Testimonials: name, photo (optional), short quote, city/role
- [ ] Partner institutions or endorsements
- [ ] Media coverage, certificates, or awards

### G. Media Assets
- [ ] Photos of classes, events, or the community
- [ ] Videos (YouTube link for an intro or class sample)
- [ ] Permission to use these photos/videos publicly

### H. FAQ
- [ ] Common questions people ask, with answers (e.g. "Do I need prior Arabic knowledge?", "Is it free?", "Is there a certificate?", "Is it for men/women/both?")

### I. Contact & Links
- [ ] WhatsApp number / admin contact
- [ ] Email
- [ ] Social media: Instagram, YouTube, TikTok, Telegram, Facebook, X
- [ ] Community join link(s)
- [ ] Physical address (if there's an offline location)

### J. Technical & Hosting
- [ ] Domain name (do you own one already? e.g. fashihulfushoha.com)
- [ ] Hosting preference (Vercel, Netlify, GitHub Pages, your own server). Vercel is my default recommendation.
- [ ] Is a static page enough, or do you need features like:
  - [ ] Registration form (where should submissions go: Google Sheets, email, WhatsApp?)
  - [ ] Blog / articles
  - [ ] Event calendar
  - [ ] Payment integration
  - [ ] Admin panel to edit content without code
- [ ] Analytics (Google Analytics, Vercel Analytics, Meta Pixel)
- [ ] Deadline / launch date

---

## 3. Proposed Page Structure (draft)

Subject to change once the information above is filled in.

1. **Navbar**: logo, section links, language switcher (if multilingual), CTA button
2. **Hero**: name, tagline, short description, main CTA ("Join Now"), Arabic calligraphy or illustration
3. **About**: who we are, vision & mission
4. **Why Learn With Us**: 3–6 key benefits/features with icons
5. **Programs**: cards for each class/program
6. **Learning Method / Curriculum**: how learning works step by step
7. **Teachers**: mentor profiles (optional)
8. **Stats**: members, alumni, batches
9. **Testimonials**: carousel or grid
10. **FAQ**: accordion
11. **Final CTA**: join/registration call-to-action
12. **Footer**: contact, social links, copyright

---

## 4. Non-Functional Requirements

- Responsive: mobile, tablet, desktop
- Fast loading: optimized images, Lighthouse score ≥ 90
- Proper Arabic text rendering, with RTL support where Arabic text appears
- Accessible: semantic HTML, alt text, sufficient color contrast
- SEO basics: meta title/description, Open Graph image for link previews on WhatsApp/social media
- Easy to update content later

---

## 5. Proposed Tech Stack (to confirm)

- **Framework:** Next.js (App Router) + Tailwind CSS, or plain HTML/CSS if you want the simplest possible setup
- **Hosting:** Vercel
- **Forms (if needed):** Google Sheets or a form service

---

## 6. Notes / Additional Requests

_Write anything else here._
