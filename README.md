# Anmol Kumar Srivastava — Developer Portfolio

A fast, recruiter-ready developer portfolio built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

Showcases real full-stack and backend engineering systems (Java, Spring Boot, React, MySQL) with verified academic and algorithmic credentials.

---

## 🛠️ Architecture & Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS + Custom Utility Layers (custom grid patterns, glowing accents, reduced-motion adaptations)
- **Icons**: Lucide React + Custom SVG Brand Badges
- **Linter**: Oxlint (0 warnings, 0 errors)

---

## 📁 Directory Structure

```text
src/
├── components/
│   ├── icons/
│   │   └── SocialIcons.tsx      # SVG icons for GitHub and LinkedIn
│   ├── About.tsx                # 2-column layout with 4 verified stat cards
│   ├── Contact.tsx              # Final CTA: "Let's Build Something Useful."
│   ├── DeveloperStats.tsx       # Verified CodeChef rating (1271), contests (14+), and DSA topics
│   ├── Education.tsx            # B.Tech CSE (ABES Engineering College, 8.44 CGPA) & Schooling
│   ├── Footer.tsx               # Minimal footer with dynamic year
│   ├── Hero.tsx                 # Hero section with primary CTAs & socials
│   ├── Navbar.tsx               # Sticky navbar with mobile hamburger menu
│   ├── Projects.tsx             # Featured SmartHire card + CodePulse & BankEase
│   ├── Skills.tsx               # Categorized skills (Languages, Backend, Frontend, Tools, AI/ML)
│   └── TerminalCard.tsx         # Animated interactive terminal card ($ whoami, cat profile.json)
├── data/
│   └── portfolioData.ts         # Single source of truth for all links, stats & placeholders
├── types/
│   └── index.ts                 # TypeScript interfaces for portfolio data structures
├── App.tsx                      # Main application container
├── index.css                    # Tailwind directives, custom scrollbars, grid background
└── main.tsx                     # React root mount
```

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Check Linting
```bash
npm run lint
```

---

## ⚙️ Customization (Phase 2 Ready)

All portfolio placeholders, links, and project descriptions can be customized directly in:
👉 [`src/data/portfolioData.ts`](src/data/portfolioData.ts)

- Update your GitHub and LinkedIn profile handles.
- Replace `anmol.developer@example.com` with your active email.
- Link your real resume file (e.g. place `resume.pdf` into `/public` and set `resumeUrl: "/resume.pdf"`).
- Populate the detailed project descriptions and preview screenshots when ready.
