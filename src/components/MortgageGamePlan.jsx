import {
  Search,
  ClipboardCheck,
  FileCheck,
  Home,
  PartyPopper,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    text: "We start with your goals, budget, timeline, and priorities so I understand what a successful home purchase looks like for you.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Build Your Game Plan",
    text: "We'll compare loan options, down payment strategies, and monthly payment scenarios to build a Mortgage Game Plan™ around your situation.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Get Pre-Approved",
    text: "With your strategy in place, we'll work toward a strong pre-approval so you can shop with confidence and a clear understanding of your numbers.",
  },
  {
    number: "04",
    icon: Home,
    title: "Make Your Move",
    text: "When you find the right home, you'll already understand your financing strategy and be prepared to make an informed, competitive offer.",
  },
  {
    number: "05",
    icon: PartyPopper,
    title: "Close & Celebrate",
    text: "From contract to closing, I'll stay involved, communicate proactively, and help keep your financing moving toward the finish line.",
  },
];

function MortgageGamePlan() {
  return (
    <section className="game-plan-section" id="game-plan">
      <div className="section-heading game-plan-heading">
        <p className="eyebrow">The Mortgage Game Plan™</p>

        <h2>
          Don't Just Get a Loan.
          <br />
          Have a Strategy.
        </h2>

        <p>
          The best home purchases don't happen by chance. They start with a
          clear understanding of your options, your numbers, and your goals.
          That's what your Mortgage Game Plan™ is designed to provide.
        </p>
      </div>

      <div className="game-plan-grid">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article className="game-plan-card" key={step.number}>
              <div className="game-plan-icon">
                <Icon size={34} strokeWidth={2.2} />
              </div>

              <span className="step-number">Step {step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              {index < steps.length - 1 && (
                <div className="step-arrow" aria-hidden="true">
                  ↓
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="game-plan-footer">
        <h3>You Bring the Goal. I'll Help Build the Game Plan™.</h3>

        <p>
          You don't need to know which mortgage is best before you call.
          That's what we'll figure out together. I'll explain the options,
          answer your questions, and help you build a clear path from your
          first conversation through closing day.
        </p>

        <a
          className="button button-primary"
          href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
          target="_blank"
          rel="noreferrer"
        >
          Build My Mortgage Game Plan™
        </a>
      </div>
    </section>
  );
}

export default MortgageGamePlan;