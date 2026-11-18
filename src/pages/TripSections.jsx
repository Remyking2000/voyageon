export function TripIntro({ titleId, title, eyebrow, photo, alt, description, tagline, backHref, photoClass, credit, actionLabel }) {
  const guideId = titleId === "destination-title" ? "guide-title" : "collection-guide";

  return (
    <section className="hero trip-hero" aria-labelledby={titleId}>
      <img className={photoClass ? "hero-photo " + photoClass : "hero-photo"} src={photo} alt={alt} fetchPriority="high" />
      <div className="wrap hero-inner">
        <div className="hero-heading">
          <p className="eyebrow hero-label">{eyebrow}</p>
          <h1 id={titleId}>{title}</h1>
        </div>
        <div className="hero-bottom">
          <div className="trip-hero-links">
            <a className="button button-primary" href={"#" + guideId}>
              {actionLabel ?? (backHref ? "What to experience" : "Explore the guide")} <span aria-hidden="true">↓</span>
            </a>
            {backHref && <a className="destination-link" href={backHref}><span aria-hidden="true">←</span> All destinations</a>}
            {credit}
          </div>
          <div className="hero-intro">
            {tagline && <p className="destination-tagline">{tagline}</p>}
            <p className="hero-copy">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TripGuide({ titleId, children }) {
  return <section className="wrap destination-guide" aria-labelledby={titleId} data-reveal="">{children}</section>;
}

export function TripGallery({ children }) {
  return (
    <section className="destination-gallery" aria-labelledby="gallery-title">
      <div className="wrap gallery-inner" data-reveal="">
        <h2 id="gallery-title">In photographs</h2>
        <div className="gallery-grid">{children}</div>
      </div>
    </section>
  );
}
