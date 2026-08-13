export default function MortgageRates() {
  return (
    <section className="mortgage-rates-section">
      <div className="container">

        <div className="market-badge">
          📈 LIVE MORTGAGE MARKET
        </div>

        <p className="rates-intro">
          I believe informed buyers make confident buyers. These national
          mortgage rate averages are updated automatically each day to help
          you understand today's market. Your personalized interest rate will
          depend on your credit profile, loan program, down payment, and
          financial goals.
        </p>

        <div className="rates-card">

          <div
            className="mnd-rates-widget"
            style={{
              width: "650px",
              height: "340px",
              fontSize: "12px",
              margin: "0 auto",
            }}
          >
            <div
              className="w-header"
              style={{
                textAlign: "center",
                padding: "4px 0",
                backgroundColor: "#154070",
                color: "#fff",
              }}
            >
              <a
                href="https://www.mortgagenewsdaily.com/mortgage-rates"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Today's Mortgage Rates
              </a>
            </div>

            <iframe
              src="https://widgets.mortgagenewsdaily.com/widget/f/rates?t=large&sn=true&c=154070&u=&cbu=&w=648&h=290"
              width="650"
              height="290"
              frameBorder="0"
              scrolling="no"
              title="Mortgage Rates"
              style={{
                border: "solid 1px #154070",
                borderWidth: "0 1px",
                width: "650px",
                height: "290px",
                display: "block",
              }}
            />

            <div
              className="w-footer"
              style={{
                textAlign: "center",
                padding: "4px 0",
                backgroundColor: "#154070",
                color: "#fff",
              }}
            >
              View More{" "}
              <a
                href="https://www.mortgagenewsdaily.com/mortgage-rates"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Mortgage Rates
              </a>
            </div>
          </div>

        </div>

        <p className="rates-disclaimer">
          Mortgage rates shown are national market averages provided by
          Mortgage News Daily and are for informational purposes only.
          Contact me for a personalized rate quote based on your unique
          financial situation.
        </p>

        <div className="rates-cta">
          <a href="#contact" className="primary-button">
            Schedule Your Mortgage Game Plan™
          </a>
        </div>

      </div>
    </section>
  );
}