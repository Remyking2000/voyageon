import { useEffect } from "react";
import Layout from "./Layout.jsx";
import { destinationsPath } from "./destination-links.js";
import { startSiteEffects } from "./site-effects.js";

const placeSlugs = new Set(["maasai-mara", "amboseli", "nairobi-national-park", "mombasa", "kilifi"]);
const collectionSlugs = new Set(["destinations", "safari", "coast", "experiences", "our-approach", "contact"]);

export async function loadPage(pagePath) {
  const slug = pagePath === destinationsPath ? "destinations" : pagePath.split("/").at(-1).replace(/\.html$/, "");

  if (placeSlugs.has(slug)) {
    const { default: Page, places } = await import("./pages/DestinationPage.jsx");
    return { Page, content: places[slug] };
  }
  if (collectionSlugs.has(slug)) {
    const { default: Page, collections } = await import("./pages/CollectionPage.jsx");
    return { Page, content: collections[slug] };
  }

  const { default: Page } = slug === "privacy-policy"
    ? await import("./pages/PrivacyPage.jsx")
    : await import("./pages/HomePage.jsx");
  return { Page };
}

export default function App({ pagePath, Page, content }) {
  useEffect(startSiteEffects, []);

  return (
    <Layout pagePath={pagePath}>
      <Page content={content} />
    </Layout>
  );
}
