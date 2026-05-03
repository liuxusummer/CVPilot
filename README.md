<div align="center">

# CVPilot

**A lightweight, beautiful resume builder with live A4 preview and one-click PDF export.**

[中文文档](./README.zh-CN.md)

<br />

<img src="./assets/cv_1.jpg" alt="Classic template" width="90%" />

<br /><br />

<img src="./assets/cv_2.jpg" alt="Modern template" width="90%" />

</div>

---

## ✨ Features

- **Two built-in templates** — Classic single-column & Modern two-column, switchable with one click
- **Live A4 preview** — WYSIWYG editing, pixel-aligned to a real A4 sheet
- **Smart PDF export** — Auto-fits content to a single A4 page by redistributing whitespace
- **Local-first** — All data stored in `localStorage`, nothing leaves your browser
- **Local photo upload** — Pick a file, embedded as base64, persisted with your resume
- **Section toggles** — Hide any section you don't need per resume
- **Zero sign-up, zero backend** — Static Next.js app, deploy anywhere

## 🧰 Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: React 19 · TypeScript 5 · Tailwind CSS 4
- **Tooling**: ESLint 9

## 🚀 Quick Start

```bash
# Install
npm install

# Develop
npm run dev       # http://localhost:3000

# Production build
npm run build
npm run start

# Lint
npm run lint
```

## 📁 Project Structure

```
app/              # Next.js App Router entry & API routes
features/         # Feature modules
  resume-builder/ # Top-level shell
  resume-editor/  # Form editors
  resume-preview/ # A4 preview & templates
components/ui/    # Reusable UI primitives
lib/              # Utilities, constants, storage, print
types/            # Shared type definitions
```

## 🖨️ Export to PDF

Click **Export PDF** in the top-right corner. CVPilot will:

1. Hide every non-resume element
2. Measure content height
3. Auto-stretch section spacing to fill the A4 page if there's blank space
4. Call the browser's print dialog — save as PDF

> Tip: In Chrome's print dialog, disable *Headers and footers* for a cleaner output.

## 🗺️ Roadmap

- [ ] AI-powered polishing (OpenAI / Claude / DeepSeek)
- [ ] More templates (minimal, sidebar-left, academic)
- [ ] Import from JSON / JSON Resume schema
- [ ] Multi-language resume support

## 🤝 Contributing

Issues and PRs are welcome! If you find CVPilot useful, please consider giving it a star.

## 📄 License

MIT © CVPilot contributors

