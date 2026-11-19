import { useEffect } from "react";
import Layout from "./Layout.jsx";
import { destinations, destinationsPath } from "./destination-links.js";
import { startSiteEffects } from "./site-effects.js";

const placeSlugs = new Set(["maasai-mara", "amboseli", "nairobi-national-park", "mombasa", "kilifi"]);
const collectionSlugs = new Set(["destinations", "safari", "coast", "experiences", "our-approach", "contact"]);

export async function loadPage(pagePath) {
  const slug = pagePath === destinationsPath ? "destinations" : pagePath.split("/").at(-1).replace(/\.html$/, "");

  if (placeSlugs.has(slug)) {
    const { default: Page, places } = await import("./pages/DestinationPage.jsx");
    return { Page, content: places[slug] };
  }
  if (destinations.some(place => place.path === pagePath)) {
    const { default: Page, guides } = await import("./pages/KenyaDestinationPage.jsx");
    return { Page, content: guides[slug] };
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
  useEffect(() => {
    window.dispatchEvent(new Event("voyageon:ready"));
  }, []);

  return (
    <Layout pagePath={pagePath}>
      <Page content={content} />
    </Layout>
  );
}
