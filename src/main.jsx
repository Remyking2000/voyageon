import { createRoot, hydrateRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import App, { loadPage } from "./App.jsx";
import "../styles.css";

async function start() {
  const root = document.getElementById("root");
  const pagePath = root.dataset.page;
  const page = await loadPage(pagePath);
  const app = <App pagePath={pagePath} {...page} />;

  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
  } else {
    flushSync(() => createRoot(root).render(app));
    const fragment = window.location.hash.slice(1);
    if (fragment) document.getElementById(fragment)?.scrollIntoView();
  }
}

start();
