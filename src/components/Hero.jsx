import ericPhoto from "../assets/eric-mach.jpg";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          Complex Mortgage Decisions. Clear Guidance.
        </p>

        <h1>
          Don't Just Get Pre-Approved.
          <span> Get a Mortgage Game Plan™.</span>
        </h1>

        <p className="hero-lead">
          Buying a home is one of the biggest financial decisions you'll ever
          make—and you shouldn't have to navigate it alone. As a former advanced
          science teacher and Texas football coach, I spent 26 years helping
          people understand complex concepts and succeed in high-pressure
          situations. Today, I use that same approach to help Texas homebuyers
          make informed decisions with clarity, confidence, and a personalized
          Mortgage Game Plan™.
        </p>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href="#lead-form"
          >
            Build My Mortgage Game Plan™
          </a>

          <a
            className="button button-secondary"
            href="tel:2146839034"
          >
            Call/Text: (214) 683-9034
          </a>
        </div>

        <div className="hero-proof" aria-label="Why choose Lock With Mach?">
          <span>26 Years Educating Others</span>
          <span>Licensed Texas Mortgage Professional</span>
          <span>Conventional • FHA • VA • Investment Loans</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo-wrap">
          <img
            src={ericPhoto}
            alt="Eric Mach, Mortgage Loan Originator"
          />

          <div className="hero-photo-card">
            <strong>26+ Years</strong>
            <span>
              Helping people understand complex decisions with confidence.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;