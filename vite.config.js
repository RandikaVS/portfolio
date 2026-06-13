import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you deploy to GitHub Pages under a repo subpath, set this to '/<repo-name>/'.
  // For a custom domain or root deploy, keep it as '/'.
  base: '/',
});