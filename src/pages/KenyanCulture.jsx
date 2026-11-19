import Photo from "./Photo.jsx";

const stories = [
  {
    title: "Start with Kiswahili",
    copy: "Kiswahili is Kenya’s national language and shares official status with English. Try asante for “thank you,” or tafadhali for “please.”",
    source: "Constitution of Kenya, Article 7",
    href: "https://www.kenyalaw.org/kl/fileadmin/pdfdownloads/TheConstitutionOfKenya.pdf",
  },
  {
    title: "At a Swahili table",
    copy: "On the coast, look for samaki wa kupaka, fish prepared with coconut milk, and mahamri, a fried bread scented with cardamom. In Mombasa, leave room at lunch for a plate of biryani.",
    source: "Magical Kenya’s Mombasa guide",
    href: "https://magicalkenya.com/wp-content/uploads/2024/10/48-hours-in-Mombasa-brochure.pdf",
  },
  {
    title: "The rhythm of Isukuti",
    copy: "Among the Isukha and Idakho communities of western Kenya, Isukuti brings singing, dancing and drumming together at occasions such as weddings. The name comes from the drums, which are played in sets of three.",
    source: "UNESCO’s Isukuti profile",
    href: "https://ich.unesco.org/en/RL/isukuti-dance-of-isukha-and-idakho-communities-of-western-kenya-00981",
  },
  {
    title: "Learning from Maasai elders",
    copy: "Enkipaata, Eunoto and Olng’esherr mark stages in the lives of Maasai boys and young men. During these rites of passage, elders pass down knowledge of livestock keeping, community responsibilities and ways to resolve disputes.",
    source: "UNESCO’s Maasai rites of passage profile",
    href: "https://ich.unesco.org/en/USL/enkipaata-eunoto-and-olngesherr-three-male-rites-of-passage-of-the-maasai-community-01390",
  },
];

export default function KenyanCulture() {
  return (
    <section className="wrap culture" id="kenyan-culture" aria-labelledby="culture-title">
      <div className="section-heading" data-reveal="">
        <h2 id="culture-title">Kenyan culture</h2>
        <p>Follow the coast’s trading history, find something new to try at lunch, and get to know a few of Kenya’s languages and traditions.</p>
      </div>

      <article className="culture-feature" data-reveal="">
        <figure>
          <Photo
            src="/photos/commons/gedi-mosque.jpg"
            alt="Stone walls of a ruined mosque at Gedi on the Kenyan coast"
            width="1280"
            height="960"
            loading="lazy"
          />
          <figcaption className="photo-credit">
            Photo by <a href="https://commons.wikimedia.org/wiki/File:Gede3.JPG">Maclemo</a> ·{" "}
            <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a> · Resized for display
          </figcaption>
        </figure>
        <div className="culture-copy">
          <h3>Gedi and the Indian Ocean trade</h3>
          <p>In a coastal forest near Watamu, Gedi’s coral-stone ruins preserve the layout of a Swahili town. Mosques, courtyards and wells give a sense of how the settlement was built and how people lived.</p>
          <p>Archaeologists found goods from as far away as China, India and Venice at Gedi. Those finds show how a town set inland from the shore was connected to trade across the Indian Ocean.</p>
          <a className="destination-link" href="/destinations/watamu-malindi.html">Explore Watamu &amp; Malindi <span aria-hidden="true">↗</span></a>
          <a className="culture-source" href="https://whc.unesco.org/en/list/1720/">Gedi at UNESCO World Heritage</a>
        </div>
      </article>

      <div className="culture-stories">
        {stories.map(({ title, copy, source, href }) => (
          <article className="culture-copy" key={title} data-reveal="">
            <h3>{title}</h3>
            <p>{copy}</p>
            <a className="culture-source" href={href}>{source}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
