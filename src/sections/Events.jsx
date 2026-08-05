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

        <div className="events__grid">
          {EVENTS.map((ev, i) => (
            <Reveal
              as="div"
              className="events__card"
              delay={(i % 2) * 120}
              key={ev.title}
              tabIndex={0}
            >
              <div className="events__card-top">
                <span className="events__kind">
                  <span className="events__dot" style={{ background: ev.dotColor }} />
                  {ev.kind}
                </span>
                <ArrowUpRight size={20} className="events__arrow" />
              </div>

              <div className="events__card-body">
                <h3>{ev.title}</h3>
                <span className="events__subtitle">{ev.subtitle}</span>
                <p>{ev.text}</p>

                <div className="events__people">
                  <span className="events__people-label">{ev.label}</span>
                  {ev.people.map((p) => (
                    <div key={p.n} className="events__person">
                      <strong>{p.n}</strong>
                      <span>{p.a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}