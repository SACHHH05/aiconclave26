import { Calendar, MapPin, Users } from "lucide-react";
import kprLogo from "../components/kpr.png";
import "./Venue.css";

export default function Venue() {
  return (
    <section id="venue" className="venue">
      <div className="container">
        <div className="venue__top">
          {/* ---------- Left: KPRIET logo/image ---------- */}
          <div className="venue__media">
            <img
              src={kprLogo}
              alt="KPR Institute of Engineering and Technology"
              className="venue__media-img"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                if (e.currentTarget.nextElementSibling) {
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }
              }}
            />
            <div className="venue__media-fallback">
              KPRIET LOGO
              <br />
              KPRIET &middot; COIMBATORE
            </div>
          </div>

          {/* ---------- Right: info ---------- */}
          <div className="venue__info">
            <div className="venue__eyebrow">
              <span className="venue__eyebrow-tag">[ 05 ]</span>
              <span className="venue__eyebrow-line" />
              <span className="venue__eyebrow-label">LOCATION</span>
            </div>

            <h2 className="venue__headline">
              Hosted at <span className="venue__headline-accent">KPRIET,</span>
              <br />
              Coimbatore.
            </h2>

            <div className="venue__rows">
              <div className="venue__row">
                <Calendar size={20} className="venue__icon" />
                <div>
                  <span className="venue__label">Date</span>
                  <span className="venue__value">17 August 2026 &middot; Monday</span>
                </div>
              </div>
              <div className="venue__row">
                <MapPin size={20} className="venue__icon" />
                <div>
                  <span className="venue__label">Venue</span>
                  <span className="venue__value">3 Parallel Technical Halls &middot; KPRIET Campus, Coimbatore, India</span>
                </div>
              </div>
              <div className="venue__row">
                <Users size={20} className="venue__icon" />
                <div>
                  <span className="venue__label">Participation</span>
                  <span className="venue__value">100+ Delegates &middot; State / National / International</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}