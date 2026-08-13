import {
  Home,
  ShieldCheck,
  Briefcase,
  MoveRight,
  Building2,
  BadgeDollarSign,
  Landmark,
  KeyRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Home,
    title: "First-Time Homebuyers",
    text: "Buying your first home doesn't have to be confusing. I'll explain your financing options, down payment strategies, and the steps ahead so you can buy with confidence.",
    link: "/first-time-homebuyers",
  },
  {
    icon: Landmark,
    title: "Conventional Loans",
    text: "Flexible financing for first-time buyers, move-up buyers, and homeowners with a wide range of down payment options and financial goals.",
    link: "/conventional-loans",
  },
  {
    icon: KeyRound,
    title: "FHA Loans",
    text: "FHA financing can provide a lower down payment and flexible qualification options. We'll determine whether FHA fits your situation and long-term goals.",
    link: "/fha-loans",
  },
  {
    icon: ShieldCheck,
    title: "VA Loans",
    text: "For eligible veterans and service members, VA financing can provide powerful homebuying benefits. I'll help you understand and maximize the options you've earned.",
    link: "/va-loans-texas",
  },
  {
    icon: MoveRight,
    title: "Buy Before You Sell",
    text: "Explore strategies that may allow you to use your existing home equity to purchase your next home before selling your current one.",
    link: "/buy-before-you-sell",
  },
  {
    icon: Briefcase,
    title: "Self-Employed & Alternative Income",
    text: "If traditional income documentation doesn't tell your whole financial story, we'll explore financing options designed for self-employed and non-traditional borrowers.",
    link: "/contact",
  },
  {
    icon: Building2,
    title: "Investment Properties",
    text: "From your first rental property to an expanding portfolio, we'll explore financing strategies designed around your investment goals.",
    link: "/investment-loans",
  },
  {
    icon: BadgeDollarSign,
    title: "Refinancing",
    text: "Whether you're looking to access equity, restructure debt, change your loan terms, or lower your payment, we'll determine whether refinancing makes financial sense.",
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
            Your Strategy Shouldn't Either.
          </h2>
        </div>

        <p>
          Your income, goals, property, down payment, and timeline are unique.
          That's why we'll compare your options and build a Mortgage Game Plan™
          around your situation instead of forcing you into a one-size-fits-all
          solution.
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
          Jumbo, USDA, bank statement, DSCR, renovation, bridge, and other
          financing options may also be available. If your situation doesn't
          fit neatly into one of these categories, let's talk about it.
        </p>

        <Link className="button button-primary" to="/contact">
          Build My Mortgage Game Plan™
        </Link>
      </div>
    </section>
  );
}

export default LoanSolutions;