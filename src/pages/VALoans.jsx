import { ShieldCheck, BadgeDollarSign, Home, Medal, CheckCircle } from "lucide-react";

export default function VALoans() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">VA HOME LOANS</p>

          <h1>
            You've Earned This Benefit.
            <span>Let's Make Sure You Use It Wisely.</span>
          </h1>

          <p className="hero-subtitle">
            VA loans are one of the most powerful home financing tools
            available—but they're also one of the most misunderstood.
            I'll walk you through every step so you can buy with confidence.
          </p>

          <a
            className="primary-button"
            href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
            target="_blank"
            rel="noreferrer"
          >
            Schedule a Free VA Strategy Call
          </a>
        </div>
      </section>

      <section className="page-section light">
        <div className="container">

          <div className="section-heading">
            <p className="eyebrow">WHY VETERANS CHOOSE VA LOANS</p>

            <h2>The Most Powerful Mortgage Available</h2>

            <p>
              VA loans offer advantages that conventional financing simply
              cannot match for eligible veterans and active-duty service members.
            </p>
          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <ShieldCheck size={42} />
              <h3>No Down Payment</h3>
              <p>
                Qualified borrowers can often purchase a home with
                100% financing.
              </p>
            </div>

            <div className="feature-card">
              <BadgeDollarSign size={42} />
              <h3>No Monthly Mortgage Insurance</h3>
              <p>
                Unlike FHA and many conventional loans,
                VA loans don't require monthly mortgage insurance.
              </p>
            </div>

            <div className="feature-card">
              <Home size={42} />
              <h3>Competitive Interest Rates</h3>
              <p>
                VA loans frequently offer lower interest rates than
                comparable conventional financing.
              </p>
            </div>

            <div className="feature-card">
              <Medal size={42} />
              <h3>Flexible Qualification</h3>
              <p>
                VA guidelines are often more forgiving than other
                loan programs.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="page-section">
        <div className="container">

          <div className="section-heading">
            <p className="eyebrow">THE PROCESS</p>

            <h2>What to Expect</h2>
          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <CheckCircle size={36}/>
              <h3>1. Verify Eligibility</h3>
              <p>
                We'll confirm your Certificate of Eligibility (COE)
                and determine your available entitlement.
              </p>
            </div>

            <div className="feature-card">
              <CheckCircle size={36}/>
              <h3>2. Build Your Strategy</h3>
              <p>
                We'll review income, assets, monthly payments,
                and determine the best financing approach.
              </p>
            </div>

            <div className="feature-card">
              <CheckCircle size={36}/>
              <h3>3. Get Pre-Approved</h3>
              <p>
                A strong pre-approval helps you shop confidently
                and make competitive offers.
              </p>
            </div>

            <div className="feature-card">
              <CheckCircle size={36}/>
              <h3>4. Close With Confidence</h3>
              <p>
                I'll stay with you from contract to closing,
                answering every question along the way.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}