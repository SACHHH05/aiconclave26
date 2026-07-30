import { ChevronDown } from "lucide-react";
import "./ScrollIndicator.css";

export default function ScrollIndicator({ target = "about" }) {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={`#${target}`}
      onClick={handleClick}
      className="scroll-indicator"
      aria-label="Scroll to next section"
    >
      <span className="scroll-indicator__label">Scroll</span>
      <ChevronDown size={20} className="scroll-indicator__icon" />
    </a>
  );
}
