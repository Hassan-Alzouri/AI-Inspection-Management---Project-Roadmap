import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use a relative base so the same build works on GitHub Pages and Netlify.
  // Relative base ('./') ensures asset paths are resolved correctly when
  // the site is served from a subpath (GitHub Pages) or the root (Netlify).
  base: "./",
});
