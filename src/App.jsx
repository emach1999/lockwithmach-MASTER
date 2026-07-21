import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustIndicators from "./components/TrustIndicators";
import WhyChooseUs from "./components/WhyChooseUs";
import MortgageGamePlan from "./components/MortgageGamePlan";
import LoanSolutions from "./components/LoanSolutions";
import AboutEric from "./components/AboutEric";
import Testimonials from "./components/Testimonials";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import "./App.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <div className="reveal-section"><TrustIndicators /></div>
        <div className="reveal-section"><WhyChooseUs /></div>
        <div className="reveal-section"><MortgageGamePlan /></div>
        <div className="reveal-section"><LoanSolutions /></div>
        <div className="reveal-section"><AboutEric /></div>
        <div className="reveal-section"><Testimonials /></div>
        <div className="reveal-section"><ServiceArea /></div>
        <div className="reveal-section"><FAQ /></div>
        <div className="reveal-section"><ContactSection /></div>
        <div className="reveal-section"><FinalCTA /></div>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
