import { useMemo, useState } from "react";
import {
  Calculator,
  ReceiptText,
  DollarSign,
  Home,
} from "lucide-react";

export default function ClosingCostCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(5);

  const [lenderFees, setLenderFees] = useState(1800);
  const [titleFees, setTitleFees] = useState(2200);
  const [appraisal, setAppraisal] = useState(650);
  const [survey, setSurvey] = useState(500);
  const [inspection, setInspection] = useState(500);

  const [prepaidTaxes, setPrepaidTaxes] = useState(2500);
  const [prepaidInsurance, setPrepaidInsurance] = useState(2400);
  const [initialEscrows, setInitialEscrows] = useState(2500);

  const [discountPointsPercent, setDiscountPointsPercent] = useState(0);
  const [sellerCredits, setSellerCredits] = useState(0);
  const [lenderCredits, setLenderCredits] = useState(0);
  const [earnestMoneyCredit, setEarnestMoneyCredit] = useState(0);

  const results = useMemo(() => {
    const price = Number(homePrice) || 0;
    const downPercent = (Number(downPaymentPercent) || 0) / 100;

    const downPayment = price * downPercent;
    const loanAmount = Math.max(price - downPayment, 0);

    const lender = Number(lenderFees) || 0;
    const title = Number(titleFees) || 0;
    const appraisalFee = Number(appraisal) || 0;
    const surveyFee = Number(survey) || 0;
    const inspectionFee = Number(inspection) || 0;

    const taxes = Number(prepaidTaxes) || 0;
    const insurance = Number(prepaidInsurance) || 0;
    const escrows = Number(initialEscrows) || 0;

    const points =
      loanAmount * ((Number(discountPointsPercent) || 0) / 100);

    const seller = Number(sellerCredits) || 0;
    const lenderCredit = Number(lenderCredits) || 0;
    const earnest = Number(earnestMoneyCredit) || 0;

    const closingCosts =
      lender +
      title +
      appraisalFee +
      surveyFee +
      inspectionFee +
      points;

    const prepaidItems = taxes + insurance + escrows;

    const totalBeforeCredits =
      downPayment + closingCosts + prepaidItems;

    const totalCredits = seller + lenderCredit + earnest;

    const estimatedCashToClose = Math.max(
      totalBeforeCredits - totalCredits,
      0
    );

    return {
      downPayment,
      loanAmount,
      points,
      closingCosts,
      prepaidItems,
      totalBeforeCredits,
      totalCredits,
      estimatedCashToClose,
    };
  }, [
    homePrice,
    downPaymentPercent,
    lenderFees,
    titleFees,
    appraisal,
    survey,
    inspection,
    prepaidTaxes,
    prepaidInsurance,
    initialEscrows,
    discountPointsPercent,
    sellerCredits,
    lenderCredits,
    earnestMoneyCredit,
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
            Closing Cost Calculator
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 66px)",
              lineHeight: "1.03",
              margin: "0 0 22px",
              color: "#ffffff",
            }}
          >
            How Much Cash
            <br />
            Could You Need at Closing?
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
            Estimate your down payment, common closing costs, prepaid items,
            and credits to get a clearer picture of your potential cash to
            close.
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
              <ReceiptText size={28} color="#d29b18" />

              <h2
                style={{
                  margin: 0,
                  color: "#082b50",
                  fontSize: "28px",
                }}
              >
                Estimate Your Costs
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

            <div
              style={{
                height: "1px",
                background: "#e4e9ee",
                margin: "28px 0",
              }}
            />

            <div style={fieldStyle}>
              <label style={labelStyle}>Estimated Lender Fees</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={lenderFees}
                onChange={(e) => setLenderFees(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Estimated Title Fees</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={titleFees}
                onChange={(e) => setTitleFees(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Appraisal</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={appraisal}
                onChange={(e) => setAppraisal(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Survey</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={survey}
                onChange={(e) => setSurvey(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Home Inspection</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={inspection}
                onChange={(e) => setInspection(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Discount Points (% of loan amount)
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                step="0.125"
                value={discountPointsPercent}
                onChange={(e) =>
                  setDiscountPointsPercent(e.target.value)
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
              <label style={labelStyle}>
                Prepaid Property Taxes
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={prepaidTaxes}
                onChange={(e) => setPrepaidTaxes(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Prepaid Homeowners Insurance
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={prepaidInsurance}
                onChange={(e) =>
                  setPrepaidInsurance(e.target.value)
                }
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Initial Escrow Deposit
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={initialEscrows}
                onChange={(e) =>
                  setInitialEscrows(e.target.value)
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
              <label style={labelStyle}>Seller Credits</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={sellerCredits}
                onChange={(e) => setSellerCredits(e.target.value)}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Lender Credits</label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={lenderCredits}
                onChange={(e) => setLenderCredits(e.target.value)}
              />
            </div>

            <div style={{ ...fieldStyle, marginBottom: 0 }}>
              <label style={labelStyle}>
                Earnest Money / Deposit Credit
              </label>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={earnestMoneyCredit}
                onChange={(e) =>
                  setEarnestMoneyCredit(e.target.value)
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
              <DollarSign size={24} />
              <strong>ESTIMATED CASH TO CLOSE</strong>
            </div>

            <div
              style={{
                fontSize: "clamp(46px, 7vw, 68px)",
                fontWeight: "800",
                lineHeight: "1",
                margin: "18px 0 10px",
              }}
            >
              {money(results.estimatedCashToClose)}
            </div>

            <p
              style={{
                color: "#bfd0e0",
                marginTop: "0",
                marginBottom: "30px",
              }}
            >
              Estimated amount needed after the credits entered
            </p>

            <div style={breakdownRow}>
              <span>Down Payment</span>
              <strong>{money(results.downPayment)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Closing Costs</span>
              <strong>{money(results.closingCosts)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Prepaid Items & Escrows</span>
              <strong>{money(results.prepaidItems)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Total Before Credits</span>
              <strong>{money(results.totalBeforeCredits)}</strong>
            </div>

            <div style={breakdownRow}>
              <span>Total Credits</span>
              <strong>-{money(results.totalCredits)}</strong>
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
                  DISCOUNT POINTS
                </span>

                <strong
                  style={{
                    display: "block",
                    fontSize: "22px",
                    marginTop: "5px",
                  }}
                >
                  {money(results.points)}
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
                Your real cash-to-close number can be very different.
              </strong>
              <br />
              Taxes, title charges, escrows, insurance, lender credits, seller
              concessions, loan program, and closing date can all change the
              final amount.
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
              Estimate My Real Cash to Close
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

          Closing costs vary significantly by transaction, loan program,
          property, lender, title company, insurance provider, closing date,
          tax jurisdiction, and other factors. The amounts shown here are for
          educational and planning purposes only and are not a Loan Estimate,
          Closing Disclosure, commitment to lend, or personalized quote.
        </div>
      </section>
    </main>
  );
}