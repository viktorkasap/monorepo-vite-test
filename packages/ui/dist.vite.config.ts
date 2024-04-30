import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const formats = { es: 'mjs', cjs: 'cjs' } as Record<string, string>;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      name: 'ui',
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${formats[format] || format}`,
    },
    rollupOptions: {},
  },
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  },
}));
