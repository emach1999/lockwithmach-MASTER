const reasons = [
  {
    icon: "🎓",
    title: "Education Before Decisions",
    text: "You'll never be pressured into a loan you don't understand. I'll explain every option in plain English so you can make confident decisions."
  },
  {
    icon: "🏈",
    title: "A Game Plan, Not Just a Loan",
    text: "Anyone can quote an interest rate. I'll build a personalized Mortgage Game Plan™ around your goals, budget, timeline, and long-term financial success."
  },
  {
    icon: "🤝",
    title: "A Trusted Guide From Start to Finish",
    text: "You'll always know what happens next. I'll stay accessible, communicate proactively, and guide you through every step until the keys are in your hand."
  }
];

function WhyChooseUs() {
  return (
    <section className="why-section" id="why">
      <div className="section-heading section-heading-centered">

        <p className="eyebrow">
          Why Lock With Mach
        </p>

        <h2>
          Mortgage Advice Should Feel
          <br />
          Clear. Strategic. Personal.
        </h2>

        <p>
          Buying a home is one of the biggest financial decisions you'll ever
          make. You deserve a guide who takes the time to educate you, build a
          strategy around your goals, and help you move forward with confidence.
        </p>

      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <article key={reason.title}>

            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "18px"
              }}
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