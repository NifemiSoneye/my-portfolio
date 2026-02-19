import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split vendor code (React, framer-motion, etc.) into a separate chunk
    // so your app code and libraries are cached independently by the browser.
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          framer: ["framer-motion"],
        },
      },
    },
    // Warn if any single chunk exceeds 400kb
    chunkSizeWarningLimit: 400,
    // Minify with esbuild (default) — already fast, just making it explicit
    minify: "esbuild",
    // Generate source maps for production debugging (optional — remove if you
    // don't want your source visible in DevTools)
    sourcemap: false,
  },
});
