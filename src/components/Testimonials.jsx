const values = [
  ["Clear Explanations", "Understand what is happening, why it matters, and how each decision affects your plan."],
  ["Responsive Communication", "Know what comes next and where your loan stands without having to chase down answers."],
  ["Personal Attention", "Receive a strategy built around your situation—not a one-size-fits-all sales pitch."],
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-heading section-heading-centered">
        <p className="eyebrow">The Lock With Mach Experience</p>
        <h2>What You Can Expect.</h2>
        <p>Every client relationship is built around clarity, preparation, and genuine care.</p>
      </div>
      <div className="testimonials-grid">
        {values.map(([title, text]) => (
          <article className="testimonial-card" key={title}>
            <div className="value-icon" aria-hidden="true">✓</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
