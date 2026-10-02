# Become

[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](LICENSE)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01.svg)](https://astro.build)

## About

Source code of [become.nuros.org](https://become.nuros.org), the recruitment page of the NurOS project. It lists open positions in the team and contains the application form.

## Dependencies

- Node.js 22.12 or newer
- npm

## Build

```bash
npm install
npm run build
```

The static site is written to `dist/`.

Other commands:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run preview` | Serve the contents of `dist/` |
| `npm run check` | Run type checking |

## Vacancies

The list of positions is stored in `src/data/vacancies.ts`. Positions are grouped by category. Numbering and counters on the page are calculated from this file.

## Application form

The form is hosted on [Tally](https://tally.so) and embedded on the `/apply` page. The form ID is set in `src/pages/apply.astro`.

## Deployment

The site is deployed to GitHub Pages. The files `CNAME` and `.nojekyll` are located in `public/` and are copied to `dist/` during the build.

## Acknowledgments

- [Astro](https://astro.build)
- [Material Design 3](https://m3.material.io)
- [Tally](https://tally.so)

## Links

- [NurOS website](https://nuros.org)
- [Astro documentation](https://docs.astro.build)

## License

[AGPL-3.0](LICENSE)
