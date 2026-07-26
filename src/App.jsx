import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustIndicators from "./components/TrustIndicators";
import WhyChooseUs from "./components/WhyChooseUs";
import MortgageGamePlanSection from "./components/MortgageGamePlan";
import LoanSolutions from "./components/LoanSolutions";
import AboutEric from "./components/AboutEric";
import Testimonials from "./components/Testimonials";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
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

import "./App.css";

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

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />

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
      <ScrollToTop />
      <RevealSections />

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/mortgage-game-plan"
          element={<MortgageGamePlanPage />}
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