# Queen Shavah Sustainable Development Initiative

**Tagline:** Dignity for All. Giving Hands. Caring Hearts. No One Left Behind.

Queen Shavah Sustainable Development Initiative is a Nigerian nonprofit organization committed to empowering individuals, families, and communities across Nigeria. We believe that dignity, education, safety, health, and opportunity should not depend on gender, poverty, or circumstance.

---

## Mission

To be the hands that give and the heart that cares. We advance health, education, safety, livelihoods, and leadership for vulnerable persons through direct programs, advocacy, partnerships, and sustainable community development.

## Vision

A Nigeria where every person lives with dignity, safety, education, and the opportunity to lead and thrive.

---

## Programs

1. **Health & Hygiene** — menstrual hygiene, dignity kits, WASH, health education, disease prevention
2. **Safety & Protection** — gender-based violence prevention, survivor support, counselling referrals, safe spaces
3. **Crisis Response** — emergency relief, food, shelter, dignity kits, support for displaced and vulnerable families
4. **Education & Scholarships** — scholarships, learning materials, mentorship, leadership development, school infrastructure
5. **Economic Empowerment** — skills acquisition, vocational training, micro-enterprise support, livelihood programs, food security
6. **Leadership & Governance** — leadership development, civic engagement, advocacy, public speaking, inclusive representation

### Flagship Program — Dignity for All

Dignity for All provides menstrual hygiene products, health education, and hygiene support to vulnerable girls and students, helping remove barriers that can prevent girls from staying in school.

---

## Founder

**Ruth Elisha Shavah** — Founder & Executive Director

---

## Technology Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- lucide-react (icons)

The frontend is architected so that events, gallery, projects, and donations are served through a `src/services` layer. This currently returns static/mock data and can later be backed by Supabase without redesigning the UI. Online donation processing is intentionally **not** implemented yet — the donation flow routes through a single abstraction (`src/services/donationService.ts`) that a payment provider can plug into later.

### Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint     # run oxlint
npm run preview  # preview the production build
```

---

## Project Structure

```
the-giver/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   ├── sections/     # Hero, About, Programs, Flagship, Events, Gallery, ...
│   │   └── ui/           # Reusable UI (DonateButton)
│   ├── data/             # Centralized content (content.ts)
│   ├── services/         # Supabase-ready data services (events, gallery, donations)
│   ├── types/            # Shared TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

---

## Get Involved

- Give (online donations coming soon)
- Volunteer
- Partner with us

---

## Contact

- **Email:** info@queenshavahsustainabledevelopmentinitiative.org
- **Phone:** +234 817 884 8534
- **Address:** House No 262 Odeh Adeka Street, Greencity Residences, Karsana District, Gwarinpa, Abuja, Nigeria

---

© 2026 Queen Shavah Sustainable Development Initiative. All rights reserved.

---

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
