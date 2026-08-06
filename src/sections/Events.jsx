import { ArrowUpRight } from "lucide-react";
import { EVENTS } from "../data/content.js";
import Reveal from "../components/Reveal.jsx";
import "./Events.css";

export default function Events() {
  return (
    <section id="events" className="events">
      <div className="container">
        <Reveal>
          <div className="events__eyebrow">
            <span className="events__eyebrow-tag">[ 03 ]</span>
            <span className="events__eyebrow-line" />
            <span className="events__eyebrow-label">THE PROGRAMME</span>
          </div>

          <h2 className="events__headline">
            Four ways to
            <br />
            <span className="events__headline-outline">compete</span> &amp;
            <br />
            connect.
          </h2>
        </Reveal>

        <div className="events__list">
          {EVENTS.map((ev, i) => (
            <Reveal
              as="a" // Changed to an anchor tag or button for better semantic interaction
              href={`#${ev.title.replace(/\s+/g, '-').toLowerCase()}`} // Dummy link
              className="events__row"
              delay={i * 100}
              key={ev.title}
            >
              <div className="events__row-meta">
                <span className="events__dot" style={{ background: ev.dotColor }} />
                <span className="events__kind">{ev.kind}</span>
              </div>

              <div className="events__row-main">
                <h3 className="events__row-title">{ev.title}</h3>
                {/* Kept subtitle just in case, but you can delete this if you want strictly titles only */}
                <span className="events__row-subtitle">{ev.subtitle}</span> 
              </div>

            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}