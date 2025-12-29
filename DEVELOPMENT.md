# Development Guide

## Using Elit 3.0.6

This project uses **Elit 3.0.6** as the reactive UI framework with full build tooling support.

### Development Workflow

#### 1. Start Development Server

```bash
npm run dev
```

This starts the **Elit dev server** with:
- ⚡ Hot Module Replacement (HMR)
- 🔄 Auto-reload on file changes
- 📂 Serves from `public/` directory
- 🌐 Available at http://localhost:3000

#### 2. Build for Production

```bash
npm run build
```

The build process:
1. Runs custom **[build.js](build.js)** script
2. Uses **esbuild** to bundle application code from [src/main.js](src/main.js)
3. Marks `elit` as **external** (loaded via CDN importmap)
4. Minifies JavaScript
5. Copies static assets (styles, scripts)
6. Generates index.html with proper paths for GitHub Pages
7. Outputs to `dist/` directory

**Note:** We use a custom build script instead of `elit build` because Elit's built-in bundler tries to include Node.js modules, which causes errors in browser builds.

#### 3. Preview Production Build

```bash
npm run preview
```

Uses **`elit preview`** command to serve the production build:
- 📂 Serves from `dist/` directory
- 🌐 Available at http://localhost:4173/script-db/
- 🔧 Configured via `elit.config.js` preview section

### Architecture

#### Elit Integration

Elit is used via **import maps** for optimal loading:

```html
<script type="importmap">
{
  "imports": {
    "elit": "https://cdn.jsdelivr.net/npm/elit@3.0.6/+esm"
  }
}
</script>
```

This allows:
- ✅ Application code to be bundled
- ✅ Elit loaded from CDN (cached across sites)
- ✅ Smaller bundle size
- ✅ Faster initial load

#### File Structure

```
src/
├── main.js              # App entry point - imports Elit
├── router.js            # Router configuration
├── components/
│   ├── Header.js        # Header component (uses el, state)
│   └── Footer.js        # Footer component
└── pages/
    ├── HomePage.js      # All pages use Elit's el() function
    ├── InstallationPage.js
    ├── QuickStartPage.js
    ├── DocsPage.js
    ├── UsagePage.js
    └── ScriptsPage.js
```

### Creating Components with Elit

#### Basic Component

```javascript
import { el } from 'elit';

export const MyComponent = () => {
  return el('div', { class: 'my-component' },
    el('h1', {}, 'Hello World'),
    el('p', {}, 'This is a component')
  );
};
```

#### Component with State

```javascript
import { el, state } from 'elit';

export const Counter = () => {
  const count = state(0);

  return el('div', {},
    el('p', {}, () => `Count: ${count.value}`),
    el('button', {
      onclick: () => count.value++
    }, 'Increment')
  );
};
```

#### Component with Event Handlers

```javascript
import { el } from 'elit';

export const Button = (text, onClick) => {
  return el('button', {
    class: 'btn',
    onclick: (e) => {
      e.preventDefault();
      onClick();
    }
  }, text);
};
```

### Routing with Elit

The app uses client-side routing:

```javascript
// In router.js
import { HomePage } from './pages/HomePage.js';
import { DocsPage } from './pages/DocsPage.js';

export const router = {
  'home': HomePage,
  'docs': DocsPage
  // ...
};

// In main.js
import { state } from 'elit';

export const appState = state({
  currentPage: 'home'
});

// Render current page
() => router[appState.currentPage]?.() || router.home()
```

### State Management

Elit provides reactive state out of the box:

```javascript
import { state } from 'elit';

// Create state
export const appState = state({
  currentPage: 'home',
  user: null,
  theme: 'light'
});

// Use in components
() => `Current page: ${appState.currentPage}`

// Update state
appState.currentPage = 'docs';
```

### Styling

CSS is loaded globally from [public/styles.css](public/styles.css).

Elit also supports CSS-in-JS if needed:

```javascript
import { el, css } from 'elit';

const styles = css`
  .my-class {
    color: blue;
  }
`;

el('div', { class: styles.myClass }, 'Styled content');
```

### Build Configuration

#### elit.config.js

```javascript
export default {
  dev: {
    port: 3000,
    root: 'public',
    open: true
  },
  build: [
    {
      entry: 'src/main.js',
      outDir: 'dist',
      outFile: 'main.js',
      format: 'esm',
      minify: true,
      platform: 'browser',
      external: []
    }
  ],
  preview: {
    port: 4173,
    root: 'dist',
    basePath: '/script-db'
  }
};
```

#### build.js

Custom build script that:
1. Uses esbuild to bundle application code
2. Marks Elit as external
3. Copies static assets
4. Generates index.html with importmap

### Deployment

GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):

```yaml
- name: Build website
  run: npm run build

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./dist
```

### Tips

1. **Use Elit's reactive state** instead of manual DOM manipulation
2. **Components are functions** that return Elit elements
3. **Event handlers** are passed as props with `onclick`, `onchange`, etc.
4. **Reactive rendering** uses arrow functions: `() => state.value`
5. **Keep components pure** - no side effects in render functions

### Resources

- [Elit npm package](https://www.npmjs.com/package/elit)
- [Elit Documentation](https://d-osc.github.io/elit/)
- [esbuild Documentation](https://esbuild.github.io/)

## Troubleshooting

### Dev server not starting

```bash
# Check if port 3000 is in use
netstat -ano | findstr :3000  # Windows
lsof -i :3000                  # Mac/Linux

# Use different port
npm run dev -- --port 3001
```

### Build errors

```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### HMR not working

1. Check browser console for errors
2. Ensure files are saved in `src/` or `public/`
3. Try refreshing the page
