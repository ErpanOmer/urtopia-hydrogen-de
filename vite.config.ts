import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import { hydrogen } from '@shopify/hydrogen/vite';
import { installGlobals } from '@remix-run/node';
import { oxygen } from '@shopify/mini-oxygen/vite';
import { paraglide } from '@inlang/paraglide-vite';
import { vitePlugin as remix } from '@remix-run/dev';

installGlobals();

export default defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    paraglide({
      project: "./i18n.inlang", //Path to your inlang project 
      outdir: "./paraglide", //Where you want the generated files to be placed
    }),
  ],
  build: {
    // Allow a strict Content-Security-Policy
    // withtout inlining assets as base64:
    assetsInlineLimit: 0,
  },
  ssr: {
    optimizeDeps: {
      /**
       * Include dependencies here if they throw CJS<>ESM errors.
       * For example, for the following error:
       *
       * > ReferenceError: module is not defined
       * >   at /Users/.../node_modules/example-dep/index.js:1:1
       *
       * Include 'example-dep' in the array below.
       * @see https://vitejs.dev/config/dep-optimization-options
       */
      include: [],
    },
  },
  resolve: {
    alias: {
      '@paraglide': path.resolve(__dirname, './paraglide')
    }
  }
});
