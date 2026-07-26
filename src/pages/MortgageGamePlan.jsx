import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  CalendarDays,
  Check,
  ClipboardCheck,
  Compass,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Home,
  Lightbulb,
  Map,
  MessageCircleQuestion,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const BOOKING_URL = "/contact";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    subtitle: "We begin with your goals—not a loan product.",
    description:
      "We talk about what you want to accomplish, your ideal timeline, your budget, your concerns, and what matters most to you.",
    points: [
      "Your homeownership goals",
      "Your comfortable monthly budget",
      "Your expected timeline",
      "Your questions and concerns",
    ],
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Educate",
    subtitle: "You deserve to understand your options.",
    description:
      "I explain the financing choices that may fit your situation in plain English, including the benefits, costs, tradeoffs, and Texas-specific considerations.",
    points: [
      "Loan program comparisons",
      "Down payment possibilities",
      "Closing-cost expectations",
      "Texas taxes, insurance, and escrow",
    ],
  },
  {
    number: "03",
    icon: Target,
    title: "Strategize",
    subtitle: "We turn information into a personalized plan.",
    description:
      "Together, we compare realistic scenarios and choose a financing strategy designed around your life—not around a one-size-fits-all sales pitch.",
    points: [
      "Payment and cash-to-close scenarios",
      "Offer and timing strategy",
      "Current-home equity options",
      "Short- and long-term priorities",
    ],
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Execute",
    subtitle: "A clear plan makes the mortgage process smoother.",
    description:
      "Once you are ready to move forward, I guide you through pre-approval, documentation, underwriting, appraisal, and closing.",
    points: [
      "Clear document guidance",
      "Consistent communication",
      "Milestone-by-milestone support",
      "Coordination through closing",
    ],
  },
  {
    number: "05",
    icon: Handshake,
    title: "Stay Connected",
    subtitle: "The relationship does not end at closing.",
    description:
      "Your financing needs may change as your life changes. I remain available to help you evaluate future opportunities and decisions.",
    points: [
      "Annual mortgage reviews",
      "Refinance conversations",
      "Move-up planning",
      "Investment and equity strategies",
    ],
  },
];

const audiences = [
  {
    icon: Home,
    title: "First-Time Buyers",
    text: "Understand the process, prepare your finances, and begin shopping with greater confidence.",
  },
  {
    icon: TrendingUp,
    title: "Move-Up Buyers",
    text: "Create a strategy for purchasing your next home while managing the sale or equity in your current home.",
  },
  {
    icon: ShieldCheck,
    title: "Veterans",
    text: "Explore how your VA home loan benefit may fit your goals, including Texas-specific considerations.",
  },
  {
    icon: BarChart3,
    title: "Real Estate Investors",
    text: "Compare financing options designed for rental properties, cash flow, and long-term portfolio growth.",
  },
  {
    icon: Users,
    title: "Self-Employed Borrowers",
    text: "Evaluate traditional and alternative documentation options that may better reflect your financial picture.",
  },
  {
    icon: Compass,
    title: "Buyers Who Feel Stuck",
    text: "You do not need to know which loan you need before reaching out. That is what the planning session is for.",
  },
];

const takeaways = [
  "A clearer understanding of your realistic buying range",
  "Financing options explained in plain English",
  "Estimated payment and cash-to-close scenarios",
  "A strategy built around your goals and timeline",
  "Clear next steps, even if you are not ready to buy yet",
];

const expectations = [
  {
    icon: BookOpen,
    title: "Education Before Decisions",
    text: "You will understand why an option may fit before being asked to choose it.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Questions Are Encouraged",
    text: "There is no such thing as a bad mortgage question. We will slow down and work through it together.",
  },
  {
    icon: BadgeCheck,
    title: "Honest Guidance",
    text: "Sometimes the right strategy is to move forward. Sometimes it is to prepare first. You will receive an honest answer.",
  },
  {
    icon: HeartHandshake,
    title: "No-Pressure Conversation",
    text: "The goal is clarity—not pushing you into an application before you are comfortable.",
  },
];

function MortgageGamePlan() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Mortgage Game Plan™ | Texas Mortgage Strategy | Lock With Mach";

    const description =
      "Schedule a free Mortgage Game Plan™ Session with Eric Mach. Understand your Texas mortgage options, estimated payments, cash needed, and personalized next steps.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    const previousDescription = metaDescription?.getAttribute("content");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    return () => {
      document.title = previousTitle;

      if (previousDescription) {
        metaDescription.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <main className="game-plan-page">
      <section className="game-plan-hero">
        <div className="game-plan-container game-plan-hero-grid">
          <div className="game-plan-hero-content">
            <div className="game-plan-eyebrow">
              <Sparkles size={17} aria-hidden="true" />
              Personalized Texas mortgage strategy
            </div>

            <h1>
              Stop Guessing.
              <span> Start With a Mortgage Game Plan™.</span>
            </h1>

            <p className="game-plan-hero-lead">
              Before you choose a home, a loan program, or a down payment,
              let&apos;s build a clear financing strategy around your goals,
              budget, and timeline.
            </p>

            <div className="game-plan-hero-actions">
              <Link className="game-plan-primary-button" to={BOOKING_URL}>
                <CalendarDays size={20} aria-hidden="true" />
                Schedule My Free Session
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <a className="game-plan-text-link" href="#how-it-works">
                See how it works
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="game-plan-booking-details">
              <span>
                <Check size={17} aria-hidden="true" />
                Free
              </span>
              <span>
                <Check size={17} aria-hidden="true" />
                About 30 minutes
              </span>
              <span>
                <Check size={17} aria-hidden="true" />
                No obligation
              </span>
            </div>
          </div>

          <aside className="game-plan-hero-card">
            <div className="game-plan-card-icon">
              <Map size={30} aria-hidden="true" />
            </div>

            <p className="game-plan-card-label">
              Your personalized planning session
            </p>

            <h2>What will we discuss?</h2>

            <ul>
              <li>
                <Check size={18} aria-hidden="true" />
                Your goals and buying timeline
              </li>
              <li>
                <Check size={18} aria-hidden="true" />
                A comfortable monthly-payment range
              </li>
              <li>
                <Check size={18} aria-hidden="true" />
                Possible loan and down-payment options
              </li>
              <li>
                <Check size={18} aria-hidden="true" />
                Estimated cash needed for closing
              </li>
              <li>
                <Check size={18} aria-hidden="true" />
                Your most practical next steps
              </li>
            </ul>

            <Link className="game-plan-card-button" to={BOOKING_URL}>
              Reserve My Session
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="game-plan-trust-strip">
        <div className="game-plan-container game-plan-trust-grid">
          <div>
            <GraduationCap size={24} aria-hidden="true" />
            <span>
              <strong>Teacher&apos;s approach</strong>
              Complex topics explained clearly
            </span>
          </div>

          <div>
            <Target size={24} aria-hidden="true" />
            <span>
              <strong>Coach&apos;s strategy</strong>
              A plan designed around your goals
            </span>
          </div>

          <div>
            <ShieldCheck size={24} aria-hidden="true" />
            <span>
              <strong>Texas guidance</strong>
              Local considerations included
            </span>
          </div>
        </div>
      </section>

      <section className="game-plan-problem-section">
        <div className="game-plan-container game-plan-problem-grid">
          <div>
            <p className="game-plan-section-kicker">A better starting point</p>

            <h2>You do not need to figure everything out before calling.</h2>
          </div>

          <div className="game-plan-problem-copy">
            <p>
              Many homebuyers begin by searching for rates or trying to choose
              a loan program. But a mortgage decision involves much more than
              finding the lowest advertised number.
            </p>

            <p>
              Your payment, cash reserves, property taxes, homeowners
              insurance, existing debts, future plans, and comfort level all
              matter.
            </p>

            <p className="game-plan-highlight-copy">
              The Mortgage Game Plan™ helps organize those pieces into one
              understandable strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="game-plan-steps-section" id="how-it-works">
        <div className="game-plan-container">
          <div className="game-plan-section-heading">
            <p className="game-plan-section-kicker">How it works</p>

            <h2>Five steps from uncertainty to a clear plan.</h2>

            <p>
              The process is designed to help you understand your choices
              before making a major financial decision.
            </p>
          </div>

          <div className="game-plan-steps">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="game-plan-step" key={step.title}>
                  <div className="game-plan-step-number">{step.number}</div>

                  <div className="game-plan-step-icon">
                    <Icon size={26} aria-hidden="true" />
                  </div>

                  <div className="game-plan-step-content">
                    <p className="game-plan-step-label">{step.title}</p>
                    <h3>{step.subtitle}</h3>
                    <p>{step.description}</p>

                    <ul>
                      {step.points.map((point) => (
                        <li key={point}>
                          <Check size={17} aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="game-plan-inline-cta">
        <div className="game-plan-container game-plan-inline-cta-inner">
          <div>
            <p className="game-plan-section-kicker">
              Ready for a clearer path?
            </p>

            <h2>Let&apos;s build your Mortgage Game Plan™ together.</h2>

            <p>
              You can schedule a conversation even if you are months away from
              buying or are not sure which type of financing may fit.
            </p>
          </div>

          <Link className="game-plan-light-button" to={BOOKING_URL}>
            <CalendarDays size={20} aria-hidden="true" />
            Schedule My Session
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="game-plan-audience-section">
        <div className="game-plan-container">
          <div className="game-plan-section-heading">
            <p className="game-plan-section-kicker">Who it is for</p>

            <h2>A useful first step for nearly every type of buyer.</h2>

            <p>
              Your strategy should reflect your stage of life, financial
              picture, property goals, and timeline.
            </p>
          </div>

          <div className="game-plan-audience-grid">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <article className="game-plan-audience-card" key={audience.title}>
                  <div className="game-plan-audience-icon">
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="game-plan-takeaway-section">
        <div className="game-plan-container game-plan-takeaway-grid">
          <div className="game-plan-takeaway-content">
            <p className="game-plan-section-kicker">
              What you will leave with
            </p>

            <h2>More than a rate quote. A direction.</h2>

            <p>
              A pre-approval can tell you whether you may qualify. A Mortgage
              Game Plan™ helps you understand how the financing fits into your
              life.
            </p>

            <ul>
              {takeaways.map((takeaway) => (
                <li key={takeaway}>
                  <BadgeCheck size={21} aria-hidden="true" />
                  {takeaway}
                </li>
              ))}
            </ul>

            <Link className="game-plan-primary-button" to={BOOKING_URL}>
              Build My Mortgage Game Plan™
              <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>

          <div className="game-plan-scenario-card">
            <div className="game-plan-scenario-top">
              <Lightbulb size={26} aria-hidden="true" />
              <span>Example planning questions</span>
            </div>

            <div className="game-plan-scenario-question">
              Should I put 5%, 10%, or 20% down?
            </div>

            <div className="game-plan-scenario-question">
              Should I buy before selling my current home?
            </div>

            <div className="game-plan-scenario-question">
              Is a VA, FHA, or conventional loan the better fit?
            </div>

            <div className="game-plan-scenario-question">
              How will Texas property taxes affect my payment?
            </div>

            <div className="game-plan-scenario-question">
              Should I buy now or spend more time preparing?
            </div>

            <p>
              The right answer depends on your complete financial picture—not
              one generic rule.
            </p>
          </div>
        </div>
      </section>

      <section className="game-plan-expectations-section">
        <div className="game-plan-container">
          <div className="game-plan-section-heading">
            <p className="game-plan-section-kicker">What you can expect</p>

            <h2>Clear guidance without the sales pressure.</h2>
          </div>

          <div className="game-plan-expectations-grid">
            {expectations.map((expectation) => {
              const Icon = expectation.icon;

              return (
                <article
                  className="game-plan-expectation-card"
                  key={expectation.title}
                >
                  <Icon size={27} aria-hidden="true" />
                  <h3>{expectation.title}</h3>
                  <p>{expectation.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="game-plan-final-cta">
        <div className="game-plan-container">
          <div className="game-plan-final-cta-card">
            <div className="game-plan-final-icon">
              <CalendarDays size={34} aria-hidden="true" />
            </div>

            <p className="game-plan-section-kicker">
              Your next step can be simple
            </p>

            <h2>Schedule Your Free Mortgage Game Plan™ Session</h2>

            <p>
              In about 30 minutes, we will discuss your goals, budget,
              financing possibilities, and most practical next steps.
            </p>

            <div className="game-plan-final-benefits">
              <span>
                <Check size={18} aria-hidden="true" />
                Free planning session
              </span>
              <span>
                <Check size={18} aria-hidden="true" />
                No obligation
              </span>
              <span>
                <Check size={18} aria-hidden="true" />
                Clear next steps
              </span>
            </div>

            <Link className="game-plan-final-button" to={BOOKING_URL}>
              <CalendarDays size={21} aria-hidden="true" />
              Schedule My Mortgage Game Plan™
              <ArrowRight size={20} aria-hidden="true" />
            </Link>

            <p className="game-plan-final-note">
              Whether you are buying next month or next year, you do not have
              to figure it out alone.
            </p>
          </div>
        </div>
      </section>

      <section className="game-plan-disclaimer">
        <div className="game-plan-container">
          <p>
            Mortgage qualification, available programs, interest rates, fees,
            property eligibility, and loan terms depend on individual borrower
            circumstances and applicable lender guidelines. Information is
            educational and is not a commitment to lend.
          </p>
        </div>
      </section>
    </main>
  );
}

export default MortgageGamePlan;