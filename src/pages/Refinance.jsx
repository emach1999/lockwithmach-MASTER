import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";

function Refinance() {
  return (
    <>
      <main>

        <section className="page-hero">
          <div className="container">

            <p className="eyebrow">
              MORTGAGE REFINANCING
            </p>

            <h1>
              Make Your Current Mortgage
              <span>Work Better For You.</span>
            </h1>

            <p className="hero-subtitle">
              Whether you want a lower monthly payment, eliminate debt,
              shorten your loan term, or access your home's equity,
              refinancing may help you achieve your financial goals.
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
              Why Homeowners Refinance
            </h2>

            <div className="feature-grid">

              <div className="feature-card">
                <h3>Lower Monthly Payments</h3>
                <p>
                  A refinance may reduce your monthly mortgage payment
                  depending on current rates and your financial situation.
                </p>
              </div>

              <div className="feature-card">
                <h3>Cash-Out Refinance</h3>
                <p>
                  Use the equity you've built in your home to finance
                  renovations, consolidate debt, or accomplish other
                  financial goals.
                </p>
              </div>

              <div className="feature-card">
                <h3>Shorten Your Loan</h3>
                <p>
                  Switching from a 30-year loan to a 15-year loan may help
                  you pay off your home sooner while reducing total interest.
                </p>
              </div>

              <div className="feature-card">
                <h3>Remove Mortgage Insurance</h3>
                <p>
                  Depending on your loan and home equity, refinancing may
                  eliminate private mortgage insurance.
                </p>
              </div>

            </div>

          </div>

        </section>

        <section className="page-section light">

          <div className="container">

            <h2>
              Is Refinancing Right For You?
            </h2>

            <p className="hero-subtitle">
              Refinancing isn't always the best choice. We'll review your
              current mortgage, your long-term plans, and today's market to
              determine whether it actually saves you money.
            </p>

            <a
              className="primary-button"
              href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
              target="_blank"
              rel="noreferrer"
            >
              Get My Refinance Review
            </a>

          </div>

        </section>

        <section className="page-section">

          <div className="container">

            <h2>
              Let's Build Your Mortgage Game Plan™
            </h2>

            <p className="hero-subtitle">
              Every homeowner's situation is unique. I'll explain your
              refinance options clearly so you can make an informed
              decision with confidence.
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

export default Refinance;