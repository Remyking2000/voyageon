import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import { pages } from "./scripts/pages.mjs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "voyageon-arrival",
      transformIndexHtml(html) {
        const arrival = readFileSync(new URL("./src/tide-arrival.html", import.meta.url), "utf8");
        return html.replace(/<body\b[^>]*>/i, tag => tag + arrival);
      },
    },
  ],
  build: {
    assetsDir: "static",
    rollupOptions: { input: pages },
  },
});
