# Contributing to IEEE CIS MUJ Platform

Thank you for your interest in contributing to the **IEEE CIS MUJ** technical platform! This document outlines our development workflows, coding standards, and pull request guidelines.

---

## 🛠️ Code of Conduct

We are committed to providing a welcoming, inclusive, and harassment-free environment for all chapter members, student researchers, and external contributors. Please maintain professional and constructive communication at all times.

---

## 🌿 Branching Strategy

We follow a structured branch naming convention:

- `feat/<feature-name>`: For new pages, UI sections, interactive WebGL shaders, or data additions.
- `fix/<bug-name>`: For bug fixes, responsive layout adjustments, or typo corrections.
- `refactor/<module>`: For component decomposition, performance optimization, or cleanup.
- `docs/<topic>`: For documentation, README updates, or inline comments.
- `test/<test-suite>`: For new unit, component, or end-to-end tests.

---

## 💻 Development Workflow

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/CISMUJ.git
   cd CISMUJ
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feat/quantum-annealing-visualizer
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Develop Locally**
   ```bash
   npm run dev
   ```

5. **Run Verification Suite**
   Ensure all checks pass before committing:
   ```bash
   npx tsc --noEmit     # TypeScript type safety check (0 errors)
   npm test             # Vitest test suite execution
   npm run build        # Production build verification
   ```

---

## 📝 Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat: add interactive neural network topology graph`
- `fix: resolve mobile scroll intent clash on 3D photo carousel`
- `style: tune DarkVeil shader palette for white-blue theme`
- `refactor: split ExecutiveTeamGrid into modular subcomponents`
- `test: add unit tests for SectionHeader and data validators`
- `docs: update setup guide and architecture directory tree`

---

## 🚀 Submitting a Pull Request

1. Push your branch to GitHub (`git push origin feat/your-feature`).
2. Open a Pull Request targeting the `main` branch.
3. Fill out the provided [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md).
4. Ensure CI/CD GitHub Actions checks pass.
5. Request review from core chapter maintainers.
