import { useState } from "react";
import { Send, Phone, Mail, MessageSquare } from "lucide-react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mbgrkjwa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert(
        "Something went wrong while sending your information. Please call or text Eric at (214) 683-9034."
      );
    } finally {
      setSubmitting(false);
    }
  }

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

  if (submitted) {
    return (
      <section
        style={{
          padding: "70px 24px",
          background: "#f7f8fa",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "44px 32px",
            borderRadius: "20px",
            background: "#ffffff",
            boxShadow: "0 18px 50px rgba(0,0,0,.08)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              margin: "0 auto 20px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#082b50",
              color: "#e4b43f",
              fontSize: "28px",
              fontWeight: "800",
            }}
          >
            ✓
          </div>

          <h2
            style={{
              margin: "0 0 16px",
              color: "#082b50",
              fontSize: "36px",
            }}
          >
            Your Mortgage Game Plan™ Starts Here.
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "600px",
              color: "#687786",
              fontSize: "17px",
              lineHeight: "1.7",
            }}
          >
            Thanks for reaching out. Your information has been sent directly
            to Eric. He’ll review what you shared and follow up with you
            personally.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            style={{
              marginTop: "26px",
              padding: "13px 20px",
              border: "none",
              borderRadius: "10px",
              background: "#082b50",
              color: "#ffffff",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="lead-form"
      style={{
        background: "#f7f8fa",
        padding: "84px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "44px",
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 14px",
              color: "#a67507",
              fontSize: "12px",
              fontWeight: "900",
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Get My Mortgage Game Plan™
          </p>

          <h2
            style={{
              margin: "0 0 22px",
              color: "#082b50",
              fontSize: "clamp(38px, 5vw, 58px)",
              lineHeight: "1.05",
            }}
          >
            Tell Me What You’re Trying to Accomplish.
          </h2>

          <p
            style={{
              margin: "0 0 28px",
              color: "#687786",
              fontSize: "17px",
              lineHeight: "1.75",
            }}
          >
            You don’t need to know which loan program is right for you.
            Tell me your goal, and I’ll help you understand your options and
            the best next step.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                color: "#082b50",
                fontWeight: "700",
              }}
            >
              <Phone size={20} color="#d29b18" />
              Call or text: (214) 683-9034
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                color: "#082b50",
                fontWeight: "700",
              }}
            >
              <Mail size={20} color="#d29b18" />
              eric@mtg-pro.com
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                color: "#082b50",
                fontWeight: "700",
              }}
            >
              <MessageSquare size={20} color="#d29b18" />
              No pressure. Just clear answers and next steps.
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#ffffff",
            padding: "32px",
            borderRadius: "20px",
            boxShadow: "0 18px 50px rgba(0,0,0,.08)",
          }}
        >
          <input
            type="hidden"
            name="_subject"
            value="New Lock With Mach Website Lead"
          />

          <div style={fieldStyle}>
            <label style={labelStyle}>Name *</label>
            <input
              style={inputStyle}
              type="text"
              name="name"
              required
              placeholder="Your name"
            />
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Phone *</label>
            <input
              style={inputStyle}
              type="tel"
              name="phone"
              required
              placeholder="(555) 555-5555"
            />
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Email *</label>
            <input
              style={inputStyle}
              type="email"
              name="email"
              required
              placeholder="you@example.com"
            />
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>What Can I Help You With? *</label>
            <select
              style={inputStyle}
              name="goal"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="Buying a Home">Buying a Home</option>
              <option value="First-Time Homebuyer">
                First-Time Homebuyer
              </option>
              <option value="Refinancing">Refinancing</option>
              <option value="Investment Property">
                Investment Property
              </option>
              <option value="Buy Before You Sell">
                Buy Before You Sell
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>
              Approximate Price or Loan Amount
            </label>
            <input
              style={inputStyle}
              type="text"
              name="estimated_amount"
              placeholder="Example: $400,000"
            />
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Preferred Contact Method</label>
            <select
              style={inputStyle}
              name="preferred_contact"
              defaultValue="Text"
            >
              <option value="Text">Text</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Email">Email</option>
            </select>
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Anything Else I Should Know?</label>
            <textarea
              style={{
                ...inputStyle,
                minHeight: "120px",
                resize: "vertical",
              }}
              name="message"
              placeholder="Tell me a little about your situation..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              minHeight: "54px",
              border: "none",
              borderRadius: "10px",
              background: submitting ? "#7f8d99" : "#082b50",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "900",
              cursor: submitting ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "9px",
            }}
          >
            <Send size={18} />

            {submitting
              ? "Sending..."
              : "Build My Mortgage Game Plan™"}
          </button>

          <p
            style={{
              margin: "16px 0 0",
              color: "#7a8793",
              fontSize: "11px",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            By submitting this form, you agree that Eric Mach may contact you
            regarding your mortgage inquiry. Submitting this form does not
            create a loan application, credit inquiry, or commitment to lend.
          </p>
        </form>
      </div>
    </section>
  );
}