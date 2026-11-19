import { destinationsPath } from "../destination-links.js";
import Photo from "./Photo.jsx";
import HomeHero from "./HomeHero.jsx";
import KenyanCulture from "./KenyanCulture.jsx";
import { MombasaOldTownPhoto, MombasaOldTownCredit } from "./MombasaOldTownPhoto.jsx";

function JourneyScene({ id, region, title, copy, photo, alt, href, action, credit }) {
  return (
    <article className="journey-scene" id={id} aria-labelledby={id + "-title"} data-reveal="">
      <img className="journey-scene-photo" src={photo} alt={alt} loading="lazy" decoding="async" />
      <div className="wrap journey-scene-content">
        <div className="journey-scene-copy">
          <p className="eyebrow">{region}</p>
          <h3 id={id + "-title"}>{title}</h3>
          <p>{copy}</p>
          <a className="button journey-scene-button" href={href}>{action} <span aria-hidden="true">↗</span></a>
          {credit}
        </div>
      </div>
    </article>
  );
}

function JourneyCard({ id, title, photo, copy, credit }) {
  return (
    <article className="journey-card" id={id} data-reveal="">
      {photo}
      <div className="journey-card-copy">
        <h3>{title}</h3>
        <p>{copy}</p>
        <a className="destination-link" href={"/destinations/" + id + ".html"}>Explore {title} <span aria-hidden="true">↗</span></a>
        {credit}
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main id="main">
      <HomeHero />

      <section className="journeys" id="journeys" aria-labelledby="journeys-title">
        <div className="wrap">
          <div className="section-heading" data-reveal="">
            <div>
              <p className="eyebrow">Destinations in Kenya</p>
              <h2 id="journeys-title">Find your kind of <em>out there.</em></h2>
            </div>
            <p>
              Follow wildlife across the savanna, spend a morning on safari just outside Nairobi, or make your way to the Indian Ocean.
              <a className="destination-link" href={destinationsPath}>Browse all destinations <span aria-hidden="true">↗</span></a>
            </p>
          </div>
        </div>

        <JourneyScene
          id="maasai-mara"
          region="Southwestern Kenya · Safari"
          title="Maasai Mara"
          copy="Set out at first light for the open plains and the bends of the Mara River."
          photo="/assets/mara-zebras-poster.jpg"
          alt="Zebras grazing across the open Maasai Mara grasslands"
          href="/destinations/maasai-mara.html"
          action="Explore Maasai Mara"
        />

        <div className="wrap journey-cards">
          <JourneyCard
            id="amboseli"
            title="Amboseli"
            photo={<Photo src="/photos/Amboseli%201.jpg" alt="An elephant on a dirt road beneath Kilimanjaro" loading="lazy" />}
            copy="Watch elephants move between wetlands and dusty plains beneath Kilimanjaro."
          />
          <JourneyCard
            id="nairobi-national-park"
            title="Nairobi National Park"
            photo={<Photo className="nairobi-skyline" src="/photos/commons/nairobi-zebra-skyline.jpg" alt="A zebra on the plains with the Nairobi skyline behind it" loading="lazy" />}
            copy="Step out of the city for a morning game drive across open grassland."
            credit={
              <small className="photo-credit">
                Photo by <a href="https://commons.wikimedia.org/wiki/File:Nairobi_National_Park_(August_2025),_Zebra_and_city_skyline.jpg">Addshore</a> ·{" "}
                <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · Resized and cropped for display
              </small>
            }
          />
        </div>

        <JourneyScene
          id="kenyan-coast"
          region="Kenya · Indian Ocean"
          title="The Kenyan coast"
          copy="Follow the shore from the carved balconies of Mombasa to the quiet waters of Kilifi Creek."
          photo="/photos/commons/watamu-coast.jpg"
          alt="Turquoise water and a tree-covered rocky islet off Watamu Beach"
          href="/destinations/coast.html"
          action="Explore the coast"
          credit={
            <small className="photo-credit">
              Photo by <a href="https://commons.wikimedia.org/wiki/File:Watamu_beach.jpg">N Beenay</a> ·{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · Cropped for display
            </small>
          }
        />

        <div className="wrap journey-cards">
          <JourneyCard
            id="mombasa"
            title="Mombasa"
            photo={<MombasaOldTownPhoto />}
            copy="Walk the lanes of Old Town, visit Fort Jesus and make time for a Swahili meal."
            credit={<MombasaOldTownCredit />}
          />
          <JourneyCard
            id="kilifi"
            title="Kilifi"
            photo={<Photo src="/photos/Kilifi1.jpg" alt="Sailboats on Kilifi Creek beside a palm-lined shore" loading="lazy" />}
            copy="Take a sunset sail on the creek, spend an afternoon on Bofa Beach or visit the Mnarani ruins."
          />
        </div>
      </section>

      <KenyanCulture />

      <section className="approach" id="approach" aria-labelledby="approach-title">
        <div className="wrap approach-inner" data-reveal="">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 id="approach-title">Leave room<br />for the <em>unexpected.</em></h2>
          </div>
          <div className="approach-copy">
            <p>Decide what you’d happily get up early for and what you’d like to linger over. A few well-chosen stops leave time for both.</p>
            <a className="button button-primary" href="#journeys">Pick a starting point <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
