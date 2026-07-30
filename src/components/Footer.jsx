import { ChevronUp } from "lucide-react";
import { COMMITTEE } from "../data/content.js";
import "./Footer.css";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSchedule = (e) => {
    e.preventDefault();
    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand-col">
            <a href="#home" className="footer__brand">
              <span className="footer__dot" />
              AI CONCLAVE<span className="footer__brand-accent">&apos;26</span>
            </a>

            <p className="footer__desc">
              Global Technical Symposium on AI &amp; Emerging Technologies.
              Organized by the Dept. of CSE (Artificial Intelligence &amp;
              Machine Learning), KPR Institute of Engineering and Technology,
              Coimbatore.
            </p>

            <a href="#schedule" className="footer__cta" onClick={scrollToSchedule}>
              VIEW SCHEDULE
            </a>
          </div>

          {/* ---------- Right: organizing committee ---------- */}
          <div className="footer__committee">
            <span className="footer__committee-title">Organizing Committee</span>
            <div className="footer__committee-grid">
              {COMMITTEE.map((m) => (
                <div className="footer__committee-item" key={m.n}>
                  <span className="footer__committee-role">{m.role}</span>
                  <span className="footer__committee-name">{m.n}</span>
                  <span className="footer__committee-title-text">{m.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="footer__bottom">
          <span>&copy; 2026 KPRIET &middot; Dept. of CSE (AIML)</span>
          <span>17 August 2026 &middot; Coimbatore, India</span>
        </div>
      </div>
    </footer>
  );
}