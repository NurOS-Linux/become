# Become - Redirect Page

> **Language / Язык / Тіл:** [English](README.md) | [Русский](README_ru.md) | [Қазақша](README_kk.md)

A React application for redirecting users to a form.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

Built files will be in the `dist/` folder.

## Type Checking

```bash
npm run typecheck
```

## Deployment

After building, copy the contents of `dist/` to your web server or use GitHub Pages.

### GitHub Pages

1. Build the project: `npm run build`
2. Copy `dist/` contents to the repository root or set up GitHub Actions for automatic deployment

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3

## Features

- Automatic redirect after 3 seconds
- Visual countdown timer
- Fallback button for manual redirect
- Responsive design
- No redirect loops

## License

This project is licensed under [AGPL-3.0](LICENSE).
