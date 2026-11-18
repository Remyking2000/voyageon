export function startSiteEffects() {
  const lifecycle = new AbortController();
  const { signal } = lifecycle;
  let revealObserver;
  let scrollFrame;

  const destinationMenu = document.querySelector(".destination-menu");
  const destinationToggle = destinationMenu.querySelector("summary");
  const siteHeader = document.querySelector(".site-header");
  const primaryNav = document.querySelector("#primary-nav");
  const mobileToggle = document.querySelector(".menu-toggle");
  const mobileLayout = window.matchMedia("(max-width: 1020px)");
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
  }, { signal });
  mobileLayout.addEventListener("change", () => setMobileMenu(false), { signal });

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
      scrollFrame = requestAnimationFrame(updateNavbar);
      scrollFramePending = true;
    }
  }, { passive: true, signal });

  document.addEventListener("click", (event) => {
    if (siteHeader.classList.contains("menu-open") && !siteHeader.contains(event.target)) {
      setMobileMenu(false);
    }
    if (destinationMenu.open && !destinationMenu.contains(event.target)) {
      destinationMenu.open = false;
    }
  }, { signal });

  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      if (mobileLayout.matches) setMobileMenu(false);
      else destinationMenu.open = false;
    }
  }, { signal });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (destinationMenu.open) {
      destinationMenu.open = false;
      destinationToggle.focus();
    } else if (siteHeader.classList.contains("menu-open")) {
      setMobileMenu(false);
      mobileToggle.focus();
    }
  }, { signal });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    revealObserver = new IntersectionObserver((entries, observer) => {
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

  return () => {
    lifecycle.abort();
    cancelAnimationFrame(scrollFrame);
    revealObserver?.disconnect();
    document.querySelectorAll(".awaiting-reveal").forEach(section => section.classList.remove("awaiting-reveal"));
  };
}
