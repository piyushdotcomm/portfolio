<div align="center">

# ⚡ Piyush Kumar — Personal Portfolio

**A high-performance, minimal portfolio built with Next.js 15, Tailwind CSS v4, and shadcn/ui.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Site-piyush.in-000?style=for-the-badge&logo=vercel&logoColor=white)](https://piyush.in)
[![GitHub](https://img.shields.io/badge/GitHub-piyushdotcomm-181717?style=for-the-badge&logo=github)](https://github.com/piyushdotcomm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-piyushdotcom-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/piyushdotcom)

![Portfolio Preview](https://og.piyush.in/domain)

</div>

---

## 🚀 Overview

This is my **personal portfolio website** — Piyush Kumar, a Computer Science undergraduate at VIT Chennai specializing in **Artificial Intelligence & Robotics**. The site showcases my projects, blog, component registry, and technical skills, and is built on a modern, production-grade Next.js stack.

> 🎓 **B.Tech CSE (AI & Robotics)** · VIT Chennai  
> 💻 **Builder of** [Editron](https://editron.in), [Orbit CLI](https://orbit-cli.vercel.app), & more  
> 🌍 Chennai, Tamil Nadu, India

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧑‍💼 **Portfolio** | Projects, experience, certifications, and awards |
| 📝 **Blog** | MDX-powered blog with syntax highlighting & RSS feed |
| 🧩 **Component Registry** | Reusable UI components installable via shadcn CLI |
| 🌙 **Dark / Light Mode** | Seamless theme switching with system preference detection |
| 📱 **Responsive** | Fully mobile-first, pixel-perfect layouts |
| ⚡ **Performance** | Optimized with Turbopack, static generation, and Vercel Edge |
| 🔍 **SEO** | Sitemap, robots.txt, Open Graph, JSON-LD structured data |
| 🔗 **vCard** | Downloadable contact card from `/vcard` |
| 🤖 **LLM Endpoints** | Machine-readable routes at `/llms.txt` for AI agents |

---

## 🛠️ Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** — App Router, React Server Components, Turbopack
- **[React 19](https://react.dev/)** — Latest concurrent features
- **[TypeScript 5.7](https://www.typescriptlang.org/)** — Strict mode, full type safety

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Next-gen utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** — Accessible, composable component primitives
- **[Motion](https://motion.dev/)** — Smooth animations & micro-interactions

### Content
- **[MDX](https://mdxjs.com/)** via `next-mdx-remote` — Rich blog post authoring
- **[rehype-pretty-code](https://rehype-pretty-code.netlify.app/)** — Beautiful code blocks powered by Shiki

### Dev Experience
- **pnpm** — Fast, disk-efficient package manager
- **[Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged)** — Pre-commit hooks
- **[Prettier](https://prettier.io/) + ESLint** — Consistent code style

### Deployment
- **[Vercel](https://vercel.com/)** — Zero-config deployments with preview branches

---

## 📁 Project Structure

```
piyush.in/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (app)/              # Main portfolio routes
│   │   ├── (llms)/             # LLM-readable text endpoints
│   │   ├── og/                 # Open Graph image generation
│   │   ├── rss/                # RSS feed
│   │   └── vcard/              # Downloadable vCard
│   ├── components/             # Shared UI components
│   │   └── ui/                 # shadcn/ui primitives
│   ├── features/               # Feature-based modules
│   │   ├── blog/               # Blog content, types, and components
│   │   └── profile/            # All portfolio data & components
│   │       ├── components/     # Profile UI (header, projects, skills…)
│   │       └── data/           # ← Edit these to customize
│   │           ├── user.ts     # Personal info & bio
│   │           ├── projects.ts # Portfolio projects
│   │           ├── experiences.ts
│   │           ├── tech-stack.ts
│   │           ├── certifications.ts
│   │           ├── awards.ts
│   │           └── social-links.ts
│   ├── registry/               # Component registry source
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility libraries
│   └── styles/                 # Global CSS
├── public/
│   ├── images/                 # Profile photo
│   ├── audio/                  # Name pronunciation audio
│   └── r/                      # Auto-generated registry JSON
└── src/__registry__/           # Auto-generated (DO NOT EDIT)
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** `20` or `>=22`
- **pnpm** `>=9` — [Install pnpm](https://pnpm.io/installation)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/piyushdotcomm/portfolio.git
cd portfolio/piyush.in

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and set APP_URL and REGISTRY_URL

# 4. Start the dev server
pnpm dev
```

Open [http://localhost:1408](http://localhost:1408) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server on port 1408 with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm format:write` | Format code with Prettier |
| `pnpm check-types` | TypeScript type check |
| `pnpm registry:build` | Build the shadcn component registry |

---

## 🧩 Component Registry

This portfolio also ships a **public component registry** built on top of shadcn/ui. You can install individual components into your own React projects:

```bash
npx shadcn@latest add https://piyush.in/r/theme-switcher.json
npx shadcn@latest add https://piyush.in/r/flip-sentences.json
npx shadcn@latest add https://piyush.in/r/apple-hello-effect.json
npx shadcn@latest add https://piyush.in/r/wheel-picker.json
npx shadcn@latest add https://piyush.in/r/work-experience.json
```

> Components require **Tailwind CSS v4** and **React 19**.

---

## 🎨 Customization

To adapt this portfolio for yourself, update the data files in `src/features/profile/data/`:

| File | What to edit |
|---|---|
| `user.ts` | Name, bio, contact info, avatar URL |
| `projects.ts` | Portfolio projects with links and skills |
| `experiences.ts` | Work history and education |
| `tech-stack.ts` | Technologies you use |
| `certifications.ts` | Certifications and courses |
| `awards.ts` | Hackathon wins and achievements |
| `social-links.ts` | Social media and contact links |

Also update `src/config/site.ts` for site-wide settings (URL, navigation, GitHub repo).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ by [Piyush Kumar](https://github.com/piyushdotcomm) · [piyush.in](https://piyush.in)

</div>
