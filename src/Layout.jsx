import { destinationGroups, destinationsPath } from "./destination-links.js";

const primaryLinks = [
  { name: "Safari", path: "/destinations/safari.html" },
  { name: "Coast", path: "/destinations/coast.html" },
  { name: "Experiences", path: "/experiences.html" },
  { name: "About Us", path: "/destinations/our-approach.html" },
  { name: "Contact Us", path: "/contact.html" },
];

function SiteHeader({ pagePath }) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href={pagePath === "/index.html" ? "#top" : "/index.html#top"} aria-label="Voyageon Tours home">
          <span className="brand-mark"><img src="/assets/voyageon-logo.jpg" alt="" width="500" height="500" /></span>
          <span>Voyageon Tours</span>
        </a>
        <button className="menu-toggle" type="button" aria-controls="primary-nav" aria-expanded="false" hidden>
          <span className="menu-toggle-icon" aria-hidden="true"></span>
          <span>Menu</span>
        </button>
        <nav id="primary-nav" aria-label="Main navigation">
          <div className="destination-nav">
            <a className="primary-link" href={destinationsPath} aria-current={pagePath === destinationsPath ? "page" : undefined}>Destinations</a>
            <details className="destination-menu">
              <summary aria-label="Browse destinations"><span className="menu-chevron" aria-hidden="true"></span></summary>
              <div className="destination-options">
                {destinationGroups.map(({ id, name, path = destinationsPath + "#" + id, places }) => (
                  <div className="destination-group" key={id}>
                    <a className="destination-group-title" href={path} aria-current={pagePath === path ? "page" : undefined}>
                      {name} <span aria-hidden="true">↗</span>
                    </a>
                    <ul>
                      {places.map(place => (
                        <li key={place.path}>
                          <a className="destination-option" href={place.path} aria-current={pagePath === place.path ? "page" : undefined}>
                            {place.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          </div>
          {primaryLinks.map(({ name, path }) => (
            <a className="primary-link" key={path} href={path} aria-current={pagePath === path ? "page" : undefined}>{name}</a>
          ))}
          <a className="button header-cta" href={pagePath === "/index.html" ? "#journeys" : "/index.html#journeys"}>
            Find your trip <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter({ pagePath }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer" data-reveal="">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="/index.html">
              <span className="brand-mark"><img src="/assets/voyageon-logo.jpg" alt="" width="500" height="500" /></span>
              <span>Voyageon Tours</span>
            </a>
            <p>Wildlife, coast and culture across Kenya.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer destinations">
            <h2>Destinations</h2>
            <a href={destinationsPath}>All destinations</a>
            {destinationGroups.map(({ id, name, path = destinationsPath + "#" + id }) => <a key={id} href={path}>{name}</a>)}
          </nav>
          <nav className="footer-nav" aria-label="About Voyageon Tours">
            <h2>Voyageon Tours</h2>
            <a href="/destinations/our-approach.html" aria-current={pagePath === "/destinations/our-approach.html" ? "page" : undefined}>About Us</a>
            <a className="footer-social" href="https://www.instagram.com/voyageonstours/#">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="/privacy-policy.html" aria-current={pagePath === "/privacy-policy.html" ? "page" : undefined}>Privacy Policy</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Voyageon Tours</span>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ pagePath, children }) {
  return (
    <>
      <svg className="brand-filter" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="light-lion-mark" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0 0 0 0 1
                                              0 0 0 0 .973
                                              0 0 0 0 .922
                                              -.49 -1.65 -.16 0 2.23"/>
          <feComposite in2="SourceGraphic" operator="in"/>
        </filter>
      </svg>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader pagePath={pagePath} />
      {children}
      <SiteFooter pagePath={pagePath} />
    </>
  );
}
