import { useState, useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";
import poster1 from "../components/poster-1.jpg";
import poster2 from "../components/poster-2.jpg";
import poster3 from "../components/poster-3.jpg";
import Reveal from "../components/Reveal.jsx";
import "./Posters.css";

const ITEMS = [
  { src: poster1, title: "Event Poster 01" },
  { src: poster2, title: "Event Poster 02" },
  { src: poster3, title: "Event Poster 03" },
];

const AUTO_ADVANCE_MS = 3800;

/** Given a signed distance from the active slide, compute its 3D transform. */
function getItemStyle(offset) {
  const clamped = Math.max(-2, Math.min(2, offset));
  const absO = Math.abs(clamped);

  const xPercent = clamped * 46;
  const rotateY = clamped * -30;
  const z = -absO * 90;
  const scale = 1 - Math.min(absO, 1) * 0.22;
  const opacity = absO > 1.6 ? 0 : 1 - Math.min(absO, 1.4) * 0.72;
  const zIndex = Math.round(100 - absO * 10);
  const titleOpacity = absO < 0.12 ? 1 : 0;

  return { xPercent, rotateY, z, scale, opacity, zIndex, titleOpacity };
}

export default function Posters() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(null); // index or null
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setActive(((i % ITEMS.length) + ITEMS.length) % ITEMS.length);
  }, []);

  // auto-advance
  useEffect(() => {
    if (paused || lightbox !== null) return;
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % ITEMS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, lightbox]);

  // close lightbox on Escape, lock body scroll while open
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  const openLightbox = (i) => {
    goTo(i);
    setLightbox(i);
  };

  return (
    <section id="posters" className="posters">
      <div className="container posters__grid">
        {/* ---------- Left: heading ---------- */}
        <Reveal as="div" className="posters__left">
          <div className="posters__eyebrow">
            <span className="posters__eyebrow-tag">[ 02 ]</span>
            <span className="posters__eyebrow-line" />
            <span className="posters__eyebrow-label">SPREAD THE WORD</span>
          </div>

          <h2 className="posters__headline">
            Official event <span className="posters__headline-accent">posters.</span>
          </h2>

          <div className="posters__dots">
            {ITEMS.map((_, i) => (
              <button
                key={i}
                className={`posters__dot ${i === active ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to poster ${i + 1}`}
              />
            ))}
          </div>
        </Reveal>

        {/* ---------- Right: auto-advancing 3D carousel ---------- */}
        <div className="posters__right">
          <div
            className="posters__carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {ITEMS.map((item, i) => {
              const offset = i - active;
              const s = getItemStyle(offset);
              return (
                <div
                  key={item.title}
                  className="posters__item"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${s.xPercent}%) translateZ(${s.z}px) rotateY(${s.rotateY}deg) scale(${s.scale})`,
                    opacity: s.opacity,
                    zIndex: s.zIndex,
                  }}
                  onClick={() => openLightbox(i)}
                >
                  <div className="posters__frame">
                    <img src={item.src} alt={item.title} className="posters__img" />
                  </div>
                  <span className="posters__title" style={{ opacity: s.titleOpacity }}>
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="posters__lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={ITEMS[lightbox].title}
        >
          <button
            className="posters__lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <img
            src={ITEMS[lightbox].src}
            alt={ITEMS[lightbox].title}
            className="posters__lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="posters__lightbox-title">{ITEMS[lightbox].title}</span>
        </div>
      )}
    </section>
  );
}