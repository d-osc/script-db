import { build } from 'esbuild';
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIR = join(__dirname, 'src');
const PUBLIC_DIR = join(__dirname, 'public');
const DIST_DIR = join(__dirname, 'dist');

// Create dist directory
mkdirSync(DIST_DIR, { recursive: true });

// Copy public files to dist
const copyDir = (src, dest) => {
  mkdirSync(dest, { recursive: true });
  const entries = readdirSync(src);

  for (const entry of entries) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);

    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
};

copyDir(PUBLIC_DIR, DIST_DIR);

// Build all TypeScript files with esbuild (transpile only, no bundling)
// We don't bundle because elit is loaded from CDN via importmap
await build({
  entryPoints: [
    join(SRC_DIR, 'main.ts'),
    join(SRC_DIR, 'appState.ts'),
    join(SRC_DIR, 'router.ts'),
    join(SRC_DIR, 'styleNames.ts'),
    join(SRC_DIR, 'styles.ts'),
    join(SRC_DIR, 'components', 'Header.ts'),
    join(SRC_DIR, 'components', 'Footer.ts'),
    join(SRC_DIR, 'pages', 'HomePage.ts'),
    join(SRC_DIR, 'pages', 'InstallationPage.ts'),
    join(SRC_DIR, 'pages', 'QuickStartPage.ts'),
    join(SRC_DIR, 'pages', 'DocsPage.ts'),
    join(SRC_DIR, 'pages', 'UsagePage.ts'),
    join(SRC_DIR, 'pages', 'ScriptsPage.ts')
  ],
  bundle: false,
  format: 'esm',
  outdir: join(DIST_DIR, 'src'),
  outbase: SRC_DIR,
  platform: 'browser',
  target: 'es2020',
  loader: {
    '.ts': 'ts'
  }
});

console.log('Build completed successfully!');
