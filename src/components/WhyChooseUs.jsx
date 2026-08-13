const reasons = [
  {
    icon: "🎓",
    title: "Educator",
    text: "Mortgages can be complicated. I make the process easier to understand by explaining your options in plain English, answering your questions, and helping you make informed decisions with confidence.",
  },
  {
    icon: "🏈",
    title: "Strategist",
    text: "Getting approved is only part of the equation. I'll build a personalized Mortgage Game Plan™ around your goals, budget, timeline, and the loan options available to you.",
  },
  {
    icon: "🤝",
    title: "Trusted Guide",
    text: "From our first conversation through closing, you'll know what happens next. I stay accessible, communicate proactively, and work alongside you and your real estate agent to keep the process moving.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section" id="why">
      <div className="section-heading section-heading-centered">
        <p className="eyebrow">Why Lock With Mach?</p>

        <h2>
          Educate. Strategize. Close.
        </h2>

        <p>
          A mortgage isn't just about getting approved. It's about understanding
          your options, choosing the right strategy, and having a clear plan to
          get from application to closing.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <article key={reason.title}>
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "18px",
              }}
              aria-hidden="true"
            >
              {reason.icon}
            </div>

            <h3>{reason.title}</h3>

            <p>{reason.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;