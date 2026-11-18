import { useEffect, useRef, useState } from "react";

const scenes = [
  {
    name: "Wildlife",
    location: "Amboseli, Kenya",
    title: "Go where the wild feels close.",
    copy: "Follow elephants across the grasslands and let the day unfold at their pace.",
    file: "amboseli-elephants",
  },
  {
    name: "Safari",
    location: "Maasai Mara, Kenya",
    title: "Take the slow road.",
    copy: "Cross the open plains at an unhurried pace, with time to stop when wildlife appears.",
    file: "mara-zebras",
  },
  {
    name: "Balloon",
    location: "Cappadocia, Türkiye",
    eyebrow: "Ballooning at sunrise",
    title: "Rise with the morning.",
    copy: "Drift above the valleys as the first light reaches the horizon.",
    file: "hot-air-balloons",
    holdMs: 8200,
  },
  {
    name: "Coast",
    location: "Stone Town, Zanzibar",
    title: "Follow the coast.",
    copy: "Watch boats rest on the water as the light fades over the Indian Ocean.",
    file: "stone-town-harbour",
  },
  {
    name: "Beach",
    location: "Zanzibar, Tanzania",
    title: "Let the tide set the pace.",
    copy: "Leave time for white sand, clear water and an afternoon with nowhere else to be.",
    file: "zanzibar-beach",
  },
];

const sceneInterval = 10500;
const fadeDuration = 1500;

function SceneVideo({ scene, shouldPlay }) {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (shouldPlay) {
      video.muted = true;
      video.play().catch(() => {
        // The scene poster remains visible if the browser blocks autoplay.
      });
    } else {
      video.pause();
    }
  }, [shouldPlay]);

  return (
    <video
      ref={videoRef}
      className={ready ? "hero-video is-ready" : "hero-video"}
      src={"/assets/" + scene.file + ".mp4"}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      onPlaying={() => setReady(true)}
      onError={() => setReady(false)}
    />
  );
}

export default function HomeHero() {
  const sectionRef = useRef(null);
  const [{ active, leaving }, setScene] = useState({ active: 0, leaving: null });
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(false);
  const [controlsFocused, setControlsFocused] = useState(false);
  const next = (active + 1) % scenes.length;
  const canPlay = motionAllowed && onScreen && documentVisible;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setMotionAllowed(!media.matches);
    const syncVisibility = () => setDocumentVisible(!document.hidden);

    syncMotion();
    syncVisibility();
    media.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncVisibility);

    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => setOnScreen(entry.intersectionRatio >= 0.1), { threshold: 0.1 })
      : null;
    if (observer) observer.observe(sectionRef.current);
    else setOnScreen(true);

    return () => {
      observer?.disconnect();
      media.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);

  useEffect(() => {
    if (!canPlay || controlsFocused) return;
    const timer = window.setTimeout(() => setScene({ active: next, leaving: active }), scenes[active].holdMs ?? sceneInterval);
    return () => window.clearTimeout(timer);
  }, [active, next, canPlay, controlsFocused]);

  useEffect(() => {
    if (leaving === null) return;
    const timer = window.setTimeout(() => setScene(current => ({ ...current, leaving: null })), fadeDuration);
    return () => window.clearTimeout(timer);
  }, [active, leaving]);

  function selectScene(index) {
    if (index !== active) setScene({ active: index, leaving: motionAllowed ? active : null });
  }

  const scene = scenes[active];

  return (
    <section className="hero home-hero" ref={sectionRef} aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        {scenes.map((item, index) => {
          const isCurrent = index === active;
          const isLeaving = index === leaving;
          const shouldLoad = canPlay && (isCurrent || isLeaving || index === next);

          return (
            <div className={"hero-scene" + (isCurrent ? " is-current" : isLeaving ? " is-leaving" : "")} data-scene={item.file} key={item.file}>
              <img className="hero-photo" src={"/assets/" + item.file + "-poster.jpg"} alt="" fetchPriority={index === 0 ? "high" : "low"} />
              {shouldLoad && <SceneVideo scene={item} shouldPlay={isCurrent || isLeaving} />}
            </div>
          );
        })}
      </div>
      <div className="wrap hero-inner">
        <div className="hero-heading">
          <p className="eyebrow hero-label">{scene.eyebrow ?? "East African journeys"}</p>
          <h1 id="hero-title"><span className="hero-scene-copy" key={scene.file}>{scene.title}</span></h1>
        </div>
        <div className="hero-bottom">
          <div className="hero-scene-navigation">
            <p className="photo-caption"><span aria-hidden="true">◎</span> {scene.location}</p>
            <div
              className="hero-scene-controls"
              role="group"
              aria-label="Hero scenes"
              onFocus={event => setControlsFocused(event.target.matches(":focus-visible"))}
              onBlur={event => {
                if (!event.currentTarget.contains(event.relatedTarget)) setControlsFocused(false);
              }}
            >
              {scenes.map((item, index) => (
                <button type="button" key={item.file} aria-pressed={index === active} onClick={() => selectScene(index)}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="hero-intro">
            <p className="hero-copy hero-scene-copy" key={scene.file}>{scene.copy}</p>
            <a className="button button-primary" href="#journeys">Explore journeys <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
