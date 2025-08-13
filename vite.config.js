/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,            // So you can use 'test', 'expect' without imports
    environment: 'jsdom',     // Simulates browser environment
    setupFiles: './src/setupTests.js', // Setup file path for jest-dom etc.
    coverage: {
      reporter: ['text', 'json', 'html'],  // Optional: coverage reports
    },
  },
});