export default function MortgageRates() {
  return (
    <section className="mortgage-rates-section">
      <div className="container">

        <div className="market-badge">
          📈 MORTGAGE MARKET
        </div>

        <p className="rates-intro">
          Staying informed about the market is an important part of your
          Mortgage Game Plan™. The rates below are national averages provided
          by Mortgage News Daily and are intended to give you a general view
          of current market conditions. Your actual rate will depend on your
          specific loan scenario.
        </p>

        <div className="rates-card">
          <div
            className="mnd-rates-widget"
            style={{
              width: "650px",
              maxWidth: "100%",
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
              title="National Mortgage Rate Averages"
              style={{
                border: "solid 1px #154070",
                borderWidth: "0 1px",
                width: "100%",
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
              Data provided by{" "}
              <a
                href="https://www.mortgagenewsdaily.com/mortgage-rates"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Mortgage News Daily
              </a>
            </div>
          </div>
        </div>

        <p className="rates-disclaimer">
          Rates shown are national averages for informational purposes only
          and are not an offer to lend or a personalized rate quote. Actual
          rates, fees, and loan terms vary based on the borrower, property,
          loan program, market conditions, and other factors.
        </p>

        <div className="rates-cta">
          <a href="#contact" className="primary-button">
            Get My Personalized Mortgage Game Plan™
          </a>
        </div>

      </div>
    </section>
  );
}