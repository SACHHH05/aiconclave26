import "./Marquee.css";

const WORDS = [
  "Startup Pitches",
  "Artificial Intelligence",
  "Machine Learning",
  "Emerging Technologies",
  "Research Posters",
];

export default function Marquee() {
  const sequence = [...WORDS, ...WORDS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {sequence.map((word, i) => (
          <span className="marquee__item" key={i}>
            <span className="marquee__word">{word}</span>
            <span className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}