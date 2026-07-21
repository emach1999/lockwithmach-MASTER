const solutions = [
  ["Home Purchase", "Conventional, FHA, VA, USDA, jumbo, and first-time-buyer strategies."],
  ["Buy Before You Sell", "Use available equity and create a stronger path to your next home."],
  ["Investor Loans", "DSCR, bank-statement, and other non-QM options for qualified investors."],
  ["Bridge & Equity", "Bridge loans, HELOCs, and cash-out strategies for short- and long-term goals."],
  ["Refinance", "Rate-and-term, cash-out, debt consolidation, and payment strategy reviews."],
  ["Renovation", "Options that can combine a home purchase with approved improvements."],
];

function LoanSolutions() {
  return (
    <section className="solutions-section" id="solutions">
      <div className="section-heading solutions-heading">
        <div>
          <p className="eyebrow">Loan Solutions</p>
          <h2>Options Are Helpful. The Right Strategy Is Better.</h2>
        </div>
        <p>We start with your goals first, then determine which loan structure deserves a place in your game plan.</p>
      </div>
      <div className="solutions-grid">
        {solutions.map(([title, text], index) => (
          <article className="solution-card" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#contact">Discuss this option <b aria-hidden="true">→</b></a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LoanSolutions;
