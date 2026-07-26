import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";

function BuyBeforeYouSell() {
  return (
    <>
      <Header />

      <main>

        <section className="page-hero">
          <div className="container">

            <p className="eyebrow">
              BUY BEFORE YOU SELL
            </p>

            <h1>
              Buy Your Next Home
              <span>Before You Sell Your Current One.</span>
            </h1>

            <p className="hero-subtitle">
              Avoid contingent offers, eliminate the stress of timing two
              closings, and move into your new home before putting your
              current home on the market.
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
              Why Homeowners Love This Strategy
            </h2>

            <div className="feature-grid">

              <div className="feature-card">
                <h3>No Contingent Offer</h3>
                <p>
                  Make a stronger offer because you don't have to wait for
                  your current home to sell first.
                </p>
              </div>

              <div className="feature-card">
                <h3>Move Once</h3>
                <p>
                  Skip temporary housing and storage units. Move directly
                  into your new home.
                </p>
              </div>

              <div className="feature-card">
                <h3>Sell With Less Pressure</h3>
                <p>
                  Once you've moved out, your current home is easier to
                  prepare, stage, and show to buyers.
                </p>
              </div>

              <div className="feature-card">
                <h3>More Negotiating Power</h3>
                <p>
                  You're no longer racing the clock, allowing you to make
                  smarter financial decisions.
                </p>
              </div>

            </div>

          </div>

        </section>

        <section className="page-section light">

          <div className="container">

            <h2>
              How It Works
            </h2>

            <div className="feature-grid">

              <div className="feature-card">
                <h3>1. Unlock Your Equity</h3>
                <p>
                  Use the equity in your current home to help purchase your
                  next one.
                </p>
              </div>

              <div className="feature-card">
                <h3>2. Buy Your New Home</h3>
                <p>
                  Move into your new home first without worrying about
                  coordinating two closings.
                </p>
              </div>

              <div className="feature-card">
                <h3>3. Sell Your Previous Home</h3>
                <p>
                  Once you're comfortably moved, list your previous home
                  without the pressure of immediate deadlines.
                </p>
              </div>

            </div>

          </div>

        </section>

        <section className="page-section">

          <div className="container">

            <h2>
              Is This Program Right For You?
            </h2>

            <p className="hero-subtitle">
              Every homeowner's situation is different.
              We'll review your equity, financing options,
              and timeline to determine whether this strategy
              makes sense for your family.
            </p>

            <a
              className="primary-button"
              href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
              target="_blank"
              rel="noreferrer"
            >
              Build My Mortgage Game Plan™
            </a>

          </div>

        </section>

      </main>

      <Footer />

      <StickyCTA />

    </>
  );
}

export default BuyBeforeYouSell;