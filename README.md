# IEEE Computational Intelligence Society — Manipal University Jaipur (IEEE CIS MUJ)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![WebGL / OGL](https://img.shields.io/badge/WebGL-OGL_Shaders-blueviolet?style=flat-square&logo=webgl)](https://github.com/oframe/ogl)
[![Vitest](https://img.shields.io/badge/Tested_with-Vitest-729B1B?style=flat-square&logo=vitest)](https://vitest.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Official production web platform for the **IEEE Computational Intelligence Society Student Branch Chapter at Manipal University Jaipur** (IEEE CIS MUJ — Chapter #6248).

---

## 🔬 Chapter Overview

The **IEEE Computational Intelligence Society (CIS)** is a global technical society focused on the theory, design, application, and development of biologically and linguistically motivated computational paradigms. At **Manipal University Jaipur**, our student chapter actively conducts hackathons, research symposiums, technical masterclasses, robotics expos, and publication broadsheets.

### Core Technical Pillars:
- **Neural Networks & Deep Learning**: Foundation models, transformer fine-tuning, computer vision, and on-device inference.
- **Evolutionary Computation**: Genetic algorithms, swarm intelligence, and autonomous robotics navigation.
- **Fuzzy Systems**: Approximate reasoning, neural-fuzzy hybrid systems, and uncertainty modeling.
- **Embedded & Hardware AI**: Edge-AI robotics rovers, ROS2 autonomy, and sensory perception.

---

## 🏗️ Architecture & Technology Stack

The platform is engineered with modern web standards, server-side rendering, and hardware-accelerated graphics:

| Layer | Technologies | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | Server Components, routing, SEO optimization, and static generation |
| **Language** | TypeScript (Strict Mode) | End-to-end type safety across datasets and components |
| **Styling** | Tailwind CSS & CSS Modules | Responsive design, glassmorphism tokens, and CSS variables |
| **Graphics** | WebGL via `ogl` & GLSL | Real-time procedural shaders (`DarkVeil`, `GradientWaves`) |
| **Animations** | Framer Motion & RAF loops | Smooth 3D carousels, spring physics, and viewport triggers |
| **Icons** | Lucide React | Clean, scalable UI iconography |
| **Testing** | Vitest & React Testing Library | Unit tests, component rendering, and regression suites |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher (Node 20 LTS recommended)
- **Package Manager**: `npm` (v9+) or `pnpm` / `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/piyanshu007/CISMUJ.git
   cd CISMUJ
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run unit tests:**
   ```bash
   npm test
   ```

5. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Repository Structure

```text
├── public/                     # Static assets (emblems, events, gallery, team photos)
│   ├── events/                 # Hackathon and workshop banners
│   ├── gallery/                # Chapter milestone photography
│   ├── logos/                  # IEEE emblem, Genesis, and chapter marks
│   └── team/2026/              # Official executive director portraits
├── src/
│   ├── app/                    # Next.js App Router routes & layouts
│   │   ├── about/              # Chapter mission, four paradigms & lab pillars
│   │   ├── events/             # Hackathons, fan decks, and workshop archives
│   │   ├── gallery/            # 3D interactive photo cylinder & DarkVeil hero
│   │   ├── newsletter/         # The CIS Chronicle digital broadsheet reader
│   │   ├── projects/           # Member innovation showcase & robotics repos
│   │   ├── team/               # Executive committee & director registry
│   │   ├── globals.css         # Global Tailwind layers & custom utilities
│   │   └── layout.tsx          # Root HTML layout with JSON-LD schema
│   ├── components/
│   │   ├── 3d/                 # Interactive 3D Canvas emblems
│   │   ├── animated/           # WebGL GLSL shaders (DarkVeil, GradientWaves)
│   │   ├── computational/      # Synapse meshes & algorithmic visualizers
│   │   ├── layout/             # Global Navbar, Footer, and SidebarMenu
│   │   ├── sections/           # Modular page sections and hero components
│   │   └── ui/                 # Reusable UI primitives (SectionHeader, TiltCard, Badges)
│   ├── data/                   # Structured TypeScript data models (events, team, projects)
│   └── lib/                    # Shared utilities, class mergers, and formatters
├── .github/                    # CI/CD workflows and issue/PR templates
├── vitest.config.ts            # Unit testing configuration
└── tailwind.config.ts          # Design tokens and theme extensions
```

---

## 🤝 Contributing

We welcome contributions from chapter members, student researchers, and the open-source community!

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/quantum-visualizer`).
3. Commit your changes with meaningful messages following [Conventional Commits](https://www.conventionalcommits.org/).
4. Run `npm test` and `npx tsc --noEmit` to verify type safety and tests pass.
5. Open a Pull Request using our [PR Template](.github/PULL_REQUEST_TEMPLATE.md).

For detailed contribution guidelines, please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🏛️ IEEE Chapter Attribution

**IEEE Computational Intelligence Society Student Branch Chapter**  
*Manipal University Jaipur, Dehmi Kalan, Jaipur-Ajmer Expressway, Rajasthan, India — 303007*  
- **Email**: `cis.muj@ieee.org`  
- **Instagram**: [@ieee.cismuj](https://www.instagram.com/ieee.cismuj/)  
- **Global Parent Society**: [IEEE Computational Intelligence Society (cis.ieee.org)](https://cis.ieee.org/)
