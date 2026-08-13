import { useMemo, useState } from "react";
import {
  Calculator,
  Home,
  DollarSign,
  Percent,
  Banknote,
} from "lucide-react";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(400000);

  const [downPaymentMode, setDownPaymentMode] = useState("percent");
  const [downPaymentPercent, setDownPaymentPercent] = useState(5);
  const [downPaymentDollars, setDownPaymentDollars] = useState(20000);

  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.8);
  const [insurance, setInsurance] = useState(2400);
  const [hoa, setHoa] = useState(0);
  const [mortgageInsurance, setMortgageInsurance] = useState(0);

  const results = useMemo(() => {
    const price = Number(homePrice) || 0;
    const rate = Number(interestRate) || 0;
    const years = Number(loanTerm) || 30;
    const taxRate = Number(propertyTaxRate) || 0;
    const annualInsurance = Number(insurance) || 0;
    const monthlyHoa = Number(hoa) || 0;
    const monthlyMI = Number(mortgageInsurance) || 0;

    let down = 0;

    if (downPaymentMode === "percent") {
      down = price * ((Number(downPaymentPercent) || 0) / 100);
    } else {
      down = Number(downPaymentDollars) || 0;
    }

    down = Math.min(Math.max(down, 0), price);

    const downPercent = price > 0 ? (down / price) * 100 : 0;
    const loanAmount = Math.max(price - down, 0);

    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;

    let principalInterest = 0;

    if (loanAmount > 0 && monthlyRate > 0) {
      principalInterest =
        loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1));
    } else if (loanAmount > 0 && numberOfPayments > 0) {
      principalInterest = loanAmount / numberOfPayments;
    }

    const monthlyTaxes = (price * (taxRate / 100)) / 12;
    const monthlyInsurance = annualInsurance / 12;

    const totalMonthly =
      principalInterest +
      monthlyTaxes +
      monthlyInsurance +
      monthlyHoa +
      monthlyMI;

    return {
      down,
      downPercent,
      loanAmount,
      principalInterest,
      monthlyTaxes,
      monthlyInsurance,
      monthlyHoa,
      monthlyMI,
      totalMonthly,
    };
  }, [
    homePrice,
    downPaymentMode,
    downPaymentPercent,
    downPaymentDollars,
    interestRate,
    loanTerm,
    propertyTaxRate,
    insurance,
    hoa,
    mortgageInsurance,
  ]);

  const money = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value || 0);

  const inputStyle = {
    width: "100%",
    padding: "14px 15px",
    borderRadius: "10px",
    border: "1px solid #d7dde5",
    fontSize: "16px",
    color: "#082b50",
    background: "#ffffff",
    boxSizing: "border-box",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "7px",
    fontWeight: "700",
    color: "#082b50",
    fontSize: "14px",
  };

  const fieldStyle = {
    marginBottom: "18px",
  };

  const breakdownRow = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    padding: "12px 0",
    borderBottom: "1px solid rgba(255,255,255,.14)",
  };

  const toggleButton = (active) => ({
    flex: 1,
    border: "none",
    borderRadius: "8px",
    padding: "11px 12px",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "14px",
    background: active ? "#082b50" : "transparent",
    color: active ? "#ffffff" : "#53677b",
  });

  const quickButton = {
    border: "1px solid #d7dde5",
    background: "#ffffff",
    color: "#082b50",
    borderRadius: "8px",
    padding: "9px 11px",
    cursor: "pointer",
    fontWeight: "700",
  };

  const selectDownPaymentPercent = (percent) => {
    const price = Number(homePrice) || 0;

    setDownPaymentMode("percent");
    setDownPaymentPercent(percent);
    setDownPaymentDollars(price * (percent / 100));
  };

  const switchToPercent = () => {
    const price = Number(homePrice) || 0;
    const dollars = Number(downPaymentDollars) || 0;

    if (price > 0) {
      setDownPaymentPercent((dollars / price) * 100);
    }

    setDownPaymentMode("percent");
  };

  const switchToDollars = () => {
    const price = Number(homePrice) || 0;
    const percent = Number(downPaymentPercent) || 0;

    setDownPaymentDollars(price * (percent / 100));
    setDownPaymentMode("dollars");
  };

  return (
    <main style={{ background: "#f7f8fa", minHeight: "100vh" }}>
      <section
        style={{
          background:
            "linear-gradient(135deg, #061d35 0%, #0b3762 100%)",
          color: "white",
          textAlign: "center",
          padding: "72px 24px 64px",
        }}
      >
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#e4b43f",
              fontWeight: "800",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontSize: "13px",
              marginBottom: "18px",
            }}
          >
            <Calculator size={18} />
            Mortgage Payment Calculator
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 66px)",
              lineHeight: "1.03",
              margin: "0 0 22px",
            }}
          >
            Turn a Home Price Into
            <br />
            a Monthly Payment.
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#dce8f4",
            }}
          >
            Explore different home prices, down payments, and interest rates
            to see how each decision could affect your estimated monthly
            housing payment.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "32px",
              boxShadow: "0 15px 45px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <Home size={28} color="#d29b18" />

              <h2
                style={{
                  margin: 0,
                  color: "#082b50",
                  fontSize: "28px",
                }}
              >
                Your Numbers
              </h2>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Home Price</label>

              <input
                style={inputStyle}
                type="number"
                min="0"
                value={homePrice}
                onChange={(e) => setHomePrice(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Down Payment</label>

              <div
                style={{
                  display: "flex",
                  background: "#eef2f6",
                  borderRadius: "10px",
                  padding: "4px",
                  marginBottom: "12px",
                }}
              >
                <button
                  type="button"
                  style={toggleButton(downPaymentMode === "percent")}
                  onClick={switchToPercent}
                >
                  <Percent
                    size={15}
                    style={{ verticalAlign: "middle", marginRight: "5px" }}
                  />
                  Percentage
                </button>

                <button
                  type="button"
                  style={toggleButton(downPaymentMode === "dollars")}
                  onClick={switchToDollars}
                >
                  <Banknote
                    size={16}
                    style={{ verticalAlign: "middle", marginRight: "5px" }}
                  />
                  Dollars
                </button>
              </div>

              {downPaymentMode === "percent" ? (
                <input
                  style={inputStyle}
                  type="number"
                  min="0"
                  max="100"
                  step="0.5"
                  value={downPaymentPercent}
                  onChange={(e) =>
                    setDownPaymentPercent(e.target.value)
                  }
                />
              ) : (
                <input
                  style={inputStyle}
                  type="number"
                  min="0"
                  value={downPaymentDollars}
                  onChange={(e) =>
                    setDownPaymentDollars(e.target.value)
                  }
                />
              )}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "12px",
                }}
              >
                {[3, 3.5, 5, 10, 20].map((percent) => (
                  <button
                    key={percent}
                    type="button"
                    style={quickButton}
                    onClick={() => selectDownPaymentPercent(percent)}
                  >
                    {percent}%
                  </button>
                ))}
              </div>

              <div
                style={{
                  marginTop: "12px",
                  padding: "11px 13px",
                  borderRadius: "8px",
                  background: "#f6f8fa",
                  color: "#53677b",
                  fontSize: "13px",
                }}
              >
                {money(results.down)} down
                {" • "}
                {results.downPercent.toFixed(1)}% of purchase price
              </div>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Interest Rate (%)</label>

              <input
                style={inputStyle}
                type="number"
                min="0"
                step="0.125"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Loan Term</label>

              <select
                style={inputStyle}
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              >
                <option value="30">30 Years</option>
                <option value="20">20 Years</option>
                <option value="15">15 Years</option>
                <option value="10">10 Years</option>
              </select>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Estimated Property Tax Rate (% per year)
              </label>

              <input
                style={inputStyle}
                type="number"
                min="0"
                step="0.1"
                value={propertyTaxRate}
                onChange={(e) => setPropertyTaxRate(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Homeowners Insurance ($ per year)
              </label>

              <input
                style={inputStyle}
                type="number"
                min="0"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>HOA ($ per month)</label>

              <input
                style={inputStyle}
                type="number"
                min="0"
                value={hoa}
                onChange={(e) => setHoa(e.target.value)}
              />
            </div>

            <div style={{ ...fieldStyle, marginBottom: 0 }}>
              <label style={labelStyle}>
                Estimated Mortgage Insurance ($ per month)
              </label>

              <input
                style={inputStyle}
                type="number"
                min="0"
                value={mortgageInsurance}
                onChange={(e) =>
                  setMortgageInsurance(e.target.value)
                }
              />
            </div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(145deg, #061d35 0%, #0b3762 100%)",
              color: "white",
              borderRadius: "18px",
              padding: "36px",
              boxShadow: "0 18px 50px rgba(0,0,0,.16)",
              position: "sticky",
              top: "110px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#e4b43f",
                marginBottom: "10px",
              }}
            >
              <DollarSign size={24} />

              <strong>ESTIMATED MONTHLY PAYMENT</strong>
            </div>

            <div
              style={{
                fontSize: "clamp(46px, 7vw, 68px)",
                fontWeight: "800",
                lineHeight: "1",
                margin: "18px 0 10px",
              }}
            >
              {money(results.totalMonthly)}
            </div>

            <p
              style={{
                color: "#bfd0e0",
                marginTop: "0",
                marginBottom: "30px",
              }}
            >
              Estimated total monthly housing payment
            </p>

            <div style={breakdownRow}>
              <span>Principal & Interest</span>
              <strong>{money(results.principalInterest)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Property Taxes</span>
              <strong>{money(results.monthlyTaxes)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Homeowners Insurance</span>
              <strong>{money(results.monthlyInsurance)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>HOA</span>
              <strong>{money(results.monthlyHoa)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Mortgage Insurance</span>
              <strong>{money(results.monthlyMI)}</strong>
            </div>

            <div
              style={{
                marginTop: "26px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              <div
                style={{
                  padding: "18px",
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                }}
              >
                <span
                  style={{
                    color: "#bfd0e0",
                    fontSize: "12px",
                  }}
                >
                  DOWN PAYMENT
                </span>

                <strong
                  style={{
                    display: "block",
                    fontSize: "22px",
                    marginTop: "5px",
                  }}
                >
                  {money(results.down)}
                </strong>
              </div>

              <div
                style={{
                  padding: "18px",
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                }}
              >
                <span
                  style={{
                    color: "#bfd0e0",
                    fontSize: "12px",
                  }}
                >
                  LOAN AMOUNT
                </span>

                <strong
                  style={{
                    display: "block",
                    fontSize: "22px",
                    marginTop: "5px",
                  }}
                >
                  {money(results.loanAmount)}
                </strong>
              </div>
            </div>

            <div
              style={{
                marginTop: "24px",
                padding: "17px",
                borderRadius: "10px",
                background: "rgba(229,184,67,.12)",
                border: "1px solid rgba(229,184,67,.3)",
                color: "#dce8f4",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              <strong style={{ color: "#e5b843" }}>
                Want the real numbers?
              </strong>
              <br />
              I'll compare actual loan options, estimated closing costs,
              and payment strategies for your specific situation.
            </div>

            <a
              href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                background: "#e5b843",
                color: "#061d35",
                fontWeight: "800",
                textDecoration: "none",
                padding: "16px 20px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              Build My Mortgage Game Plan™
            </a>
          </div>
        </div>

        <div
          style={{
            maxWidth: "900px",
            margin: "48px auto 0",
            textAlign: "center",
            color: "#687786",
            lineHeight: "1.7",
            fontSize: "13px",
          }}
        >
          <strong
            style={{
              display: "block",
              color: "#082b50",
              marginBottom: "7px",
            }}
          >
            Important: This calculator provides estimates only.
          </strong>

          Results are provided for informational and educational purposes and
          are not a commitment to lend, an offer of credit, or a personalized
          loan quote. Actual payments, rates, taxes, insurance, mortgage
          insurance, HOA dues, closing costs, fees, and loan terms may vary.
          Loan approval is subject to underwriting, verification of
          information, property eligibility, and program availability.
        </div>
      </section>
    </main>
  );
}