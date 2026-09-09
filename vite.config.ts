import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Vite résout un chemin commençant par "/" depuis la racine du projet.
      "@": "/src",
    },
  },
});
