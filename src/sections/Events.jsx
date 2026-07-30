import { ArrowUpRight } from "lucide-react";
import { EVENTS } from "../data/content.js";
import "./Events.css";

export default function Events() {
  return (
    <section id="events" className="events">
      <div className="container">
        <div className="events__eyebrow">
          <span className="events__eyebrow-tag">[ 02 ]</span>
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

        <div className="events__grid">
          {EVENTS.map((ev) => (
            <div className="events__card" key={ev.title} tabIndex={0}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}