import { GraduationCap, Briefcase } from "lucide-react";
import { JURY } from "../data/content.js";
import Reveal from "../components/Reveal.jsx";
import "./Jury.css";

export default function Jury() {
  return (
    <section id="jury" className="jury">
      <div className="container">
        <Reveal>
          <div className="jury__eyebrow">
            <span className="jury__eyebrow-tag">[ 05 ]</span>
            <span className="jury__eyebrow-line" />
            <span className="jury__eyebrow-label">THE GLOBAL JURY</span>
          </div>

          <h2 className="jury__headline">
            Evaluated by a <span className="jury__headline-accent">world-class</span> panel.
          </h2>

          <p className="jury__desc">
            A distinguished international jury drawn from leading global
            universities and industry &mdash; leading the &ldquo;AI Beyond
            Borders&rdquo; dialogue and evaluating every competition track.
          </p>
        </Reveal>

        <div className="jury__grid">
          {JURY.map((j, i) => {
            const Icon = j.type === "industry" ? Briefcase : GraduationCap;
            return (
              <Reveal
                as="div"
                className="jury__card"
                delay={i * 100}
                key={j.n}
                tabIndex={0}
              >
                <span className="jury__dot" />
                {j.photo ? (
                  <div className="jury__photo-wrap">
                    <img
                      src={j.photo}
                      alt={j.n}
                      className="jury__photo"
                      style={j.photoPosition ? { objectPosition: j.photoPosition } : undefined}
                    />
                  </div>
                ) : (
                  <div className="jury__icon">
                    <Icon size={22} />
                  </div>
                )}
                <h3>{j.n}</h3>
                <div className="jury__details">
                  <span className="jury__role">{j.r}</span>
                  <span className="jury__aff">
                    <span className="jury__flag" aria-hidden="true">{j.flag}</span>
                    {j.a}
                  </span>
                  <span className="jury__tag">{j.tag}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}