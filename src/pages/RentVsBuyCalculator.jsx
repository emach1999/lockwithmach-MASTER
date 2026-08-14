import { useMemo, useState } from "react";
import {
  Calculator,
  Home,
  KeyRound,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export default function RentVsBuyCalculator() {
  const [monthlyRent, setMonthlyRent] = useState(2400);
  const [rentIncrease, setRentIncrease] = useState(3);

  const [homePrice, setHomePrice] = useState(400000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(5);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const [propertyTaxRate, setPropertyTaxRate] = useState(1.8);
  const [insuranceRate, setInsuranceRate] = useState(0.6);
  const [hoa, setHoa] = useState(0);
  const [mortgageInsurance, setMortgageInsurance] = useState(0);

  const [homeAppreciation, setHomeAppreciation] = useState(3);
  const [years, setYears] = useState(5);

  const results = useMemo(() => {
    const rent = Number(monthlyRent) || 0;
    const rentGrowth = (Number(rentIncrease) || 0) / 100;

    const price = Number(homePrice) || 0;
    const downPercent = (Number(downPaymentPercent) || 0) / 100;
    const annualRate = Number(interestRate) || 0;
    const term = Number(loanTerm) || 30;

    const taxRate = (Number(propertyTaxRate) || 0) / 100;
    const insuranceAnnualRate = (Number(insuranceRate) || 0) / 100;
    const monthlyHoa = Number(hoa) || 0;
    const monthlyMI = Number(mortgageInsurance) || 0;

    const appreciationRate = (Number(homeAppreciation) || 0) / 100;
    const comparisonYears = Number(years) || 1;

    const downPayment = price * downPercent;
    const loanAmount = Math.max(price - downPayment, 0);

    const monthlyRate = annualRate / 100 / 12;
    const payments = term * 12;

    let principalInterest = 0;

    if (loanAmount > 0 && monthlyRate > 0) {
      principalInterest =
        loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, payments)) /
          (Math.pow(1 + monthlyRate, payments) - 1));
    } else if (loanAmount > 0 && payments > 0) {
      principalInterest = loanAmount / payments;
    }

    const monthlyTaxes = (price * taxRate) / 12;
    const monthlyInsurance = (price * insuranceAnnualRate) / 12;

    const monthlyBuyPayment =
      principalInterest +
      monthlyTaxes +
      monthlyInsurance +
      monthlyHoa +
      monthlyMI;

    let totalRentPaid = 0;
    let currentMonthlyRent = rent;

    for (let year = 1; year <= comparisonYears; year++) {
      totalRentPaid += currentMonthlyRent * 12;
      currentMonthlyRent *= 1 + rentGrowth;
    }

    const monthsElapsed = comparisonYears * 12;

    let remainingBalance = loanAmount;

    if (loanAmount > 0 && monthlyRate > 0) {
      remainingBalance =
        loanAmount *
        ((Math.pow(1 + monthlyRate, payments) -
          Math.pow(1 + monthlyRate, monthsElapsed)) /
          (Math.pow(1 + monthlyRate, payments) - 1));
    } else if (loanAmount > 0) {
      remainingBalance = Math.max(
        loanAmount - principalInterest * monthsElapsed,
        0
      );
    }

    const estimatedFutureValue =
      price * Math.pow(1 + appreciationRate, comparisonYears);

    const estimatedEquity =
      Math.max(estimatedFutureValue - remainingBalance, 0);

    const totalBuyPayments = monthlyBuyPayment * monthsElapsed;

    const estimatedNetBuyCost =
      totalBuyPayments + downPayment - estimatedEquity;

    const estimatedDifference =
      totalRentPaid - estimatedNetBuyCost;

    return {
      downPayment,
      loanAmount,
      principalInterest,
      monthlyTaxes,
      monthlyInsurance,
      monthlyBuyPayment,
      totalRentPaid,
      estimatedFutureValue,
      estimatedEquity,
      estimatedNetBuyCost,
      estimatedDifference,
    };
  }, [
    monthlyRent,
    rentIncrease,
    homePrice,
    downPaymentPercent,
    interestRate,
    loanTerm,
    propertyTaxRate,
    insuranceRate,
    hoa,
    mortgageInsurance,
    homeAppreciation,
    years,
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
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            Rent vs. Buy Calculator
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 66px)",
              lineHeight: "1.03",
              margin: "0 0 22px",
              color: "#ffffff",
            }}
          >
            Should You Rent
            <br />
            or Buy?
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#dce8f4",
            }}
          >
            Compare estimated renting costs with the potential cost and equity
            of owning a home over time.
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
              <KeyRound size={28} color="#d29b18" />

              <h2
                style={{
                  margin: 0,
                  color: "#082b50",
                  fontSize: "28px",
                }}
              >
                Compare Your Options
              </h2>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Current Monthly Rent</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Expected Annual Rent Increase (%)
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                step="0.5"
                value={rentIncrease}
                onChange={(e) => setRentIncrease(e.target.value)}
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
              <label style={labelStyle}>Down Payment (%)</label>
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
              </select>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Property Tax Rate (% per year)
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                step="0.1"
                value={propertyTaxRate}
                onChange={(e) =>
                  setPropertyTaxRate(e.target.value)
                }
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Homeowners Insurance (% per year)
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                step="0.1"
                value={insuranceRate}
                onChange={(e) => setInsuranceRate(e.target.value)}
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

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Mortgage Insurance ($ per month)
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

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Estimated Home Appreciation (% per year)
              </label>
              <input
                style={inputStyle}
                type="number"
                step="0.5"
                value={homeAppreciation}
                onChange={(e) =>
                  setHomeAppreciation(e.target.value)
                }
              />
            </div>

            <div style={{ ...fieldStyle, marginBottom: 0 }}>
              <label style={labelStyle}>
                Comparison Period
              </label>
              <select
                style={inputStyle}
                value={years}
                onChange={(e) => setYears(e.target.value)}
              >
                <option value="3">3 Years</option>
                <option value="5">5 Years</option>
                <option value="7">7 Years</option>
                <option value="10">10 Years</option>
              </select>
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
              <TrendingUp size={24} />
              <strong>ESTIMATED COMPARISON</strong>
            </div>

            <div
              style={{
                fontSize: "clamp(34px, 5vw, 54px)",
                fontWeight: "800",
                lineHeight: "1.05",
                margin: "18px 0 10px",
              }}
            >
              {results.estimatedDifference >= 0
                ? "Buying May Come Out Ahead"
                : "Renting May Cost Less"}
            </div>

            <p
              style={{
                color: "#bfd0e0",
                marginTop: "0",
                marginBottom: "30px",
              }}
            >
              Based on the assumptions entered over {years} years
            </p>

            <div style={breakdownRow}>
              <span>Current Monthly Rent</span>
              <strong>{money(monthlyRent)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Estimated Monthly Buy Payment</span>
              <strong>{money(results.monthlyBuyPayment)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Total Rent Paid</span>
              <strong>{money(results.totalRentPaid)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Estimated Future Home Value</span>
              <strong>{money(results.estimatedFutureValue)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Estimated Home Equity</span>
              <strong>{money(results.estimatedEquity)}</strong>
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
                  {money(results.downPayment)}
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
                Rent vs. buy is more than a math problem.
              </strong>
              <br />
              Your timeline, cash reserves, lifestyle, future plans, and
              financing options all matter.
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
              Compare My Real Options
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

          This comparison is for informational and educational purposes only
          and does not account for every cost or financial consideration.
          Actual mortgage payments, closing costs, maintenance costs, selling
          expenses, taxes, insurance, appreciation, rent increases, investment
          returns, and other factors may differ significantly. This is not a
          commitment to lend or a personalized loan quote.
        </div>
      </section>
    </main>
  );
}