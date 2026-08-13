import {
  Home,
  ShieldCheck,
  Briefcase,
  MoveRight,
  Building2,
  BadgeDollarSign,
  Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Home,
    title: "First-Time Homebuyers",
    text: "Buying your first home doesn't have to be confusing. I'll walk you through every step, explain your options in plain English, and help you buy with confidence.",
    link: "/first-time-homebuyers",
  },
  {
    icon: Landmark,
    title: "Conventional & FHA Loans",
    text: "Whether you're putting 3% down or 20% down, we'll compare your options and build the financing strategy that best fits your goals—not just today's purchase.",
    link: "/fha-loans",
  },
  {
    icon: ShieldCheck,
    title: "VA Loans",
    text: "You've earned one of the best mortgage benefits available. I'll help you maximize your VA eligibility while making the process simple and stress-free.",
    link: "/va-loans-texas",
  },
  {
    icon: MoveRight,
    title: "Buy Before You Sell",
    text: "Use the equity in your current home to purchase your next home first, eliminate contingent offers, and move on your own timeline.",
    link: "/buy-before-you-sell",
  },
  {
    icon: Briefcase,
    title: "Self-Employed & Non-Traditional Income",
    text: "Own a business or have income that doesn't fit the traditional mold? We'll explore flexible loan programs designed for entrepreneurs and self-employed professionals.",
    link: "/contact",
  },
  {
    icon: Building2,
    title: "Investment Properties",
    text: "Whether you're buying your first rental or expanding your portfolio, I'll help you choose financing that supports your long-term investment strategy.",
    link: "/investment-loans",
  },
  {
    icon: BadgeDollarSign,
    title: "Refinancing",
    text: "Whether your goal is lowering your payment, accessing equity, or consolidating debt, we'll determine if refinancing still makes sense in today's market.",
    link: "/refinancing",
  },
];

function LoanSolutions() {
  return (
    <section className="solutions-section" id="solutions">
      <div className="section-heading solutions-heading">
        <div>
          <p className="eyebrow">Loan Solutions</p>

          <h2>
            One Mortgage Doesn't Fit Everyone.
            <br />
            Your Strategy Should Be Built Around You.
          </h2>
        </div>

        <p>
          Every borrower has unique goals, finances, and priorities. That's
          why every client starts with a Mortgage Game Plan™. Together we'll
          build a financing strategy that fits your situation—not force you
          into a one-size-fits-all loan.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((item) => {
          const Icon = item.icon;

          return (
            <article className="solution-card" key={item.title}>
              <div className="solution-icon">
                <Icon size={34} strokeWidth={2.2} />
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <Link to={item.link}>
                Learn More
                <b aria-hidden="true"> →</b>
              </Link>
            </article>
          );
        })}
      </div>

      <div className="solutions-footer">
        <h3>Don't See Your Situation?</h3>

        <p>
          Jumbo loans, bank statement loans, investment financing, renovation
          loans, bridge loans, and many other options may be available. If
          your situation is unique, let's build a strategy together.
        </p>

        <Link className="button button-primary" to="/contact">
          Let's Build Your Mortgage Game Plan™
        </Link>
      </div>
    </section>
  );
}

export default LoanSolutions;