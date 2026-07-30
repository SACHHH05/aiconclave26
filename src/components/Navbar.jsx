import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../data/content.js";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Detect page scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth scroll navigation
  const goTo = useCallback(
    (id) => (e) => {
      e.preventDefault();

      // Close mobile menu
      setOpen(false);

      // Scroll to section
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    },
    []
  );

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar__inner">

        {/* Logo / Brand */}
        <a
          href="#home"
          className="navbar__brand"
          onClick={goTo("home")}
        >
          <span
            className="navbar__dot"
            aria-hidden="true"
          />

          AI CONCLAVE{" "}
          <span className="navbar__brand-accent">
            &apos;26
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="navbar__links"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={goTo(item.id)}
              className={
                active === item.id
                  ? "is-active"
                  : ""
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar__burger"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`navbar__drawer ${
          open ? "is-open" : ""
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={goTo(item.id)}
            className={
              active === item.id
                ? "is-active"
                : ""
            }
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}