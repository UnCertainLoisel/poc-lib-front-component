import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/components/main.ts",
      name: 'pocLibFrontComponentsTs',
      formats: ["es", "cjs", "umd"],
      fileName: format => `poc-lib-front-components.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: resolve(__dirname, "src/components/index.ts")
      },
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'main.css') return 'poc-lib-front-components.css';
          return assetInfo.name;
        },
        exports: "named",
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})

// /* eslint-disable @typescript-eslint/naming-convention */
// import { fileURLToPath, URL } from 'url';

// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//         @import '@/styles/variables';
//         `,
//       },
//     },
//   },
//   define: {
//     __VUE_I18N_FULL_INSTALL__: true,
//     __VUE_I18N_LEGACY_API__: false,
//     __INTLIFY_PROD_DEVTOOLS__: false,
//   },
//   server: {
//     port: 4000,
//   },
// });
