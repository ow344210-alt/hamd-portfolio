# Hamd Ali — Portfolio

A responsive, single-page personal portfolio for **Hamd Ali**, a WordPress
Developer and Software Engineering undergraduate. It presents his profile,
experience, skills, education, projects, and contact details.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- `next/image` for optimized images and `next/og` for the generated
  favicon and Open Graph image

No database or backend is required. There is one optional environment
variable, `NEXT_PUBLIC_SITE_URL`, used to build absolute URLs for the
Open Graph/Twitter preview image (see [Deploying to Vercel](#deploying-to-vercel)).

## Project structure

```
app/                     App Router routes, layout, metadata, generated icons
  layout.tsx             Root layout, fonts, and metadata
  page.tsx               Home page composition
  opengraph-image.tsx    Generated Open Graph image
  icon.tsx               Generated favicon
  not-found.tsx          404 page
components/              UI sections (nav, hero, about, experience, ...)
lib/                     Content data and small utilities
public/images/           Profile image
projects/                Two academic programming projects (Python, C++)
images/                  Original supplied image asset
```

## Getting started

Requires **Node.js 20.9+**.

```bash
npm install
npm run dev
```

Open <http://localhost:3000> in your browser.

## Available scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the development server         |
| `npm run build`     | Create a production build            |
| `npm run start`     | Run the production build locally     |
| `npm run lint`      | Run ESLint                           |
| `npm run typecheck` | Run the TypeScript compiler          |

## Profile image

The site uses the supplied asset at `public/images/hamd-portfolio.png`.
The original file is also kept in `images/hamd-portfolio.png`. If you
replace it, keep a similar (roughly square) aspect ratio.

## Academic projects

The `projects/` directory contains two standalone programming projects
that are also listed in the portfolio:

- `projects/python-expense-tracker` — a Python command-line expense
  tracker (OOP, JSON persistence, input validation).
- `projects/cpp-student-grade-manager` — a C++ console grade manager
  (classes, standard library, file I/O).

Each folder has its own README with build and run instructions.

## Deploying to Vercel

The repository is a standard Next.js app with no custom build settings,
so Vercel detects the framework automatically.

1. Push the project to GitHub (see below).
2. Go to <https://vercel.com/new> and sign in with GitHub.
3. Import the `hamd-portfolio` repository.
4. Keep the detected settings (Framework: **Next.js**, build command
   `next build`) and click **Deploy**.

No environment variables are required to deploy. Optionally set
`NEXT_PUBLIC_SITE_URL` (e.g. `https://hamdali.com`) so the Open Graph
image URL is absolute and correct; on Vercel the deployment URL is used
automatically when the variable is not set.

To deploy from the command line instead:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

## Connecting the GitHub repository

The remote is not configured in this working copy. To connect it:

```bash
git add .
git commit -m "Add Hamd Ali portfolio"
git branch -M main
git remote add origin https://github.com/ow344210-alt/hamd-portfolio.git
git push -u origin main
```

The repository is private, so keep its visibility unchanged.
