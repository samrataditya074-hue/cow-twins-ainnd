# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- @vitejs/plugin-react uses Oxc
- @vitejs/plugin-react-swc uses SWC

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see documentation.

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

See the Oxlint rules documentation for the full list of rules and categories.

---

# Cow Twins AI (Research Proposal)

This repository contains the premium research‑proposal web app for the **AI Digital Twin for Cow Care India** project, built with React, Vite, Tailwind CSS, and Framer Motion. It demonstrates architecture diagrams, timeline visualizations, and interactive components for senior AI scientists and veterinary researchers.
