import { PiggyBank, Home, TrendingUp, CheckCircle } from "lucide-react";

export default function ConventionalLoans() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">CONVENTIONAL HOME LOANS</p>

          <h1>
            The Most Popular
            <span>Mortgage in America.</span>
          </h1>

          <p className="hero-subtitle">
            Conventional loans offer excellent flexibility, competitive interest
            rates, and multiple down payment options. Whether you're purchasing
            your first home or your fifth, we'll help determine if a
            conventional loan is your best financial strategy.
          </p>

          <a
            className="primary-button"
            href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
            target="_blank"
            rel="noreferrer"
          >
            Schedule Your Mortgage Game Plan™
          </a>
        </div>
      </section>

      <section className="page-section light">
        <div className="container">

          <div className="section-heading">
            <p className="eyebrow">WHY CONVENTIONAL?</p>
            <h2>Flexible Financing for Many Buyers</h2>
          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <PiggyBank size={42} />
              <h3>Low Down Payment Options</h3>
              <p>
                Many qualified buyers can purchase with as little as 3% down.
              </p>
            </div>

            <div className="feature-card">
              <TrendingUp size={42} />
              <h3>Competitive Interest Rates</h3>
              <p>
                Strong credit and stable finances can qualify for excellent
                pricing.
              </p>
            </div>

            <div className="feature-card">
              <Home size={42} />
              <h3>Primary, Second Homes & Investment</h3>
              <p>
                Conventional financing works for many different property types.
              </p>
            </div>

            <div className="feature-card">
              <CheckCircle size={42} />
              <h3>Personalized Strategy</h3>
              <p>
                We'll compare conventional financing against every other option
                before making a recommendation.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="page-section">
        <div className="container">

          <div className="section-heading">
            <p className="eyebrow">LET'S BUILD YOUR PLAN</p>

            <h2>There's No One-Size-Fits-All Mortgage.</h2>

            <p>
              The best loan isn't always the one with the lowest rate. We'll
              build a strategy around your long-term financial goals so you can
              make a confident decision.
            </p>
          </div>

          <a
            className="primary-button"
            href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
            target="_blank"
            rel="noreferrer"
          >
            Schedule Your Free Consultation
          </a>

        </div>
      </section>
    </>
  );
}