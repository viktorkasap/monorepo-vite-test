import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  },
}));
