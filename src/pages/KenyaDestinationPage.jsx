import { destinationsPath } from "../destination-links.js";
import { guidePhotos } from "./kenya-guide-photos.js";
import { TripGuide, TripIntro } from "./TripSections.jsx";

export { guides } from "./kenya-guides.js";

export default function KenyaDestinationPage({ content }) {
  const { slug, title, region, description, sections, sources } = content;
  const photo = guidePhotos[slug];

  return (
    <main id="main">
      <TripIntro
        titleId="destination-title"
        title={title}
        eyebrow={region}
        photo={photo.file}
        alt={photo.alt}
        description={description}
        backHref={destinationsPath}
        credit={
          <small className="photo-credit">
            Photo by <a href={photo.source}>{photo.artist}</a> ·{" "}
            <a href={photo.licenseUrl}>{photo.license}</a> · Cropped for display
          </small>
        }
      />
      <TripGuide titleId="guide-title">
        <h2 id="guide-title">What to see and do</h2>
        <div className="guide-grid">
          {sections.map(([heading, copy]) => (
            <section key={heading}>
              <h3>{heading}</h3>
              <p>{copy}</p>
            </section>
          ))}
        </div>
        <p className="destination-source">
          {sources.map(([label, href], index) => (
            <span key={href}>{index > 0 && " · "}<a href={href}>{label}</a></span>
          ))}
        </p>
      </TripGuide>
      <div className="wrap destination-next" data-reveal="">
        <a className="destination-link" href={destinationsPath}><span aria-hidden="true">←</span> All destinations</a>
        <a className="button button-primary" href="/contact.html">Plan this trip <span aria-hidden="true">↗</span></a>
      </div>
    </main>
  );
}
