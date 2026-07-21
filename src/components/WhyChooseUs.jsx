const reasons = [
  ["You Understand the Why", "No unexplained jargon or rushed decisions. I slow the process down enough for you to understand your choices."],
  ["Your Strategy Comes First", "The goal is not simply to find a loan. It is to build the right plan around your budget, timeline, and future goals."],
  ["You Have a Guide", "From the first conversation through closing, you receive proactive communication and a clear view of what happens next."],
];

function WhyChooseUs() {
  return (
    <section className="why-section" id="why">
      <div className="section-heading section-heading-centered">
        <p className="eyebrow">Why Lock With Mach</p>
        <h2>A Better Mortgage Experience Starts With Better Guidance.</h2>
        <p>You deserve more than a rate quote. You deserve a strategy you understand and a professional who stays engaged.</p>
      </div>
      <div className="why-grid">
        {reasons.map(([title, text], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
