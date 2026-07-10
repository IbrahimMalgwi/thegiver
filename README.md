# 🌸 The Giver

**Website:** https://thegiver.org *(Coming Soon)*

**Tagline:**  
**Give Dignity. Give Education. Give Hope.**

The Giver is a nonprofit organization dedicated to ending period poverty in Nigeria by providing menstrual hygiene kits to school girls, ensuring that no girl misses school because of her period.

---

# 📖 About

The Giver was founded in **2026** with a simple mission:

> **No girl should have to miss school because she cannot afford menstrual hygiene products.**

We believe menstrual health is a human dignity issue and that every girl deserves equal access to education regardless of her monthly cycle.

We started with a goal of supporting **200 girls** in Nigeria and aim to reach **200,000+ girls** across the country.

This is more than charity.

**This is dignity.**

---

# 🎯 Mission

To eliminate period poverty by providing menstrual hygiene kits, menstrual health education, and support that keeps girls in school.

---

# 👁️ Vision

A Nigeria where no girl misses school because of her period.

---

# ❤️ Our Values

- Dignity
- Compassion
- Transparency
- Education
- Accountability
- Community

---

# 🌍 What We Do

The Giver partners with schools and local communities to provide menstrual hygiene kits directly to girls.

Each hygiene kit includes:

- Sanitary pads
- Soap
- Underwear
- Menstrual hygiene education

---

# 💰 Donation Impact

| Donation | Impact |
|----------|--------|
| **$12** | Sponsors one girl for six months |
| **$60** | Sponsors five girls |
| **$240** | Sponsors twenty girls |

Every donation goes directly toward purchasing and distributing menstrual hygiene kits.

---

# 🚀 Current Project

## Project #1 — Dignity for 200 Nigerian Girls

Our first campaign seeks to provide menstrual hygiene kits to **200 girls** across two secondary schools in Nigeria.

### Goal

**$2,400**

This will provide:

- 6 months of menstrual hygiene support
- Hygiene education
- Improved school attendance
- Better health outcomes

---

# 🔄 How It Works

## 1. You Give

Donate securely online through our website or fundraising partners.

---

## 2. We Deliver

Our volunteers purchase hygiene kits locally and distribute them directly to schools across Nigeria.

Each outreach also includes menstrual hygiene education.

---

## 3. You See Impact

Transparency matters.

Every donor receives updates through:

- Photos
- Videos
- Stories
- Distribution reports

We believe every contribution should have visible impact.

---

# 📊 Transparency

We are committed to complete financial transparency.

- 100% of donations go to menstrual hygiene kits and distribution.
- Receipts and reports are published after every outreach.
- Photo and video updates are shared with supporters.

---

# 👩 Founder

**Queen Shavah**

Teacher • Advocate • Giver

The Giver was born from the belief that education should never stop because of menstruation.

---

# 🛠 Website Features

- Modern responsive design
- Online donations
- Campaign progress tracker
- Impact gallery
- Video updates
- FAQ section
- Contact form
- Mobile-friendly interface

---

# 🖥 Technology Stack

Suggested stack:

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

### Backend

- Firebase
- Supabase
- Node.js (optional)

### Payments

- PayPal
- Stripe
- GoFundMe

### Hosting

- Vercel
- Netlify

---

# 📁 Project Structure

```
thegiver/
│
├── public/
│   ├── logo.svg
│   ├── favicon.ico
│   └── images/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Problem/
│   │   ├── Project/
│   │   ├── Impact/
│   │   ├── FAQ/
│   │   ├── Footer/
│   │   └── Donate/
│   │
│   ├── pages/
│   ├── hooks/
│   ├── layouts/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── vite.config.ts
└── README.md
```

---

# 📷 Future Features

- Monthly giving
- School sponsorships
- Volunteer portal
- Donor dashboard
- Impact map
- Success stories
- Annual reports
- Blog
- Newsletter
- School applications

---

# 🤝 Get Involved

There are many ways to support The Giver:

- Donate
- Become a monthly giver
- Volunteer
- Sponsor a school
- Share our mission
- Partner with us

Every contribution helps a girl stay in school.

---

# 📧 Contact

**The Giver**

📧 Email  
thegiver@gmail.com

📱 WhatsApp  
+234 817 884 8534

📷 Instagram  
@thegivergirls

---

# 📜 License

Copyright © 2026 The Giver.

All Rights Reserved.

---

## ❤️ Our Promise

> Every girl deserves dignity.

> Every girl deserves education.

> Every girl deserves hope.

**Together, we can end period poverty in Nigeria—one girl, one kit, one classroom at a time.**




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
