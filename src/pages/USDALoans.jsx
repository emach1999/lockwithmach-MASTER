import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";

function USDALoans() {
  return (
    <>
      <main>

        <section className="page-hero">
          <div className="container">

            <p className="eyebrow">
              USDA HOME LOANS
            </p>

            <h1>
              Buy A Home With
              <span>Zero Down Payment.</span>
            </h1>

            <p className="hero-subtitle">
              If you're purchasing in an eligible rural or suburban area,
              a USDA loan may allow you to finance 100% of the purchase
              price with competitive interest rates and flexible qualifying
              guidelines.
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
              Why Buyers Love USDA Loans
            </h2>

            <div className="feature-grid">

              <div className="feature-card">
                <h3>Zero Down Payment</h3>
                <p>
                  Qualified buyers can finance up to 100% of the home's
                  purchase price.
                </p>
              </div>

              <div className="feature-card">
                <h3>Competitive Interest Rates</h3>
                <p>
                  USDA loans often offer lower interest rates than many
                  conventional financing options.
                </p>
              </div>

              <div className="feature-card">
                <h3>Flexible Credit Guidelines</h3>
                <p>
                  Many buyers who don't qualify for conventional financing
                  may still qualify for USDA financing.
                </p>
              </div>

              <div className="feature-card">
                <h3>Lower Monthly Costs</h3>
                <p>
                  With no down payment requirement, many families can become
                  homeowners much sooner than expected.
                </p>
              </div>

            </div>

          </div>

        </section>

        <section className="page-section light">

          <div className="container">

            <h2>
              Do You Qualify?
            </h2>

            <p className="hero-subtitle">
              USDA loans have income limits and property eligibility
              requirements. We'll quickly determine whether this program
              is available for your situation.
            </p>

            <a
              className="primary-button"
              href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
              target="_blank"
              rel="noreferrer"
            >
              Check My Eligibility
            </a>

          </div>

        </section>

        <section className="page-section">

          <div className="container">

            <h2>
              Let's Build Your Mortgage Game Plan™
            </h2>

            <p className="hero-subtitle">
              Every buyer deserves to know all of their financing options.
              I'll compare USDA, FHA, Conventional, and VA loans so you can
              confidently choose the best one.
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

export default USDALoans;