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
          make. As a teacher, coach, and licensed mortgage loan originator,
          I'll help you understand every option so you can move forward with
          confidence—not confusion.
        </p>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
            target="_blank"
            rel="noreferrer"
          >
            Build My Mortgage Game Plan™
          </a>

          <a
            className="button button-secondary"
            href="tel:2146839034"
          >
            Call Eric
          </a>
        </div>

        <div className="hero-proof" aria-label="Key benefits">
          <span>Teacher's Heart</span>
          <span>Coach's Strategy</span>
          <span>Serving Homebuyers Across Texas</span>
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
              Teaching, coaching, and helping people make confident decisions.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;