const destinationMenu = document.querySelector(".destination-menu");
const destinationToggle = destinationMenu.querySelector("summary");

document.addEventListener("click", (event) => {
  if (destinationMenu.open && !destinationMenu.contains(event.target)) {
    destinationMenu.open = false;
  }
});

destinationMenu.querySelector(".destination-options").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    destinationMenu.open = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && destinationMenu.open) {
    destinationMenu.open = false;
    destinationToggle.focus();
  }
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  const hero = heroVideo.closest(".hero");

  function showHeroStill() {
    hero.classList.remove("video-ready");
  }

  function updateHeroMotion() {
    if (reducedMotion.matches) {
      showHeroStill();
      heroVideo.removeAttribute("src");
      heroVideo.load();
      return;
    }
    heroVideo.muted = true;
    heroVideo.src = heroVideo.dataset.src;
    heroVideo.play().catch(showHeroStill);
  }

  heroVideo.addEventListener("playing", () => {
    if (reducedMotion.matches) return;
    hero.classList.add("video-ready");
  });
  heroVideo.addEventListener("error", showHeroStill);
  reducedMotion.addEventListener("change", updateHeroMotion);
  updateHeroMotion();
}

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove("awaiting-reveal");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.1 });

  for (const section of document.querySelectorAll("[data-reveal]")) {
    if (section.getBoundingClientRect().top >= window.innerHeight) {
      section.classList.add("awaiting-reveal");
      revealObserver.observe(section);
    }
  }
}
