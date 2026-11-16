const destinationMenu = document.querySelector(".destination-menu");
const destinationToggle = destinationMenu.querySelector("summary");
const siteHeader = document.querySelector(".site-header");
const primaryNav = document.querySelector("#primary-nav");
const mobileToggle = document.querySelector(".menu-toggle");
const mobileLayout = window.matchMedia("(max-width: 760px)");
let previousScroll = Math.max(0, window.scrollY);
let scrollFramePending = false;

function setMobileMenu(open) {
  siteHeader.classList.toggle("menu-open", open);
  mobileToggle.setAttribute("aria-expanded", String(open));
  if (open) siteHeader.classList.remove("is-hidden");
  else destinationMenu.open = false;
}

siteHeader.classList.add("mobile-nav-ready");
mobileToggle.hidden = false;
mobileToggle.addEventListener("click", () => {
  setMobileMenu(mobileToggle.getAttribute("aria-expanded") === "false");
});
mobileLayout.addEventListener("change", () => setMobileMenu(false));

siteHeader.classList.toggle("is-scrolled", previousScroll > 24);

function updateNavbar() {
  const currentScroll = Math.max(0, window.scrollY);
  siteHeader.classList.toggle("is-scrolled", currentScroll > 24);

  if (currentScroll <= 100 || destinationMenu.open || siteHeader.classList.contains("menu-open")) {
    siteHeader.classList.remove("is-hidden");
    previousScroll = currentScroll;
  } else if (Math.abs(currentScroll - previousScroll) >= 12) {
    siteHeader.classList.toggle("is-hidden", currentScroll > previousScroll);
    previousScroll = currentScroll;
  }

  scrollFramePending = false;
}

window.addEventListener("scroll", () => {
  if (!scrollFramePending) {
    requestAnimationFrame(updateNavbar);
    scrollFramePending = true;
  }
}, { passive: true });

document.addEventListener("click", (event) => {
  if (siteHeader.classList.contains("menu-open") && !siteHeader.contains(event.target)) {
    setMobileMenu(false);
  }
  if (destinationMenu.open && !destinationMenu.contains(event.target)) {
    destinationMenu.open = false;
  }
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    if (mobileLayout.matches) setMobileMenu(false);
    else destinationMenu.open = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (destinationMenu.open) {
    destinationMenu.open = false;
    destinationToggle.focus();
  } else if (siteHeader.classList.contains("menu-open")) {
    setMobileMenu(false);
    mobileToggle.focus();
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
