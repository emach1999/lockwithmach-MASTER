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
    title: "Buying Your First Home",
    text: "Buying your first home shouldn't feel overwhelming. I'll explain every step, answer every question, and help you choose the financing strategy that's right for you.",
    link: "/first-time-homebuyers",
  },
  {
    icon: Landmark,
    title: "FHA & Conventional Loans",
    text: "Whether you're purchasing with a low down payment or looking for the flexibility of a conventional mortgage, we'll compare your options and build the strategy that fits your goals.",
    link: "/fha-loans",
  },
  {
    icon: ShieldCheck,
    title: "VA Loans",
    text: "You've earned one of the best mortgage benefits available. I'll help you understand every advantage and maximize what you've earned.",
    link: "/va-loans-texas",
  },
  {
    icon: MoveRight,
    title: "Buy Before You Sell",
    text: "Use the equity in your current home to buy your next one first, avoid contingent offers, and move on your own timeline.",
    link: "/buy-before-you-sell",
  },
  {
    icon: Briefcase,
    title: "Self-Employed",
    text: "Business owner? Self-employed? Traditional income isn't your only option. We'll explore bank statement and other flexible lending solutions.",
    link: "/contact",
  },
  {
    icon: Building2,
    title: "Investment Properties",
    text: "Whether you're buying your first rental or expanding your portfolio, we'll create a financing strategy that supports your long-term investment goals.",
    link: "/investment-loans",
  },
  {
    icon: BadgeDollarSign,
    title: "Refinancing",
    text: "Reduce your payment, access equity, consolidate debt, or simply review whether refinancing still makes sense in today's market.",
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
            Every Homebuyer Has a Different Story.
            <br />
            Your Mortgage Should Reflect It.
          </h2>
        </div>

        <p>
          Every borrower has different goals, finances, and priorities.
          We start with your Mortgage Game Plan™ and then match you with
          the financing strategy that supports your long-term success—not
          just today's purchase.
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
    </section>
  );
}

export default LoanSolutions;