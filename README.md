# ScriptDB

A lightweight script database management tool.

## Features

- 📦 Easy Installation
- 🚀 Fast & Lightweight
- 🔧 Cross-Platform (Windows, Linux, macOS)
- 📝 Script Management
- 🔒 Secure

## Quick Start

### Windows

```powershell
irm https://yourusername.github.io/script-db/scripts/install.ps1 | iex
```

### Linux/macOS

```bash
curl -fsSL https://yourusername.github.io/script-db/scripts/install.sh | bash
```

## Documentation

Visit our [documentation website](https://yourusername.github.io/script-db/) for complete guides and API reference.

## Installation Scripts

This repository contains installation and uninstallation scripts:

- `scripts/install.ps1` - Windows PowerShell installer
- `scripts/install.sh` - Linux/macOS Bash installer
- `scripts/uninstall.ps1` - Windows uninstaller
- `scripts/uninstall.sh` - Linux/macOS uninstaller

## Website Development

The documentation website is built with [Elit@3.0.6](https://www.npmjs.com/package/elit) - a lightweight reactive UI framework - and deployed to GitHub Pages.

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Technology Stack

- **Framework**: Elit 3.0.6 (Reactive UI library)
- **Styling**: Elit CSS-in-JS (`elit/css`)
- **Development**: `elit dev` - Elit dev server with HMR
- **Build Tool**: esbuild (custom build script)
- **Preview**: `elit preview` - Preview production build
- **Module System**: ES Modules with importmap (Elit via CDN)
- **Deployment**: GitHub Pages
- **Architecture**: Single-page application (SPA) with client-side routing

### Project Structure

```
script-db/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
├── public/
│   └── index.html            # HTML template
├── src/
│   ├── main.js               # App entry point
│   ├── router.js             # Client-side router
│   ├── styles.js             # Elit CSS-in-JS styles
│   ├── components/
│   │   ├── Header.js         # Header component
│   │   └── Footer.js         # Footer component
│   └── pages/
│       ├── HomePage.js
│       ├── InstallationPage.js
│       ├── QuickStartPage.js
│       ├── DocsPage.js
│       ├── UsagePage.js
│       └── ScriptsPage.js
├── scripts/
│   ├── install.ps1           # Windows installer
│   ├── install.sh            # Unix installer
│   ├── uninstall.ps1         # Windows uninstaller
│   └── uninstall.sh          # Unix uninstaller
├── build-static.js           # Static site builder
├── elit.config.js            # Elit configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

### How It Works

1. **Development**: `npm run dev` → `elit dev` server with HMR
2. **Build**: `npm run build` → Custom esbuild script (marks elit as external)
3. **Preview**: `npm run preview` → `elit preview` server
4. **Deployment**: GitHub Actions automatically builds and deploys on push to main

### Build Process

The custom build script ([build.js](build.js)) uses **esbuild** to:
- ✅ Bundle all application code from [src/main.js](src/main.js)
- ✅ Minify JavaScript for production
- ✅ Mark `elit` as external (loaded from CDN via importmap)
- ✅ Copy static assets (styles, scripts)
- ✅ Generate index.html with proper paths for GitHub Pages

**Why custom build?** Elit's built-in `elit build` tries to bundle Node.js modules, so we use esbuild directly with `external: ['elit']` to load Elit from CDN.

### Features

- ✨ Reactive UI with Elit 3.0.6
- 🎨 **CSS-in-JS** with Elit styles (`css` from `elit`)
- 🔄 Client-side routing (no page reloads)
- 📦 Code bundling with esbuild
- 📱 Responsive design
- ⚡ Fast loading (Elit via CDN + bundled app code)
- 🔥 HMR in development mode
- 💅 Scoped styles, no CSS files needed

## License

MIT License - see LICENSE file for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

- [Documentation](https://yourusername.github.io/script-db/)
- [GitHub Issues](https://github.com/yourusername/script-db/issues)
