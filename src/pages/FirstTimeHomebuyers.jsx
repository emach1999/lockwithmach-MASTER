import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";

function FirstTimeHomebuyers() {
  return (
    <>
      <main>

        <section className="page-hero">
          <div className="container">

            <p className="eyebrow">
              FIRST-TIME HOMEBUYERS
            </p>

            <h1>
              Your First Home Doesn't Have
              <span>To Be Overwhelming.</span>
            </h1>

            <p className="hero-subtitle">
              Buying your first home is exciting—but it can also feel
              confusing. My job is to simplify every step, answer every
              question, and help you make confident financial decisions.
            </p>

            <a
              className="primary-button"
              href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
              target="_blank"
              rel="noreferrer"
            >
              Schedule My Strategy Call
            </a>

          </div>
        </section>

        <section className="page-section">

          <div className="container">

            <h2>
              What You Can Expect
            </h2>

            <div className="feature-grid">

              <div className="feature-card">
                <h3>Simple Explanations</h3>
                <p>
                  No confusing mortgage jargon. I'll explain everything in
                  plain English so you understand every decision.
                </p>
              </div>

              <div className="feature-card">
                <h3>Loan Options Compared</h3>
                <p>
                  We'll compare Conventional, FHA, USDA, VA and other loan
                  options to find the one that fits your goals.
                </p>
              </div>

              <div className="feature-card">
                <h3>Clear Monthly Payment</h3>
                <p>
                  You'll understand exactly what your monthly payment will
                  look like before you make an offer.
                </p>
              </div>

              <div className="feature-card">
                <h3>No Pressure</h3>
                <p>
                  My goal isn't to sell you a loan. My goal is to help you
                  make the smartest financial decision possible.
                </p>
              </div>

            </div>

          </div>

        </section>

        <section className="page-section light">

          <div className="container">

            <h2>
              The Mortgage Game Plan™
            </h2>

            <p className="hero-subtitle">
              Before you start shopping for homes, we'll build your personal
              Mortgage Game Plan™ so you know your budget, loan options,
              monthly payment, and the smartest strategy for your situation.
            </p>

            <a
              className="primary-button"
              href="/mortgage-game-plan"
            >
              Learn About The Mortgage Game Plan™
            </a>

          </div>

        </section>

        <section className="page-section">

          <div className="container">

            <h2>
              Let's Build Your Plan
            </h2>

            <p className="hero-subtitle">
              As a former teacher, I believe informed buyers make better
              decisions. I'll make sure you understand every step before you
              sign anything.
            </p>

            <a
              className="primary-button"
              href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
              target="_blank"
              rel="noreferrer"
            >
              Schedule My Strategy Call
            </a>

          </div>

        </section>

      </main>

      <Footer />
      <StickyCTA />
    </>
  );
}

export default FirstTimeHomebuyers;