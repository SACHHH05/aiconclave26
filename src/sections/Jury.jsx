// src/sections/Jury.jsx
import { GraduationCap, Briefcase } from "lucide-react";
import { JURY } from "../data/content.js";
import "./Jury.css";

export default function Jury() {
  return (
    <section id="jury" className="jury">
      <div className="container">
        <div className="jury__eyebrow">
          <span className="jury__eyebrow-tag">[ 04 ]</span>
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

        <div className="jury__grid">
          {JURY.map((j) => {
            const Icon = j.r.toLowerCase().includes("technology") ? Briefcase : GraduationCap;
            return (
              <div className="jury__card" key={j.n}>
                <span className="jury__dot" />
                <div className="jury__icon">
                  <Icon size={22} />
                </div>
                <h3>{j.n}</h3>
                <span className="jury__role">{j.r}</span>
                <span className="jury__aff">{j.a}</span>
                <span className="jury__tag">{j.tag}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}