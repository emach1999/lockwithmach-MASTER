import ericPhoto from "../assets/eric-mach.jpg";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Complex Mortgage Decisions. Clear Guidance.</p>
        <h1>Don&apos;t Just Get Pre-Approved. <span>Get a Game Plan.</span></h1>
        <p className="hero-lead">
          Clear, personal mortgage guidance from a teacher, coach, and licensed mortgage loan originator who believes you should understand every move.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="https://calendar.app.google/RgxDCZDHUD7gUCXc6" target="_blank" rel="noreferrer">
            Build My Mortgage Game Plan™
          </a>
          <a className="button button-secondary" href="tel:2146839034">Call Eric</a>
        </div>
        <div className="hero-proof" aria-label="Key benefits">
          <span>Plain-English explanations</span>
          <span>Personal strategy</span>
          <span>Serving Texas borrowers</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo-wrap">
          <img src={ericPhoto} alt="Eric Mach, mortgage loan originator" />
          <div className="hero-photo-card">
            <strong>26+ Years</strong>
            <span>Educating, coaching, and guiding people forward</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
