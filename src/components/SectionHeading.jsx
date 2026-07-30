import "./SectionHeading.css";

export default function SectionHeading({ eyebrow, title, accent, sub }) {
  return (
    <div className="section-heading">
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">
        {title} <span className="section-heading__accent">{accent}</span>
      </h2>
      {sub && <p className="section-heading__sub">{sub}</p>}
    </div>
  );
}
