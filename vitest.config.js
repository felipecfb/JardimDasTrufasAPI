import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      "@modules": path.resolve(__dirname, './src/modules'),
      "@database": path.resolve(__dirname, './src/database'),
      "@shared": path.resolve(__dirname, './src/shared'),
    },
  },
});
