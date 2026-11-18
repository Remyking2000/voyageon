import Photo from "./Photo.jsx";
import HomeHero from "./HomeHero.jsx";
import KenyanCulture from "./KenyanCulture.jsx";
import { MombasaOldTownPhoto, MombasaOldTownCredit } from "./MombasaOldTownPhoto.jsx";

export default function HomePage() {
  return (
    <main id="main">
    <HomeHero />
    <section className="journeys wrap" id="journeys" aria-labelledby="journeys-title">
      <div className="section-heading" data-reveal="">
        <div>
          <p className="eyebrow">Destinations in Kenya</p>
          <h2 id="journeys-title">Find your kind of <em>out there.</em></h2>
        </div>
        <p>Follow wildlife across the savanna, spend a morning on safari just outside Nairobi, or make your way to the Indian Ocean.</p>
      </div>
      <div className="destination-list">
        <article className="journey" id="maasai-mara" data-reveal="">
          <div className="destination-photos">
            <Photo className="mara-lion" src="/photos/maasai-mara1.jpg" alt="A lion standing in tall golden grass" />
            <Photo src="/photos/Maasai%20mara%202.jpg" alt="Sunset over the Mara from a hillside camp" />
          </div>
          <div className="journey-body">
            <p className="eyebrow">Southwestern Kenya · Safari</p>
            <h3>Maasai Mara</h3>
            <p>Game drives take you across open grassland and down toward the Mara River. Early mornings and late afternoons give you two different views of the same landscape, with time at camp in between.</p>
            <p>For a first safari, spend a few nights here so you can explore different parts of the reserve at an easy pace.</p>
            <ul className="destination-highlights" aria-label="Highlights">
              <li>Game drives</li><li>Mara River</li><li>Savanna camps</li>
            </ul>
            <a className="destination-link" href="/destinations/maasai-mara.html">Explore Maasai Mara <span aria-hidden="true">↗</span></a>
          </div>
        </article>
        <article className="journey" id="amboseli" data-reveal="">
          <div className="destination-photos">
            <Photo src="/photos/Amboseli%201.jpg" alt="An elephant beside a dirt road with Kilimanjaro in the distance" />
            <Photo src="/photos/amboseli%202.webp" alt="A thatched building beneath the snowy slopes of Kilimanjaro" />
          </div>
          <div className="journey-body">
            <p className="eyebrow">Southern Kenya · Safari</p>
            <h3>Amboseli</h3>
            <p>Elephant herds move between dusty plains and wetlands fed by water from Kilimanjaro. On clear mornings, the mountain rises behind the park and gives the landscape its familiar silhouette.</p>
            <p>Leave time around the swamps to watch the herds and look for waterbirds along the edges.</p>
            <ul className="destination-highlights" aria-label="Highlights">
              <li>Elephant herds</li><li>Kilimanjaro views</li><li>Wetlands</li>
            </ul>
            <a className="destination-link" href="/destinations/amboseli.html">Explore Amboseli <span aria-hidden="true">↗</span></a>
          </div>
        </article>
        <article className="journey" id="nairobi-national-park" data-reveal="">
          <div className="destination-photos">
            <Photo className="nairobi-skyline" src="/photos/commons/nairobi-zebra-skyline.jpg" alt="A zebra on the plains of Nairobi National Park with the city skyline behind it" />
          </div>
          <div className="journey-body">
            <p className="eyebrow">Nairobi · Safari</p>
            <h3>Nairobi National Park</h3>
            <p>On Nairobi’s doorstep, open grassland gives way to wooded river valleys. On parts of a game drive, you can see the city skyline beyond the plains.</p>
            <p>A morning here fits naturally into a stay in the capital. Look for rhinos on the plains and birds near the water.</p>
            <ul className="destination-highlights" aria-label="Highlights">
              <li>Morning game drives</li><li>Rhino habitat</li><li>City skyline</li>
            </ul>
            <a className="destination-link" href="/destinations/nairobi-national-park.html">Explore Nairobi National Park <span aria-hidden="true">↗</span></a>
            <small className="photo-credit">Photo by <a href="https://commons.wikimedia.org/wiki/File:Nairobi_National_Park_(August_2025),_Zebra_and_city_skyline.jpg">Addshore</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · Resized and cropped for display</small>
          </div>
        </article>
        <article className="journey" id="mombasa" data-reveal="">
          <div className="destination-photos">
            <Photo src="/photos/Mombasi%201.jpg" alt="Boats and swimmers in shallow turquoise water" />
            <MombasaOldTownPhoto />
          </div>
          <div className="journey-body">
            <p className="eyebrow">Kenyan coast · Heritage</p>
            <h3>Mombasa</h3>
            <p>Walk through the narrow streets of Old Town, then follow the harbour to Fort Jesus, the UNESCO-listed fortress overlooking the Indian Ocean.</p>
            <p>Give yourself a morning for the fort and the neighbourhood, then spend the afternoon on the coast or stop for a Swahili meal.</p>
            <ul className="destination-highlights" aria-label="Highlights">
              <li>Old Town</li><li>Fort Jesus</li><li>Swahili food</li>
            </ul>
            <a className="destination-link" href="/destinations/mombasa.html">Explore Mombasa <span aria-hidden="true">↗</span></a>
            <MombasaOldTownCredit />
          </div>
        </article>
        <article className="journey" id="kilifi" data-reveal="">
          <div className="destination-photos">
            <Photo src="/photos/Kilifi1.jpg" alt="Sailboats on Kilifi Creek beside a palm-lined shore" />
            <Photo src="/photos/Kilifi2.jpg" alt="An aerial view of the streets and rooftops of Kilifi" />
          </div>
          <div className="journey-body">
            <p className="eyebrow">Kenyan coast · Creek and beach</p>
            <h3>Kilifi</h3>
            <p>Kilifi Creek opens into the Indian Ocean beside a quieter stretch of coast. See the creek from the water on a paddle or a sunset sail, or spend the afternoon on Bofa Beach.</p>
            <p>Above the creek, the Mnarani ruins offer a look at the area’s Swahili history and a view across the water.</p>
            <ul className="destination-highlights" aria-label="Highlights">
              <li>Kilifi Creek</li><li>Bofa Beach</li><li>Mnarani ruins</li>
            </ul>
            <a className="destination-link" href="/destinations/kilifi.html">Explore Kilifi <span aria-hidden="true">↗</span></a>
          </div>
        </article>
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
