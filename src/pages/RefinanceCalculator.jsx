import { useMemo, useState } from "react";
import {
  Calculator,
  RefreshCw,
  DollarSign,
  TrendingDown,
} from "lucide-react";

export default function RefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState(320000);
  const [currentRate, setCurrentRate] = useState(7.25);
  const [currentTermRemaining, setCurrentTermRemaining] = useState(27);

  const [newRate, setNewRate] = useState(6.25);
  const [newTerm, setNewTerm] = useState(30);
  const [closingCosts, setClosingCosts] = useState(6500);

  const [monthlyTaxes, setMonthlyTaxes] = useState(650);
  const [monthlyInsurance, setMonthlyInsurance] = useState(200);
  const [monthlyHoa, setMonthlyHoa] = useState(0);
  const [currentMortgageInsurance, setCurrentMortgageInsurance] = useState(0);
  const [newMortgageInsurance, setNewMortgageInsurance] = useState(0);

  const monthlyPI = (balance, annualRate, years) => {
    const loanAmount = Number(balance) || 0;
    const rate = (Number(annualRate) || 0) / 100 / 12;
    const payments = (Number(years) || 0) * 12;

    if (loanAmount <= 0 || payments <= 0) return 0;

    if (rate === 0) {
      return loanAmount / payments;
    }

    return (
      loanAmount *
      ((rate * Math.pow(1 + rate, payments)) /
        (Math.pow(1 + rate, payments) - 1))
    );
  };

  const results = useMemo(() => {
    const balance = Number(currentBalance) || 0;
    const costs = Number(closingCosts) || 0;

    const currentPI = monthlyPI(
      balance,
      currentRate,
      currentTermRemaining
    );

    const newLoanAmount = balance + costs;

    const newPI = monthlyPI(
      newLoanAmount,
      newRate,
      newTerm
    );

    const taxes = Number(monthlyTaxes) || 0;
    const insurance = Number(monthlyInsurance) || 0;
    const hoa = Number(monthlyHoa) || 0;
    const currentMI = Number(currentMortgageInsurance) || 0;
    const newMI = Number(newMortgageInsurance) || 0;

    const currentTotal =
      currentPI + taxes + insurance + hoa + currentMI;

    const newTotal =
      newPI + taxes + insurance + hoa + newMI;

    const monthlySavings = currentTotal - newTotal;

    const breakEvenMonths =
      monthlySavings > 0 ? costs / monthlySavings : null;

    return {
      currentPI,
      newPI,
      currentTotal,
      newTotal,
      monthlySavings,
      breakEvenMonths,
      newLoanAmount,
    };
  }, [
    currentBalance,
    currentRate,
    currentTermRemaining,
    newRate,
    newTerm,
    closingCosts,
    monthlyTaxes,
    monthlyInsurance,
    monthlyHoa,
    currentMortgageInsurance,
    newMortgageInsurance,
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

  return (
    <main style={{ background: "#f7f8fa", minHeight: "100vh" }}>
      <section
        style={{
          background:
            "linear-gradient(135deg, #061d35 0%, #0b3762 100%)",
          color: "#ffffff",
          textAlign: "center",
          padding: "72px 24px 64px",
        }}
      >
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
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
            Refinance Calculator
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 66px)",
              lineHeight: "1.03",
              margin: "0 0 22px",
              color: "#ffffff",
            }}
          >
            Could Refinancing
            <br />
            Save You Money?
          </h1>

          <p
            style={{
              maxWidth: "740px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#dce8f4",
            }}
          >
            Compare your current mortgage with a potential refinance and
            estimate your monthly savings and break-even point.
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
              background: "#ffffff",
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
              <RefreshCw size={28} color="#d29b18" />

              <h2
                style={{
                  margin: 0,
                  color: "#082b50",
                  fontSize: "28px",
                }}
              >
                Compare Your Loans
              </h2>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Current Loan Balance</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={currentBalance}
                onChange={(e) => setCurrentBalance(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Current Interest Rate (%)</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                step="0.125"
                value={currentRate}
                onChange={(e) => setCurrentRate(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Years Remaining on Current Loan
              </label>
              <input
                style={inputStyle}
                type="number"
                min="1"
                max="40"
                value={currentTermRemaining}
                onChange={(e) =>
                  setCurrentTermRemaining(e.target.value)
                }
              />
            </div>

            <div
              style={{
                height: "1px",
                background: "#e4e9ee",
                margin: "28px 0",
              }}
            />

            <div style={fieldStyle}>
              <label style={labelStyle}>New Interest Rate (%)</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                step="0.125"
                value={newRate}
                onChange={(e) => setNewRate(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>New Loan Term</label>
              <select
                style={inputStyle}
                value={newTerm}
                onChange={(e) => setNewTerm(e.target.value)}
              >
                <option value="30">30 Years</option>
                <option value="20">20 Years</option>
                <option value="15">15 Years</option>
                <option value="10">10 Years</option>
              </select>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Estimated Closing Costs
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={closingCosts}
                onChange={(e) => setClosingCosts(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Property Taxes ($ per month)
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={monthlyTaxes}
                onChange={(e) => setMonthlyTaxes(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Homeowners Insurance ($ per month)
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={monthlyInsurance}
                onChange={(e) => setMonthlyInsurance(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>HOA ($ per month)</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={monthlyHoa}
                onChange={(e) => setMonthlyHoa(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Current Mortgage Insurance ($ per month)
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={currentMortgageInsurance}
                onChange={(e) =>
                  setCurrentMortgageInsurance(e.target.value)
                }
              />
            </div>

            <div style={{ ...fieldStyle, marginBottom: 0 }}>
              <label style={labelStyle}>
                New Mortgage Insurance ($ per month)
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={newMortgageInsurance}
                onChange={(e) =>
                  setNewMortgageInsurance(e.target.value)
                }
              />
            </div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(145deg, #061d35 0%, #0b3762 100%)",
              color: "#ffffff",
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
              <TrendingDown size={24} />

              <strong>ESTIMATED MONTHLY SAVINGS</strong>
            </div>

            <div
              style={{
                fontSize: "clamp(46px, 7vw, 68px)",
                fontWeight: "800",
                lineHeight: "1",
                margin: "18px 0 10px",
              }}
            >
              {results.monthlySavings >= 0
                ? money(results.monthlySavings)
                : `-${money(Math.abs(results.monthlySavings))}`}
            </div>

            <p
              style={{
                color: "#bfd0e0",
                marginTop: "0",
                marginBottom: "30px",
              }}
            >
              Estimated difference in total monthly housing payment
            </p>

            <div style={breakdownRow}>
              <span>Current Payment</span>
              <strong>{money(results.currentTotal)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Estimated New Payment</span>
              <strong>{money(results.newTotal)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Current Principal & Interest</span>
              <strong>{money(results.currentPI)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>New Principal & Interest</span>
              <strong>{money(results.newPI)}</strong>
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
                  NEW LOAN AMOUNT
                </span>

                <strong
                  style={{
                    display: "block",
                    fontSize: "22px",
                    marginTop: "5px",
                  }}
                >
                  {money(results.newLoanAmount)}
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
                  BREAK-EVEN
                </span>

                <strong
                  style={{
                    display: "block",
                    fontSize: "22px",
                    marginTop: "5px",
                  }}
                >
                  {results.breakEvenMonths
                    ? `${Math.ceil(results.breakEvenMonths)} mo.`
                    : "N/A"}
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
                A lower payment isn't the whole story.
              </strong>
              <br />
              We'll also compare closing costs, total interest, loan term,
              equity goals, and how long you expect to keep the home.
            </div>

            <a
            href="/#lead-form"
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
              Review My Refinance Options
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

          Results are for informational and educational purposes only and are
          not a commitment to lend, an offer of credit, or a personalized loan
          quote. Actual refinance eligibility, interest rates, fees, closing
          costs, payments, mortgage insurance, and savings may vary. Loan
          approval is subject to underwriting, verification of information,
          property eligibility, and program availability.
        </div>
      </section>
    </main>
  );
}