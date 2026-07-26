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
    text: "We begin by understanding your goals, budget, timeline, and what success looks like for you."
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Build Your Mortgage Game Plan™",
    text: "Together we'll compare loan options, discuss strategies, and build a personalized plan before you ever write an offer."
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Get Pre-Approved",
    text: "A strong pre-approval gives you confidence, strengthens your offer, and helps you shop with a clear budget."
  },
  {
    number: "04",
    icon: Home,
    title: "Make Your Move",
    text: "With a strategy already in place, you'll know exactly what you can afford and how to make competitive offers."
  },
  {
    number: "05",
    icon: PartyPopper,
    title: "Close & Celebrate",
    text: "From contract to closing day, I'll guide you through every milestone so there are no unnecessary surprises."
  }
];

function MortgageGamePlan() {
  return (
    <section className="game-plan-section" id="game-plan">
      <div className="section-heading game-plan-heading">

        <p className="eyebrow">
          The Mortgage Game Plan™
        </p>

        <h2>
          Buying a Home Without a Strategy Is Like
          <br />
          Playing a Football Game Without a Game Plan.
        </h2>

        <p>
          The best home purchases don't happen by chance.
          They happen because there's a plan. My role is to help
          you build that strategy before you ever make an offer.
        </p>

      </div>

      <div className="game-plan-grid">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article
              className="game-plan-card"
              key={step.number}
            >

              <div className="game-plan-icon">
                <Icon size={34} strokeWidth={2.2} />
              </div>

              <span className="step-number">
                Step {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              {index < steps.length - 1 && (
                <div className="step-arrow">
                  ↓
                </div>
              )}

            </article>
          );
        })}

      </div>

      <div className="game-plan-footer">

        <h3>
          You Bring the Dream. I'll Build the Game Plan™.
        </h3>

        <p>
          You don't need to know which loan is best—that's my job.
          I'll explain your options in plain English, answer every
          question, and build a Mortgage Game Plan™ that helps you
          move forward with confidence from your first conversation
          all the way to closing day.
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