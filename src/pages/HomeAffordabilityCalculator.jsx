import { useMemo, useState } from "react";
import {
  Calculator,
  Wallet,
  DollarSign,
  Percent,
  Home,
} from "lucide-react";

export default function HomeAffordabilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(10000);
  const [monthlyDebts, setMonthlyDebts] = useState(750);
  const [downPayment, setDownPayment] = useState(25000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [dtiTarget, setDtiTarget] = useState(43);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.8);
  const [insuranceRate, setInsuranceRate] = useState(0.6);
  const [hoa, setHoa] = useState(0);

  const results = useMemo(() => {
    const income = Number(monthlyIncome) || 0;
    const debts = Number(monthlyDebts) || 0;
    const down = Number(downPayment) || 0;
    const rate = Number(interestRate) || 0;
    const years = Number(loanTerm) || 30;
    const dti = (Number(dtiTarget) || 0) / 100;
    const taxRate = (Number(propertyTaxRate) || 0) / 100;
    const annualInsuranceRate = (Number(insuranceRate) || 0) / 100;
    const monthlyHoa = Number(hoa) || 0;

    const maxTotalDebt = income * dti;

    const availableHousingPayment = Math.max(
      maxTotalDebt - debts - monthlyHoa,
      0
    );

    const monthlyRate = rate / 100 / 12;
    const payments = years * 12;

    let low = 0;
    let high = 3000000;
    let estimatedPrice = 0;

    for (let i = 0; i < 70; i++) {
      const price = (low + high) / 2;
      const loanAmount = Math.max(price - down, 0);

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
      const monthlyInsurance = (price * annualInsuranceRate) / 12;

      const housingPayment =
        principalInterest +
        monthlyTaxes +
        monthlyInsurance +
        monthlyHoa;

      if (housingPayment <= availableHousingPayment) {
        estimatedPrice = price;
        low = price;
      } else {
        high = price;
      }
    }

    const loanAmount = Math.max(estimatedPrice - down, 0);

    let principalInterest = 0;

    if (loanAmount > 0 && monthlyRate > 0) {
      principalInterest =
        loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, payments)) /
          (Math.pow(1 + monthlyRate, payments) - 1));
    }

    const monthlyTaxes = (estimatedPrice * taxRate) / 12;
    const monthlyInsurance =
      (estimatedPrice * annualInsuranceRate) / 12;

    const totalHousingPayment =
      principalInterest +
      monthlyTaxes +
      monthlyInsurance +
      monthlyHoa;

    return {
      estimatedPrice,
      loanAmount,
      principalInterest,
      monthlyTaxes,
      monthlyInsurance,
      monthlyHoa,
      totalHousingPayment,
      maxTotalDebt,
      availableHousingPayment,
    };
  }, [
    monthlyIncome,
    monthlyDebts,
    downPayment,
    interestRate,
    loanTerm,
    dtiTarget,
    propertyTaxRate,
    insuranceRate,
    hoa,
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
            Home Affordability Calculator
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 66px)",
              lineHeight: "1.03",
              margin: "0 0 22px",
              color: "#ffffff",
            }}
          >
            How Much Home
            <br />
            Could You Afford?
          </h1>

          <p
            style={{
              maxWidth: "730px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#dce8f4",
            }}
          >
            Enter your income, monthly debts, down payment, and estimated loan
            terms to explore a potential home-price range.
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
              <Wallet size={28} color="#d29b18" />

              <h2
                style={{
                  margin: 0,
                  color: "#082b50",
                  fontSize: "28px",
                }}
              >
                Your Financial Picture
              </h2>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Gross Monthly Income
              </label>

              <input
                style={inputStyle}
                type="number"
                min="0"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Monthly Debt Payments
              </label>

              <input
                style={inputStyle}
                type="number"
                min="0"
                value={monthlyDebts}
                onChange={(e) => setMonthlyDebts(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Down Payment Available
              </label>

              <input
                style={inputStyle}
                type="number"
                min="0"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
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
                Target Debt-to-Income Ratio (%)
              </label>

              <input
                style={inputStyle}
                type="number"
                min="1"
                max="60"
                step="1"
                value={dtiTarget}
                onChange={(e) => setDtiTarget(e.target.value)}
              />

              <div
                style={{
                  marginTop: "9px",
                  color: "#687786",
                  fontSize: "12px",
                  lineHeight: "1.5",
                }}
              >
                DTI limits vary by loan program and borrower profile. This
                setting is for estimating only.
              </div>
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
                onChange={(e) =>
                  setPropertyTaxRate(e.target.value)
                }
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Estimated Homeowners Insurance (% per year)
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

            <div style={{ ...fieldStyle, marginBottom: 0 }}>
              <label style={labelStyle}>HOA ($ per month)</label>

              <input
                style={inputStyle}
                type="number"
                min="0"
                value={hoa}
                onChange={(e) => setHoa(e.target.value)}
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
              <Home size={24} />

              <strong>ESTIMATED HOME PRICE</strong>
            </div>

            <div
              style={{
                fontSize: "clamp(46px, 7vw, 68px)",
                fontWeight: "800",
                lineHeight: "1",
                margin: "18px 0 10px",
              }}
            >
              {money(results.estimatedPrice)}
            </div>

            <p
              style={{
                color: "#bfd0e0",
                marginTop: "0",
                marginBottom: "30px",
              }}
            >
              Based on the assumptions you entered
            </p>

            <div style={breakdownRow}>
              <span>Estimated Housing Payment</span>
              <strong>{money(results.totalHousingPayment)}</strong>
            </div>

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
                  {money(downPayment)}
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
                Qualification is more than a DTI calculation.
              </strong>
              <br />
              Credit, loan program, assets, reserves, property type, and other
              factors can all affect your actual buying power.
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
              Find Out What I Can Really Afford
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

          The result is not a pre-approval, loan approval, commitment to lend,
          or personalized loan quote. Actual qualification depends on credit,
          income documentation, liabilities, assets, loan program,
          underwriting requirements, property eligibility, interest rates,
          taxes, insurance, and other factors.
        </div>
      </section>
    </main>
  );
}