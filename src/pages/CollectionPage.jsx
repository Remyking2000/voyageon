import Photo from "./Photo.jsx";
import { destinationGroups, destinations, destinationsPath } from "../destination-links.js";
import { MombasaOldTownPhoto, MombasaOldTownCredit } from "./MombasaOldTownPhoto.jsx";
import { TripIntro, TripGuide } from "./TripSections.jsx";

function MoreDestinations({ title, slugs }) {
  const places = destinations.filter(({ slug }) => slugs.includes(slug));

  return (
    <div className="more-destinations">
      <h3>{title}</h3>
      <ul className="collection-links">
        {places.map(({ name, path }) => (
          <li key={path}><a className="destination-link" href={path}>{name} <span aria-hidden="true">↗</span></a></li>
        ))}
      </ul>
    </div>
  );
}

export const collections = {
  destinations: {
    intro: (
      <TripIntro
        titleId="collection-title"
        title="Destinations"
        eyebrow="Explore Kenya"
        photo="/assets/mara-storm.jpg"
        alt=""
        description="Explore Kenya from the Indian Ocean to Lake Victoria, the central highlands and the far north. Tell us where you’d like to go and we’ll help plan the route."
      />
    ),
    guide: (
      <TripGuide titleId="collection-guide">
        <h2 id="collection-guide">Where to go in Kenya</h2>
        <div className="collection-cards destination-directory">
          {destinationGroups.map(({ id, name, path, places }) => (
            <article className="collection-card" id={id} key={id}>
              <h3>{name}</h3>
              <ul className="collection-links">
                {places.map(place => (
                  <li key={place.path}><a className="destination-link" href={place.path}>{place.name} <span aria-hidden="true">↗</span></a></li>
                ))}
              </ul>
              {path && <a className="button button-primary" href={path}>Explore {name.toLowerCase()} <span aria-hidden="true">↗</span></a>}
            </article>
          ))}
        </div>
        <a className="button button-primary directory-contact" href="/contact.html">Plan a route with us <span aria-hidden="true">↗</span></a>
      </TripGuide>
    ),
  },
  experiences: {
    intro: (
      <TripIntro
        titleId="collection-title"
        title="Experiences"
        eyebrow="Things to do in Kenya"
        photo="/assets/mara-zebras-poster.jpg"
        alt="Zebras in the Maasai Mara"
        description="Start with what you want to do, from an early game drive or sunrise balloon flight to an evening on Kilifi Creek."
      />
    ),
    guide: (
      <TripGuide titleId="collection-guide">
        <h2 id="collection-guide">Ways to spend your days</h2>
        <div className="guide-grid">
          <div>
            <h3>Game drives</h3>
            <p>Look for elephants around Amboseli’s wetlands or watch for big cats on the open plains of the Maasai Mara. Nairobi National Park is an option for a shorter outing from the city.</p>
            <a className="destination-link" href="/destinations/safari.html">Explore Kenya safaris <span aria-hidden="true">↗</span></a>
          </div>
          <div>
            <h3>Hot-air balloon safaris</h3>
            <p>See the Maasai Mara from above at sunrise, when the low light brings out the shape of the plains and riverbanks.</p>
            <a className="destination-link" href="/destinations/maasai-mara.html">Explore the Maasai Mara <span aria-hidden="true">↗</span></a>
          </div>
          <div>
            <h3>Creek sails and beach days</h3>
            <p>Spend an afternoon on Bofa Beach or take a sunset sail on Kilifi Creek. Leave room in your plans to work around the tides.</p>
            <a className="destination-link" href="/destinations/kilifi.html">Explore Kilifi <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </TripGuide>
    ),
  },
  contact: {
    intro: (
      <TripIntro
        titleId="collection-title"
        title="Contact Us"
        eyebrow="Voyageon Tours"
        photo="/photos/Kilifi1.jpg"
        alt="Sailboats on Kilifi Creek beside a palm-lined shore"
        description="Have a trip in mind? Tell us where you’d like to go and when you plan to travel."
        actionLabel="Get in touch"
      />
    ),
    guide: (
      <TripGuide titleId="collection-guide">
        <h2 id="collection-guide">Message us on Instagram</h2>
        <p>Share your travel dates, group size, and any places or experiences you’d like to include.</p>
        <div className="collection-links">
          <a className="button button-primary" href="https://www.instagram.com/voyageonstours/#">Message Voyageon Tours <span aria-hidden="true">↗</span></a>
        </div>
      </TripGuide>
    ),
  },
  "coast": {
    intro: (
      <TripIntro
        titleId="collection-title"
        title="The Kenyan coast"
        eyebrow="Kenya’s Indian Ocean coast"
        photo="/photos/commons/watamu-coast.jpg"
        alt="Turquoise water and a tree-covered rocky islet off Watamu Beach, Kenya"
        credit={
          <small className="photo-credit">
            Photo by <a href="https://commons.wikimedia.org/wiki/File:Watamu_beach.jpg">N Beenay</a> ·{" "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · Cropped for display
          </small>
        }
        description="Follow Kenya’s Indian Ocean coast from Diani and Mombasa through Kilifi, Watamu and Malindi to Lamu’s Swahili Old Town."
      />
    ),
    guide: (
      <TripGuide titleId="collection-guide">
        <h2 id="collection-guide">Where to go on the coast</h2>
        <div className="collection-cards">
          <article className="collection-card">
            <MombasaOldTownPhoto />
            <h3>Mombasa</h3>
            <p>Explore Old Town on foot, visit Fort Jesus and leave time for Swahili food and the ocean.</p>
            <a className="destination-link" href="/destinations/mombasa.html">Explore Mombasa <span aria-hidden="true">↗</span></a>
            <MombasaOldTownCredit />
          </article>
          <article className="collection-card">
            <Photo src="/photos/Kilifi1.jpg" alt="Sailboats on Kilifi Creek beside a palm-lined shore" width="640" height="400" />
            <h3>Kilifi</h3>
            <p>Spend time on the creek, at the beach or among the baobabs at the Mnarani ruins.</p>
            <a className="destination-link" href="/destinations/kilifi.html">Explore Kilifi <span aria-hidden="true">↗</span></a>
          </article>
        </div>
        <MoreDestinations title="More of the Kenyan coast" slugs={["diani", "watamu-malindi", "lamu"]} />
      </TripGuide>
    ),
    plan: (
      <section className="approach" aria-labelledby="collection-plan">
        <div className="wrap approach-inner" data-reveal="">
          <h2 id="collection-plan">Make room for both stops</h2>
          <div className="approach-copy">
            <p>If you have time for Mombasa and Kilifi, give the city a morning for heritage and food, then leave a slower day for the creek and beach. Plan water activities around local conditions and the tide.</p>
            <a className="button button-primary" href={destinationsPath}>Browse all destinations <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    ),
  },
  "our-approach": {
    intro: (
      <TripIntro
        titleId="collection-title"
        title="About Us"
        eyebrow="Voyageon Tours"
        photo="/photos/Maasai%20mara%202.jpg"
        alt="Sunset over the Mara from a hillside camp"
        description="Start with the part of Kenya you most want to experience. Give it enough time, then decide which other stops fit the pace you want."
      />
    ),
    guide: (
      <TripGuide titleId="collection-guide">
        <h2 id="collection-guide">How to shape your trip</h2>
        <div className="guide-grid">
          <div>
            <h3>Start with a place</h3>
            <p>Choose the experience you’d travel for, whether that’s wild mornings in the Mara, wildlife against Nairobi’s skyline, or time beside Kilifi Creek.</p>
          </div>
          <div>
            <h3>Set a comfortable pace</h3>
            <p>Think about when you like to start your day and how much time you want between outings. Allow space in your plans for travel, meals, and rest.</p>
          </div>
          <div>
            <h3>Share what matters</h3>
            <p>When you get in touch, tell us your travel dates, group size, places you’re interested in, and any practical needs so we know where to begin.</p>
          </div>
        </div>
      </TripGuide>
    ),
    plan: (
      <section className="approach" id="contact" aria-labelledby="collection-plan">
        <div className="wrap approach-inner" data-reveal="">
          <h2 id="collection-plan">Contact Us</h2>
          <div className="approach-copy">
            <p>Tell us a little about the trip you want to take.</p>
            <a className="button button-primary" href="/contact.html">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    ),
  },
  "safari": {
    intro: (
      <TripIntro
        titleId="collection-title"
        title="Kenya safaris"
        eyebrow="Wildlife in Kenya"
        photo="/photos/maasai-mara1.jpg"
        alt="A lion standing in tall grass in the Maasai Mara"
        description="Start close to Nairobi or follow the wildlife farther afield, from the Maasai Mara and Amboseli to Tsavo, Lake Nakuru, Laikipia and Samburu."
      />
    ),
    guide: (
      <TripGuide titleId="collection-guide">
        <h2 id="collection-guide">Where to go on safari</h2>
        <div className="collection-cards">
          <article className="collection-card">
            <Photo src="/photos/maasai-mara1.jpg" alt="A male lion standing in tall grass" width="640" height="400" />
            <h3>Maasai Mara</h3>
            <p>Open plains, riverbanks, and long drives with time between outings at camp.</p>
            <a className="destination-link" href="/destinations/maasai-mara.html">Explore Maasai Mara <span aria-hidden="true">↗</span></a>
          </article>
          <article className="collection-card">
            <Photo src="/photos/Amboseli%201.jpg" alt="An elephant beside a track beneath Kilimanjaro" width="640" height="400" />
            <h3>Amboseli</h3>
            <p>Elephants, wetland birdlife, and views of Kilimanjaro when the sky clears.</p>
            <a className="destination-link" href="/destinations/amboseli.html">Explore Amboseli <span aria-hidden="true">↗</span></a>
          </article>
          <article className="collection-card">
            <Photo className="nairobi-skyline" src="/photos/commons/nairobi-zebra-skyline.jpg" alt="A zebra on the plains of Nairobi National Park with the city skyline behind it" width="1280" height="965" />
            <small className="photo-credit">Photo by <a href="https://commons.wikimedia.org/wiki/File:Nairobi_National_Park_(August_2025),_Zebra_and_city_skyline.jpg">Addshore</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · Resized and cropped for display</small>
            <h3>Nairobi National Park</h3>
            <p>A morning game drive close to the city, with the skyline visible from the plains.</p>
            <a className="destination-link" href="/destinations/nairobi-national-park.html">Explore Nairobi National Park <span aria-hidden="true">↗</span></a>
          </article>
        </div>
        <MoreDestinations title="More safari destinations" slugs={["tsavo", "nakuru", "nanyuki", "samburu"]} />
      </TripGuide>
    ),
    plan: (
      <section className="approach" aria-labelledby="collection-plan">
        <div className="wrap approach-inner" data-reveal="">
          <h2 id="collection-plan">Build the trip around your time</h2>
          <div className="approach-copy">
            <p>A morning in Nairobi fits into a city stay. If you have several days, choose a reserve to spend more time in so you can take drives at different times of day.</p>
            <a className="button button-primary" href={destinationsPath}>Browse all destinations <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    ),
  },
};

export default function CollectionPage({ content }) {
  return (
    <main id="main">
      {content.intro}
      {content.guide}
      {content.plan}
    </main>
  );
}
