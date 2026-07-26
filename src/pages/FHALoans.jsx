import { Home, DollarSign, Users, CheckCircle } from "lucide-react";

export default function FHALoans() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">FHA HOME LOANS</p>

          <h1>
            Buy a Home With
            <span>More Flexibility.</span>
          </h1>

          <p className="hero-subtitle">
            FHA loans are designed to help qualified homebuyers purchase with a
            lower down payment and more flexible credit guidelines. Whether
            you're buying your first home or getting back into the market, we'll
            build a strategy that fits your situation.
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
            <p className="eyebrow">WHY FHA?</p>
            <h2>A Great Option for Many Buyers</h2>
          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <DollarSign size={42} />
              <h3>Low Down Payment</h3>
              <p>
                Qualified borrowers may purchase with as little as 3.5% down.
              </p>
            </div>

            <div className="feature-card">
              <Users size={42} />
              <h3>Flexible Credit</h3>
              <p>
                FHA guidelines are often more forgiving than conventional
                financing.
              </p>
            </div>

            <div className="feature-card">
              <Home size={42} />
              <h3>Competitive Rates</h3>
              <p>
                FHA loans often provide attractive interest rates for qualified
                borrowers.
              </p>
            </div>

            <div className="feature-card">
              <CheckCircle size={42} />
              <h3>Teacher-Style Guidance</h3>
              <p>
                I'll explain every step so you know exactly what to expect from
                application to closing.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="page-section">
        <div className="container">

          <div className="section-heading">
            <p className="eyebrow">IS FHA RIGHT FOR YOU?</p>

            <h2>Let's Build the Right Strategy</h2>

            <p>
              Every borrower is different. During your Mortgage Game Plan™
              session we'll compare FHA, Conventional, VA, USDA, and other
              options to determine which loan truly puts you in the strongest
              financial position.
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