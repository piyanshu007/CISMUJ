# Contributing to IEEE CIS MUJ

Thanks for taking the time to contribute! Whether you're fixing a typo, adding an event poster, or building a new interactive visualizer, we're glad to have your input.

---

## 🚀 Quick Contribution Flow

1. **Fork & clone**
   ```bash
   git clone https://github.com/your-username/CISMUJ.git
   cd CISMUJ
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes & test**
   Make sure things don't break:
   ```bash
   npm install
   npm run dev
   npm test             # make sure Vitest tests pass
   npx tsc --noEmit     # check for any TypeScript errors
   ```

3. **Commit your work**
   Keep commit messages descriptive and clear. We loosely follow Conventional Commits:
   - `feat: add new robotics rover telemetry tab`
   - `fix: adjust 3D cylinder touch drag threshold for mobile`
   - `style: refine DarkVeil blue hue shift`
   - `docs: fix typo in README setup instructions`

4. **Submit a Pull Request**
   Push to your fork and open a PR against `main`. Give a brief summary of what changed and test steps so the maintainers can review and merge quickly!

---

## 💡 Tips & Guidelines

- **Keep components modular**: If a component file starts growing past 300 lines, consider breaking out sub-elements (like cards or filter buttons) into smaller files.
- **Test responsive views**: Always test on both mobile (375px) and wide desktop (1440px+) breakpoints in browser dev tools.
- **Questions?** Feel free to reach out to the technical team at `cis.muj@ieee.org` or ping us on Instagram `@ieee.cismuj`.
