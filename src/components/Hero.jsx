import Countdown from "./Countdown.jsx";
import ScrollIndicator from "./ScrollIndicator.jsx";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__grid" />
        <span className="hero__glow hero__glow--1" />
        <span className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__content">
        <div className="hero__meta">
          <span className="hero__meta-line" />
          <span className="hero__meta-text">17 AUGUST 2026</span>
          <span className="hero__meta-dot">&middot;</span>
          <span className="hero__meta-text">COIMBATORE, INDIA</span>
        </div>

        <div className="hero__grid-cols">
          <div className="hero__left">
            <h1 className="hero__title">
              AI CONCLAVE
              <span className="hero__title-accent">2026</span>
            </h1>
            <p className="hero__desc">
              Global Technical Symposium on AI &amp; Emerging Technologies.
              <br />
              A global technical symposium hosted by the Dept. of CSE
              (Artificial Intelligence &amp; Machine Learning), KPR Institute
              of Engineering and Technology.
            </p>

            <div className="hero__actions">
              <a href="#schedule" className="hero__btn" onClick={(e) => {
                e.preventDefault();
                document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
              }}>
                VIEW SCHEDULE
              </a>
            </div>
          </div>

          <div className="hero__right">
            <Countdown />
          </div>
        </div>

        <div className="hero__scroll">
          <ScrollIndicator target="about" />
        </div>
      </div>
    </section>
  );
}