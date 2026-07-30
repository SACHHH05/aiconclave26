import { useEffect, useRef, useState } from "react";
import { OBJECTIVES, STATS } from "../data/content.js";
import "./About.css";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const els = itemRefs.current.filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__left">
          <div className="about__eyebrow">
            <span className="about__eyebrow-tag">[ 01 ]</span>
            <span className="about__eyebrow-line" />
            <span className="about__eyebrow-label">THE MANIFESTO</span>
          </div>

          <h2 className="about__headline">
            Where student
            <span className="about__headline-accent">innovation</span>
            meets a global
            <br />
            jury.
          </h2>

          <p className="about__desc">
            AI Conclave 2026 is a one-day global technical symposium designed
            to launch student research into the international arena —
            projects, pitches and posters, all under one roof.
          </p>

          <div className="about__stats">
            {STATS.map((s) => (
              <div className="about__stat" key={s.label}>
                <span className="about__stat-num">
                  {s.end}
                  {s.suffix}
                </span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__right">
          {OBJECTIVES.map((o, i) => (
            <div
              className={`about__item ${i === activeIndex ? "is-active" : ""}`}
              key={o.title}
              data-index={i}
              ref={(el) => (itemRefs.current[i] = el)}
            >
              <span className="about__item-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="about__item-body">
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}