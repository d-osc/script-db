import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  dev: {
    port: 3000,
    host: 'localhost',
    root: __dirname,
    index: './public/index.html',
    basePath: '/script-db',
    open: true,
    logging: true,
  },
  build: [
    {
      entry: resolve(__dirname, 'src/main.ts'),
      outDir: resolve(__dirname, 'dist'),
      outFile: 'main.js',
      minify: true,
      sourcemap: false,
      format: 'esm',
      target: 'es2020',
      platform: 'browser',
      basePath: '/script-db',
      treeshake: true,
      logging: true,
      copy: [
        {
          from: './public/index.html',
          to: './index.html',
          transform: (content, config) => {
            // Replace script src
            let html = content.replaceAll('src="src/main.ts"', 'src="main.js"');

            // Inject base tag if basePath is configured
            if (config.basePath) {
              const baseTag = `<base href="${config.basePath}/">`;
              html = html.replaceAll(
                '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
                `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n  ${baseTag}`
              );
            }

            return html;
          }
        },
        {
          from: 'favicon.svg',
          to: 'favicon.svg'
        },
        {
          from: './public/googleb820e1884218aee0.html',
          to: './googleb820e1884218aee0.html'
        }
      ]
    }
  ],
  preview: {
    port: 3001,
    host: 'localhost',
    root: resolve(__dirname, 'dist'),
    index: './index.html',
    basePath: '/script-db',
    open: true,
    logging: true,
  }
};
