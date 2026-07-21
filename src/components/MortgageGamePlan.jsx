const steps = [
  ["01", "Understand Your Goals", "We begin with your priorities, budget, timeline, and the outcome you want."],
  ["02", "Explore Your Options", "I explain relevant programs, costs, advantages, and tradeoffs in plain English."],
  ["03", "Build Your Strategy", "Together, we choose a plan designed around your next move and long-term goals."],
  ["04", "Move Forward Confidently", "I guide the process, communicate clearly, and stay available through closing."],
];

function MortgageGamePlan() {
  return (
    <section className="game-plan-section" id="game-plan">
      <div className="section-heading game-plan-heading">
        <p className="eyebrow">Your Mortgage Game Plan™</p>
        <h2>A Clear Plan for Your Next Move.</h2>
        <p>You should never feel like you are guessing your way through one of life&apos;s biggest financial decisions.</p>
      </div>
      <div className="game-plan-grid">
        {steps.map(([number, title, text]) => (
          <article className="game-plan-card" key={number}>
            <span className="step-number">{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MortgageGamePlan;
