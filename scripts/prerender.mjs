import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import { pages } from "./pages.mjs";

const server = await createServer({
  server: { middlewareMode: true, watch: null, ws: false },
  appType: "custom",
});

try {
  const { default: App, loadPage } = await server.ssrLoadModule("/src/App.jsx");
  for (const page of pages) {
    const file = new URL("../dist/" + page, import.meta.url);
    const html = await readFile(file, "utf8");
    const pagePath = "/" + page;
    const rootStart = '<div id="root" data-page="' + pagePath + '">';
    const marker = rootStart + "</div>";
    if (!html.includes(marker)) throw new Error("Missing React root in " + page);
    const markup = renderToString(createElement(App, { pagePath, ...await loadPage(pagePath) }));
    await writeFile(file, html.replace(marker, () => rootStart + markup + "</div>"));
  }
} finally {
  await server.close();
}
