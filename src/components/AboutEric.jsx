import ericPhoto from "../assets/eric-mach.jpg";

function AboutEric() {
  return (
    <section className="about-section" id="about">
      <div className="about-photo-wrap">
        <img src={ericPhoto} alt="Eric Mach with Mortgage PRO Loan Services" className="about-photo" />
        <div className="about-photo-badge">
          <strong>Educator. Coach. Mortgage Strategist.</strong>
          <span>NMLS 2510620</span>
        </div>
      </div>
      <div className="about-content">
        <p className="eyebrow">Meet Eric Mach</p>
        <h2>A Teacher&apos;s Clarity. A Coach&apos;s Strategy.</h2>
        <p className="about-intro">A mortgage should never feel confusing, rushed, or overwhelming.</p>
        <p>Before entering mortgage lending, I spent more than 26 years teaching students and coaching athletes. Those experiences taught me that complex decisions become easier with clear explanations, honest communication, and a strong game plan.</p>
        <p>Today, I bring that same approach to home financing through Mortgage PRO Loan Services. I help clients understand their options, build a strategy around their goals, and move forward with confidence.</p>
        <div className="about-promise">
          <span>My Promise</span>
          <strong>You will never be treated like just another loan number.</strong>
        </div>
        <a className="button button-primary" href="https://calendar.app.google/RgxDCZDHUD7gUCXc6" target="_blank" rel="noreferrer">Schedule My Free Strategy Call</a>
      </div>
    </section>
  );
}

export default AboutEric;
