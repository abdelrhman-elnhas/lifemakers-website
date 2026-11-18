<div align="center">

# 💙 Life Makers El-Mahalla

### صناع الحياة المحلة الكبرى

**The official website of a community charity chapter, designed and built from scratch.**
Arabic-first · RTL-native · Fast · Accessible

[![Live Site](https://img.shields.io/badge/🌐_Live-lifemakers--mahalla.org-0a7cff?style=for-the-badge)](https://lifemakers-mahalla.org)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149eca?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ecf8e?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)

[🌐 **Visit the live website**](https://lifemakers-mahalla.org) · [👤 Portfolio](https://www.abdelrhman-elnhas.com) · [📂 More projects](https://github.com/abdelrhman-elnhas)

</div>

---

## 👋 For Recruiters: 30-Second Summary

| | |
| --- | --- |
| **What it is** | A live, production website for the Life Makers charity chapter in El-Mahalla El-Kubra, Egypt |
| **My role** | UI/UX design + frontend engineering: from layout and visual identity to architecture and deployment |
| **Live site** | [lifemakers-mahalla.org](https://lifemakers-mahalla.org) |
| **Core stack** | Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Supabase · TanStack Query · Framer Motion |
| **Hard parts solved** | Arabic/RTL-first interface, validated forms, server-side auth, motion that stays performant |
| **Deployment** | Vercel, with automatic deploys from `main` |

> 💡 **Want the short version?** Jump to [Feature Showcase](#-feature-showcase) to see what the site does, then to [Skills Demonstrated](#-skills-demonstrated-in-this-repo) to see where each skill shows up in the code.

---

## 🧠 About the Project

**Life Makers (صناع الحياة)** is an Egyptian non-profit foundation focused on community development, volunteering, and charitable giving. The **El-Mahalla El-Kubra** chapter needed a website that represents its work properly and gives people a clear way to learn about the chapter and get involved.

I designed and built that website end to end. The goal was simple: a site that feels trustworthy, loads fast, and reads naturally in Arabic.

---

## 🖼️ Feature Showcase

> Screenshots live in the `screenshots/` folder. Replace the placeholders below with your own captures.

### 🏠 Home

![Home page](./screenshots/home.png)

* Hero section that introduces the chapter and its mission in the first screen
* Clear entry points to the rest of the site
* Smooth, purposeful animations with Framer Motion (no motion for motion's sake)
* Designed Arabic-first, with a layout that is mirrored correctly for RTL

---

### 🏛️ About

![About page](./screenshots/about.png)

* Tells the story of the chapter and the foundation behind it
* Structured for scanning: short sections, strong hierarchy, readable Arabic typography
* Consistent visual language shared with the rest of the site

---

### 🙋 Volunteering

![Volunteering page](./screenshots/volunteering.png)

* Explains how volunteering with the chapter works
* Gives visitors a direct path to get involved
* Forms built with React Hook Form and validated with Zod, so people get clear feedback before submitting

---

### 🛡️ Admin Dashboard

![Admin dashboard Login](./screenshots/admin-login.png)

* A protected admin area, separate from the public site, for the chapter team to manage the website without touching code
* Sign-in handled by Supabase authentication, with sessions that work on both server and client
* Overview screen that gives staff a quick picture of activity at a glance
* Built with the same design system as the public site, so it feels like one product

---

### 🗂️ Content & Data Management

![Admin content management](./screenshots/admin-content-1.png)(./screenshots/admin-content-2.png)

* Tables and forms for creating, editing, and reviewing the data behind the site
* Every form validated with React Hook Form and Zod, so bad input is caught before it reaches the database
* Instant feedback after each action, with optimistic updates where it makes the experience feel faster
* Data stored in Supabase

---

<!--
  Add one block per extra page or admin screen that exists
  (for example donations, news, contact messages), using the same format as above.
-->

---

## ⚙️ Engineering Highlights

Decisions that matter to anyone reviewing the code:

* **Modern React stack**: Next.js 16 App Router with React 19, and the **React Compiler** enabled to cut unnecessary re-renders without manual memoization
* **Server-aware auth and data**: Supabase through `@supabase/ssr`, so sessions work on both server and client
* **Server state done properly**: TanStack Query for caching, background refetching, and predictable loading states
* **Type safety end to end**: strict TypeScript, with Zod schemas as the single source of truth for form validation
* **Accessible by default**: UI built on Radix primitives through shadcn/ui
* **RTL-native design**: layout, spacing, and typography designed for Arabic from the start rather than patched afterwards
* **Token-based styling**: Tailwind CSS 4 with a consistent theme, so the design stays coherent as the site grows
* **Clean tooling**: ESLint 9 with the official Next.js config

---

## 🧰 Skills Demonstrated in This Repo

| Skill | Where it shows up |
| --- | --- |
| **Next.js (App Router)** | Routing, layouts, and server/client component split in `src/app` |
| **React 19 + React Compiler** | `babel-plugin-react-compiler` enabled for automatic optimization |
| **TypeScript** | Strict typing across components, hooks, and utilities |
| **Tailwind CSS 4** | Token-based theming and responsive layouts |
| **Component architecture** | shadcn/ui + Radix + class-variance-authority for reusable, accessible components |
| **Forms & validation** | React Hook Form + Zod resolvers |
| **Data fetching & caching** | TanStack Query |
| **Backend as a service** | Supabase auth and database via `@supabase/ssr` |
| **Animation** | Framer Motion and tw-animate-css |
| **RTL / Arabic UX** | Arabic-first interface and typography |
| **Deployment** | Vercel with continuous deployment from `main` |

---

## 🛠️ Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) |
| UI library | [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Components | [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://www.radix-ui.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Backend | [Supabase](https://supabase.com) |
| Server state | [TanStack Query](https://tanstack.com/query) |
| Forms | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| Icons | [Lucide](https://lucide.dev), [React Icons](https://react-icons.github.io/react-icons/) |
| Linting | ESLint 9 |
| Hosting | [Vercel](https://vercel.com) |

---

## 🎨 Beyond Code: Design & Visual Skills

I work on both sides of the screen. Alongside frontend engineering I design **Arabic and RTL-aware visual assets** for campaigns and social media, so the website, the posters, and the videos around it can share one visual identity.

That combination means I can take a feature from **idea → design → working, deployed code** without a hand-off gap.

---

## ⚙️ Getting Started

### Prerequisites

* Node.js 20 or later
* npm (or pnpm / yarn / bun)
* A Supabase project (the free tier is enough)

### 1. Clone the repo

```bash
git clone https://github.com/abdelrhman-elnhas/lifemakers-website.git
cd lifemakers-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Lint the codebase with ESLint |

---

## 📁 Project Structure (Simplified)

```
lifemakers-website/
 ├── public/            # Static assets (logo, images, fonts)
 ├── src/               # Application source (routes, components, utilities)
 ├── components.json    # shadcn/ui configuration
 ├── next.config.ts     # Next.js configuration
 ├── eslint.config.mjs  # ESLint configuration
 ├── postcss.config.mjs # PostCSS / Tailwind configuration
 └── tsconfig.json      # TypeScript configuration
```

---

## 🔮 Future Improvements

* English version with a language switcher
* Online payment integration for donations

---

## 🚀 More From Me

| Project | What it shows |
| --- | --- |
| [DST ERP System](https://github.com/abdelrhman-elnhas/DST-ERP-System) | Complex data-heavy UI: Kanban, map tracking, TanStack Query at scale |
| [Portfolio](https://www.abdelrhman-elnhas.com) | Design and development work in one place |

---

## 👨‍💻 Author

**Abdelrhman Elnhas**
Frontend Engineer | UI/UX Designer, based in Egypt

React · Next.js · TypeScript · Arabic/RTL interfaces · Motion & visual design

🌐 Portfolio: [abdelrhman-elnhas.com](https://www.abdelrhman-elnhas.com)
💻 GitHub: [@abdelrhman-elnhas](https://github.com/abdelrhman-elnhas)

> 📩 **Hiring or collaborating?** My portfolio has the best way to reach me. I'd be glad to talk.

---

<div align="center">

If this project impressed you, consider giving it a ⭐

**Built with 💙 for صناع الحياة المحلة الكبرى**

</div>
