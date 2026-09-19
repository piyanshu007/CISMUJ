# IEEE CIS MUJ — Student Branch Chapter Website

Hey there! 👋 Welcome to the official repository for the **IEEE Computational Intelligence Society (CIS)** Student Branch Chapter at **Manipal University Jaipur** (Chapter #6248).

We built this platform to showcase what our community does throughout the year — from our 36-hour flagship hackathons (*WebForge*) and deep learning masterclasses (*Oneiros*) to autonomous robotics rovers and our annual technical publication, *The CIS Chronicle*.

---

## ⚡ What's Under the Hood

We wanted the site to feel fast, responsive, and visually engaging without drowning in heavy 3D asset bundles. Here's a quick look at the tech we picked and why:

- **Next.js 14/15 (App Router)**: Fast server-side rendering, clean file-based routing, and built-in image optimizations.
- **TypeScript**: Strict type checks across all our datasets (events, team registry, project showcases).
- **Tailwind CSS**: Utility-first styling with custom glassmorphism layers and responsive typography.
- **WebGL via `ogl`**: Lightweight GPU fragment shaders (`DarkVeil` and `GradientWaves`) for smooth fluid ribbon effects that don't choke lower-end laptops.
- **Framer Motion**: Gesture handling for our 3D cylindrical carousels, spring physics, and mobile touch intent tracking.
- **Vitest & Testing Library**: Fast unit testing for data validation and component sanity checks.

---

## 💻 Running It Locally

Getting the dev server up and running on your machine is straightforward:

```bash
# 1. Grab the code
git clone https://github.com/piyanshu007/CISMUJ.git
cd CISMUJ

# 2. Install dependencies
npm install

# 3. Fire up the local dev server
npm run dev
```

Head over to `http://localhost:3000` to see it live. Any edits you make in `src/` will hot-reload automatically.

### Handy Scripts

```bash
npm run dev        # Starts Next.js dev server on port 3000
npm run build      # Creates optimized production build
npm test           # Runs the Vitest test suite
npm run lint       # Runs ESLint checks across the codebase
```

> **Note on WebGL & Shaders**: If you're developing on an older machine or low-power VM without GPU acceleration, you might see WebGL fallback to software rendering. We've capped the `dpr` at `2` in `ogl` renderers to keep frame rates smooth on high-density displays.

---

## 📂 Quick Project Tour

If you're looking to tweak something specific, here's where things live:

- `src/app/` — All route pages (`/`, `/about`, `/events`, `/gallery`, `/projects`, `/team`, `/newsletter`).
- `src/components/animated/` — Custom WebGL GLSL shaders like `DarkVeil.tsx` and `GradientWaves.tsx`.
- `src/components/sections/` — Core section components (photo mosaic cylinder, hero banner, team grid, fan deck).
- `src/components/layout/` — Global navigation bar, full-screen glass sidebar menu, and footer.
- `src/data/` — Static data stores for team members, event archives, and student projects. Edit `team.ts` or `events.ts` to add new entries!
- `public/` — Logos, team cutouts, event posters, and vector emblems.

---

## 🛠️ Roadmap & Known Quirks

A few things we're actively hacking on or keeping an eye on:

- [ ] Connect the newsletter section to a live PDF viewer embed.
- [ ] Add direct vTools event RSVP sync once IEEE API credentials are renewed.
- [ ] Optimize 3D cylindrical touch momentum on iOS Safari 17.

---

## 🤝 Contributing

Got an idea or spotted a bug? We'd love your help! Check out [CONTRIBUTING.md](CONTRIBUTING.md) for branch naming conventions, commit guidelines, and how to submit a PR.

---

## 📜 License & Contact

- **License**: Released under the [MIT License](LICENSE).
- **Chapter Email**: `cis.muj@ieee.org`
- **Instagram**: [@ieee.cismuj](https://www.instagram.com/ieee.cismuj/)
- **Campus**: Manipal University Jaipur, Dehmi Kalan, Rajasthan 303007
