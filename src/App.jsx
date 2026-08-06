import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Footer from "./components/Footer.jsx";
import About from "./sections/About.jsx";
import Posters from "./sections/Posters.jsx";
import Events from "./sections/Events.jsx";
import Schedule from "./sections/Schedule.jsx";
import Jury from "./sections/Jury.jsx";
import Venue from "./sections/Venue.jsx";

export default function App() {
  const footerWrapRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  // Measure the footer's real height so the reveal works at any screen size /
  // content length, instead of a hardcoded pixel value.
  useEffect(() => {
    const el = footerWrapRef.current;
    if (!el) return;

    const update = () => setFooterHeight(el.offsetHeight);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="page-content">
        <Hero />
        <Marquee />
        <About />
        <Posters />
        <Events />
        <Schedule />
        <Jury />
        <Venue />
      </main>
      <div className="footer-spacer" style={{ height: `${footerHeight}px` }} aria-hidden="true" />
      <div ref={footerWrapRef} className="footer-sticky-wrap">
        <Footer />
      </div>
    </>
  );
}