import { SCHEDULE } from "../data/content.js";
import "./Schedule.css";

export default function Schedule() {
  return (
    <section id="schedule" className="schedule">
      <div className="container schedule__grid">
        {/* ---------- Left: sticky intro ---------- */}
        <div className="schedule__left">
          <div className="schedule__eyebrow">
            <span className="schedule__eyebrow-tag">[ 03 ]</span>
            <span className="schedule__eyebrow-line" />
            <span className="schedule__eyebrow-label">ONE DAY</span>
          </div>

          <h2 className="schedule__headline">
            The Full Run
            <br />
            of Show
          </h2>

          <p className="schedule__desc">
            17 August 2026 &middot; Monday. From opening registration to the
            valedictory prize distribution &mdash; eight sessions across
            three parallel technical halls.
          </p>
        </div>

        {/* ---------- Right: time list ---------- */}
        <div className="schedule__right">
          {SCHEDULE.map((row, i) => (
            <div className="schedule__row" key={i}>
              <div className="schedule__time-wrap">
                <span className="schedule__time">
                  {row.start}
                  <sup className="schedule__period">{row.startPeriod}</sup>
                </span>
              </div>

              <span className="schedule__title">{row.title}</span>

              <span className="schedule__end">
                &rarr; {row.end} {row.endPeriod}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}