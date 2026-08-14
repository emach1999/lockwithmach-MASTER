import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MortgageRates from "./components/MortgageRates";
import TrustIndicators from "./components/TrustIndicators";
import WhyChooseUs from "./components/WhyChooseUs";
import MortgageGamePlanSection from "./components/MortgageGamePlan";
import LoanSolutions from "./components/LoanSolutions";
import AboutEric from "./components/AboutEric";
import Testimonials from "./components/Testimonials";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import LeadForm from "./components/LeadForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";

import MortgageGamePlanPage from "./pages/MortgageGamePlan";
import VALoansPage from "./pages/VALoans";
import FHALoansPage from "./pages/FHALoans";
import ConventionalLoansPage from "./pages/ConventionalLoans";
import FirstTimeHomebuyersPage from "./pages/FirstTimeHomebuyers";
import InvestmentLoansPage from "./pages/InvestmentLoans";
import RefinancePage from "./pages/Refinance";
import BuyBeforeYouSell from "./pages/BuyBeforeYouSell";
import MortgageCalculator from "./pages/MortgageCalculator";
import HomeAffordabilityCalculator from "./pages/HomeAffordabilityCalculator";
import RefinanceCalculator from "./pages/RefinanceCalculator";
import RentVsBuyCalculator from "./pages/RentVsBuyCalculator";
import ClosingCostCalculator from "./pages/ClosingCostCalculator";

import "./App.css";

const seoByPath = {
  "/": {
    title: "Texas Mortgage Lender | Lock With Mach | Eric Mach",
    description:
      "Texas mortgage guidance with a clear Mortgage Game Plan™. Explore Conventional, FHA, VA, investment, refinance, and homebuyer loan options with Eric Mach.",
  },

  "/mortgage-game-plan": {
    title: "Mortgage Game Plan™ | Texas Home Loan Strategy | Lock With Mach",
    description:
      "Build a personalized Mortgage Game Plan™ for your Texas home purchase. Understand loan options, down payment strategies, monthly payments, and next steps before you make an offer.",
  },

  "/mortgage-calculator": {
    title: "Mortgage Payment Calculator | Texas Homebuyers | Lock With Mach",
    description:
      "Estimate your monthly mortgage payment including principal, interest, property taxes, homeowners insurance, HOA dues, and mortgage insurance.",
  },

  "/home-affordability-calculator": {
    title: "Home Affordability Calculator | How Much Home Can I Afford?",
    description:
      "Estimate how much home you may be able to afford based on income, monthly debts, down payment, interest rate, property taxes, insurance, and debt-to-income ratio.",
  },

  "/refinance-calculator": {
    title: "Refinance Calculator | Estimate Mortgage Savings | Lock With Mach",
    description:
      "Compare your current mortgage with a potential refinance. Estimate monthly savings, new payments, closing costs, and your break-even point.",
  },

  "/rent-vs-buy-calculator": {
    title: "Rent vs Buy Calculator | Texas Homebuyers | Lock With Mach",
    description:
      "Compare renting versus buying a home over time. Explore estimated payments, rent increases, home appreciation, equity, and potential long-term costs.",
  },

  "/closing-cost-calculator": {
    title: "Closing Cost Calculator | Estimate Cash to Close | Lock With Mach",
    description:
      "Estimate your potential cash to close including down payment, lender fees, title costs, appraisal, prepaid taxes, insurance, escrows, and available credits.",
  },

  "/first-time-homebuyers": {
    title: "First-Time Homebuyer Loans in Texas | Lock With Mach",
    description:
      "Explore Texas first-time homebuyer financing, low down payment mortgage options, potential assistance programs, and a personalized Mortgage Game Plan™.",
  },

  "/va-loans-texas": {
    title: "VA Loans in Texas | Veteran Home Loans | Lock With Mach",
    description:
      "Explore VA home loan benefits for eligible Texas veterans and service members, including flexible financing, potential zero-down options, and personalized mortgage guidance.",
  },

  "/fha-loans": {
    title: "FHA Loans in Texas | FHA Mortgage Guidance | Lock With Mach",
    description:
      "Learn how FHA loans may help Texas homebuyers with flexible qualification guidelines and down payments as low as 3.5% for qualified borrowers.",
  },

  "/conventional-loans": {
    title: "Conventional Loans in Texas | Lock With Mach",
    description:
      "Explore conventional mortgage options for Texas homebuyers, including low down payment strategies, flexible loan structures, and personalized financing guidance.",
  },

  "/investment-loans": {
    title: "Investment Property Loans in Texas | Lock With Mach",
    description:
      "Explore financing options for Texas investment properties, including rental property loans and strategies for building or expanding a real estate portfolio.",
  },

  "/refinancing": {
    title: "Mortgage Refinancing in Texas | Lock With Mach",
    description:
      "Explore Texas mortgage refinancing options for lowering payments, changing loan terms, accessing equity, or consolidating debt when refinancing makes financial sense.",
  },

  "/buy-before-you-sell": {
    title: "Buy Before You Sell in Texas | Home Equity Strategies",
    description:
      "Explore financing strategies that may allow Texas homeowners to purchase their next home before selling their current property and avoid contingent offers.",
  },

  "/contact": {
    title: "Contact Eric Mach | Texas Mortgage Guidance | Lock With Mach",
    description:
      "Tell Eric Mach what you're trying to accomplish and start building a personalized Mortgage Game Plan™ for your Texas home purchase, refinance, or investment property.",
  },
};

function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const seo = seoByPath[location.pathname] || {
      title: "Lock With Mach | Texas Mortgage Guidance",
      description:
        "Clear mortgage guidance, personalized strategy, and home loan education for buyers, homeowners, veterans, and investors throughout Texas.",
    };

    document.title = seo.title;

    let descriptionTag = document.querySelector('meta[name="description"]');

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute("content", seo.description);
  }, [location.pathname]);

  return null;
}

function RevealSections() {
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => {
        section.classList.add("is-visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");

      const timer = setTimeout(() => {
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    return undefined;
  }, [location.pathname, location.hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />

      <section className="reveal-section">
        <MortgageRates />
      </section>

      <section className="reveal-section">
        <TrustIndicators />
      </section>

      <section className="reveal-section">
        <WhyChooseUs />
      </section>

      <section className="reveal-section">
        <MortgageGamePlanSection />
      </section>

      <section className="reveal-section">
        <LoanSolutions />
      </section>

      <section className="reveal-section">
        <AboutEric />
      </section>

      <section className="reveal-section">
        <Testimonials />
      </section>

      <section className="reveal-section">
        <ServiceArea />
      </section>

      <section className="reveal-section">
        <FAQ />
      </section>

      <section className="reveal-section" id="contact">
        <ContactSection />
      </section>

      <section className="reveal-section">
        <LeadForm />
      </section>

      <section className="reveal-section">
        <FinalCTA />
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <main className="contact-page">
      <section className="reveal-section is-visible">
        <ContactSection />
      </section>

      <section className="reveal-section is-visible">
        <LeadForm />
      </section>

      <section className="reveal-section is-visible">
        <FinalCTA />
      </section>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <section className="not-found-content">
        <p className="section-kicker">Page not found</p>

        <h1>Let's get you back on the right path.</h1>

        <p>
          The page you requested may have moved or may no longer be available.
        </p>

        <a className="primary-button" href="/">
          Return Home
        </a>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="site-shell">
      <SEOManager />
      <ScrollManager />
      <RevealSections />

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/mortgage-game-plan"
          element={<MortgageGamePlanPage />}
        />

        <Route
          path="/mortgage-calculator"
          element={<MortgageCalculator />}
        />

        <Route
          path="/home-affordability-calculator"
          element={<HomeAffordabilityCalculator />}
        />

        <Route
          path="/refinance-calculator"
          element={<RefinanceCalculator />}
        />

        <Route
          path="/rent-vs-buy-calculator"
          element={<RentVsBuyCalculator />}
        />

        <Route
          path="/closing-cost-calculator"
          element={<ClosingCostCalculator />}
        />

        <Route
          path="/first-time-homebuyers"
          element={<FirstTimeHomebuyersPage />}
        />

        <Route
          path="/va-loans-texas"
          element={<VALoansPage />}
        />

        <Route
          path="/fha-loans"
          element={<FHALoansPage />}
        />

        <Route
          path="/conventional-loans"
          element={<ConventionalLoansPage />}
        />

        <Route
          path="/investment-loans"
          element={<InvestmentLoansPage />}
        />

        <Route
          path="/refinancing"
          element={<RefinancePage />}
        />

        <Route
          path="/buy-before-you-sell"
          element={<BuyBeforeYouSell />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>

      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;