import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pages } from "./scripts/pages.mjs";

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: "static",
    rollupOptions: { input: pages },
  },
});
