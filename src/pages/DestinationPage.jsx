import Photo from "./Photo.jsx";
import { destinationsPath } from "../destination-links.js";
import { MombasaOldTownPhoto, MombasaOldTownCredit } from "./MombasaOldTownPhoto.jsx";
import { TripIntro, TripGuide, TripGallery } from "./TripSections.jsx";

export const places = {
  "amboseli": {
    intro: (
      <TripIntro
        titleId="destination-title"
        title="Amboseli"
        eyebrow="Southern Kenya · Safari"
        photo="/photos/Amboseli%201.jpg"
        alt="An elephant beside a track with Kilimanjaro behind it"
        description="Amboseli’s open plains make the scale of the landscape easy to take in. Between the dry ground and the swamps, elephant herds and waterbirds give a game drive two very different settings."
        tagline="Elephants and wetlands beneath Kilimanjaro."
        backHref={destinationsPath}
      />
    ),
    guide: (
      <TripGuide titleId="guide-title">
        <h2 id="guide-title">What to experience</h2>
        <div className="guide-grid">
          <div>
            <h3>Elephant country</h3>
            <p>Spend time around the swamps, where elephants often gather and feed. A slower drive leaves time to watch how the herd moves between the water and open ground.</p>
          </div>
          <div>
            <h3>Mountain views</h3>
            <p>Kilimanjaro sits across the border in Tanzania and forms the park’s backdrop when the sky clears. Try an early drive if you want to photograph the mountain in softer light.</p>
          </div>
          <div>
            <h3>Wetlands and birdlife</h3>
            <p>Pause at wetland viewpoints to scan for birds and other wildlife. The contrast between green marsh and dusty tracks is part of what makes Amboseli worth a longer visit.</p>
          </div>
        </div>
        <p className="destination-source">Visitor information from <a href="https://reservations.kws.go.ke/location/amboseli-national-park">Kenya Wildlife Service</a>.</p>
      </TripGuide>
    ),
    gallery: (
      <TripGallery>
        <figure>
          <Photo src="/photos/Amboseli%201.jpg" alt="An elephant beside a track with Kilimanjaro behind it" />
          <figcaption>Amboseli</figcaption>
        </figure>
        <figure>
          <Photo src="/photos/amboseli%202.webp" alt="A thatched building below the snowy slopes of Kilimanjaro" />
          <figcaption>Kilimanjaro from the Amboseli area</figcaption>
        </figure>
        <figure>
          <Photo src="/photos/commons/amboseli-elephants.jpg" alt="Elephants with Kilimanjaro in the background" />
          <figcaption>
            Elephants beneath Kilimanjaro
            <small><a href="https://commons.wikimedia.org/wiki/File:Elephants_and_mt_kilimanjaro.jpg">Amoghavarsha via Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · Resized and displayed cropped</small>
          </figcaption>
        </figure>
      </TripGallery>
    ),
    next: (
      <div className="wrap destination-next" data-reveal="">
        <a className="destination-link" href={destinationsPath}><span aria-hidden="true">←</span> All destinations</a>
        <a className="button button-primary" href="/destinations/nairobi-national-park.html">Explore Nairobi National Park <span aria-hidden="true">↗</span></a>
      </div>
    ),
  },
  "kilifi": {
    intro: (
      <TripIntro
        titleId="destination-title"
        title="Kilifi"
        eyebrow="Kenyan coast · Creek and beach"
        photo="/photos/Kilifi1.jpg"
        alt="Sailboats on Kilifi Creek beside a palm-lined shore"
        description="Kilifi sits where a tidal creek meets the Indian Ocean. The creek, the beach and the ruins above the water are close enough to explore at an easy pace over a couple of days."
        tagline="A tidal creek, quiet beaches and Swahili history."
        backHref={destinationsPath}
      />
    ),
    guide: (
      <TripGuide titleId="guide-title">
        <h2 id="guide-title">What to experience</h2>
        <div className="guide-grid">
          <div>
            <h3>On the creek</h3>
            <p>Take in the shoreline from a paddle or a sail. The creek looks different as the tide turns, so ask locally about suitable conditions before settling on a time to go out.</p>
          </div>
          <div>
            <h3>Mnarani ruins</h3>
            <p>Above the water, the remains of mosques and tombs mark a former Swahili settlement. Walk the site slowly and look for the stonework beneath the baobabs.</p>
          </div>
          <div>
            <h3>Bofa Beach</h3>
            <p>Spend some unhurried time on Kilifi’s ocean side. A beach afternoon pairs well with a morning at Mnarani or a late sail on the creek.</p>
          </div>
        </div>
        <p className="destination-source">Visitor information from <a href="https://nmk.go.ke/mnarani-ruins/">National Museums of Kenya</a>.</p>
      </TripGuide>
    ),
    gallery: (
      <TripGallery>
        <figure>
          <Photo src="/photos/Kilifi1.jpg" alt="Sailboats on Kilifi Creek beside a palm-lined shore" />
          <figcaption>Kilifi</figcaption>
        </figure>
        <figure>
          <Photo src="/photos/Kilifi2.jpg" alt="An aerial view of the streets and rooftops of Kilifi" />
          <figcaption>Above Kilifi town</figcaption>
        </figure>
        <figure>
          <Photo src="/photos/commons/kilifi-mnarani.jpg" alt="Stone remains at the Mnarani ruins near Kilifi" />
          <figcaption>
            Mnarani ruins
            <small><a href="https://commons.wikimedia.org/wiki/File:Mnarani_Ruins.jpg">Macabe5387 via Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · Resized and displayed cropped</small>
          </figcaption>
        </figure>
      </TripGallery>
    ),
    next: (
      <div className="wrap destination-next" data-reveal="">
        <a className="destination-link" href={destinationsPath}><span aria-hidden="true">←</span> All destinations</a>
        <a className="button button-primary" href="/destinations/maasai-mara.html">Explore Maasai Mara <span aria-hidden="true">↗</span></a>
      </div>
    ),
  },
  "maasai-mara": {
    intro: (
      <TripIntro
        titleId="destination-title"
        title="Maasai Mara"
        eyebrow="Southwestern Kenya · Safari"
        photo="/photos/maasai-mara1.jpg"
        alt="A male lion standing in tall grass"
        description="The Mara’s grasslands run into wooded riverbanks and connect with Tanzania’s Serengeti. Give yourself several drives to see the landscape change from the cool of dawn to the last light of the afternoon."
        tagline="Open plains, river crossings and long days on safari."
        backHref={destinationsPath}
        photoClass="mara-lion"
      />
    ),
    guide: (
      <TripGuide titleId="guide-title">
        <h2 id="guide-title">What to experience</h2>
        <div className="guide-grid">
          <div>
            <h3>On the plains</h3>
            <p>Watch for lions in the grass and for giraffes and elephants around the acacia woodland. Ask your guide to vary your routes so you can spend time in both open country and riverine habitat.</p>
          </div>
          <div>
            <h3>Along the Mara River</h3>
            <p>The river draws wildlife year-round. During the seasonal migration, wildebeest may gather on its banks, but crossings depend on the herds and conditions that day.</p>
          </div>
          <div>
            <h3>Planning your stay</h3>
            <p>Choose where to stay before settling on a road route or airstrip. A few nights give you room for quieter drives and time at camp between outings.</p>
          </div>
        </div>
        <p className="destination-source">Visitor information from <a href="https://masaimara.ke/masai-mara/">Maasai Mara National Reserve</a>.</p>
      </TripGuide>
    ),
    gallery: (
      <TripGallery>
        <figure>
          <Photo src="/photos/maasai-mara1.jpg" alt="A male lion standing in tall grass" />
          <figcaption>Maasai Mara</figcaption>
        </figure>
        <figure>
          <Photo src="/photos/Maasai%20mara%202.jpg" alt="A hillside camp above the plains at sunset" />
          <figcaption>Sunset over the Mara</figcaption>
        </figure>
        <figure>
          <Photo src="/photos/commons/mara-migration.jpg" alt="Wildebeest crossing the Mara River" />
          <figcaption>
            The wildebeest migration
            <small><a href="https://commons.wikimedia.org/wiki/File:Migration_Masai_Mara.jpg">VikramSathyanathan via Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · Resized and displayed cropped</small>
          </figcaption>
        </figure>
      </TripGallery>
    ),
    next: (
      <div className="wrap destination-next" data-reveal="">
        <a className="destination-link" href={destinationsPath}><span aria-hidden="true">←</span> All destinations</a>
        <a className="button button-primary" href="/destinations/amboseli.html">Explore Amboseli <span aria-hidden="true">↗</span></a>
      </div>
    ),
  },
  "mombasa": {
    intro: (
      <TripIntro
        titleId="destination-title"
        title="Mombasa"
        eyebrow="Kenyan coast · Heritage"
        photo="/photos/Mombasi%201.jpg"
        alt="Boats and swimmers in shallow turquoise water"
        description="Mombasa’s harbour and Old Town show how maritime trade shaped the Kenyan coast. Set aside time for the city’s streets and food before heading out to the water."
        tagline="Old Town lanes and time by the Indian Ocean."
        backHref={destinationsPath}
      />
    ),
    guide: (
      <TripGuide titleId="guide-title">
        <h2 id="guide-title">What to experience</h2>
        <div className="guide-grid">
          <div>
            <h3>Fort Jesus</h3>
            <p>Start at the fortress above the harbour. Its position at the entrance to the old port helps explain why control of Mombasa mattered to the seafaring powers that traded along this coast.</p>
          </div>
          <div>
            <h3>Old Town on foot</h3>
            <p>Take the lanes around the fort at walking pace. Look up at the balconies and carved doorways, then leave time for a Swahili lunch or a stop at a neighbourhood market.</p>
          </div>
          <div>
            <h3>From city to coast</h3>
            <p>Pair a morning around the harbour with an afternoon by the ocean. If you also have time for Kilifi, it offers a quieter stretch of coast and a different view of the region’s Swahili heritage.</p>
          </div>
        </div>
        <p className="destination-source">Visitor information from <a href="https://nmk.go.ke/fort-jesus/">National Museums of Kenya</a>.</p>
      </TripGuide>
    ),
    gallery: (
      <TripGallery>
        <figure>
          <Photo src="/photos/Mombasi%201.jpg" alt="Boats and swimmers in shallow turquoise water" />
          <figcaption>Mombasa</figcaption>
        </figure>
        <figure>
          <MombasaOldTownPhoto />
          <figcaption>Swahili architecture in Mombasa Old Town
            <MombasaOldTownCredit />
          </figcaption>
        </figure>
        <figure>
          <Photo src="/photos/commons/mombasa-fort-jesus.jpg" alt="Stone walls at Fort Jesus in Mombasa" />
          <figcaption>
            Fort Jesus
            <small><a href="https://commons.wikimedia.org/wiki/File:Fort_jesus_mombasa.JPG">Alex Wafula via Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a> · Resized and displayed cropped</small>
          </figcaption>
        </figure>
      </TripGallery>
    ),
    next: (
      <div className="wrap destination-next" data-reveal="">
        <a className="destination-link" href={destinationsPath}><span aria-hidden="true">←</span> All destinations</a>
        <a className="button button-primary" href="/destinations/kilifi.html">Explore Kilifi <span aria-hidden="true">↗</span></a>
      </div>
    ),
  },
  "nairobi-national-park": {
    intro: (
      <TripIntro
        titleId="destination-title"
        title="Nairobi National Park"
        eyebrow="Nairobi · Safari"
        photo="/photos/commons/nairobi-zebra-skyline.jpg"
        alt="A zebra on the plains of Nairobi National Park with the city skyline behind it"
        description="In Nairobi National Park, you can see wildlife against the city skyline. A drive moves between open plains, watercourses and wooded areas, all close enough to fit into a stay in Nairobi."
        tagline="Open grassland on the edge of the capital."
        backHref={destinationsPath}
        photoClass="nairobi-skyline"
        credit={<small className="photo-credit">Photo by <a href="https://commons.wikimedia.org/wiki/File:Nairobi_National_Park_(August_2025),_Zebra_and_city_skyline.jpg">Addshore</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · Resized and cropped for display</small>}
      />
    ),
    guide: (
      <TripGuide titleId="guide-title">
        <h2 id="guide-title">What to experience</h2>
        <div className="guide-grid">
          <div>
            <h3>Wildlife and skyline</h3>
            <p>Look across the open ground for rhinos, giraffes and other grazers. Where the view opens up toward the city, the skyline offers a striking backdrop for wildlife photography.</p>
          </div>
          <div>
            <h3>Where to pause</h3>
            <p>Take time near the park’s water and riverine areas. They give you a change of scenery from the plains and a chance to look for birds.</p>
          </div>
          <div>
            <h3>Fitting it into Nairobi</h3>
            <p>Set aside a morning for a drive and leave enough time for travel across the city. Check the park’s official entry information as you plan your visit.</p>
          </div>
        </div>
        <p className="destination-source">Visitor information from <a href="https://kws.go.ke/park/nairobi-national-park/">Kenya Wildlife Service</a>.</p>
      </TripGuide>
    ),
    gallery: (
      <TripGallery>
        <figure>
          <Photo className="nairobi-skyline" src="/photos/commons/nairobi-zebra-skyline.jpg" alt="A zebra on the plains of Nairobi National Park with the city skyline behind it" />
          <figcaption>Zebra and the Nairobi skyline
            <small className="photo-credit">Photo by <a href="https://commons.wikimedia.org/wiki/File:Nairobi_National_Park_(August_2025),_Zebra_and_city_skyline.jpg">Addshore</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · Resized and cropped for display</small></figcaption>
        </figure>
        <figure>
          <Photo src="/photos/commons/nairobi-rhino.jpg" alt="A white rhinoceros in Nairobi National Park" />
          <figcaption>
            A white rhinoceros in the park
            <small><a href="https://commons.wikimedia.org/wiki/File:Rhino%2C_Nairobi_National_Park.jpg">Michelle Juma via Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · Resized and displayed cropped</small>
          </figcaption>
        </figure>
      </TripGallery>
    ),
    next: (
      <div className="wrap destination-next" data-reveal="">
        <a className="destination-link" href={destinationsPath}><span aria-hidden="true">←</span> All destinations</a>
        <a className="button button-primary" href="/destinations/mombasa.html">Explore Mombasa <span aria-hidden="true">↗</span></a>
      </div>
    ),
  },
};

export default function DestinationPage({ content }) {
  return (
    <main id="main">
      {content.intro}
      {content.guide}
      {content.gallery}
      {content.next}
    </main>
  );
}
