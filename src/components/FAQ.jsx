const questions = [
  [
    "Should I get pre-approved before looking at homes?",
    "Yes. A pre-approval can help you understand your buying power, establish a realistic price range, and prepare you to make an offer when you find the right home. We'll also look beyond the maximum approval amount and discuss a monthly payment that feels comfortable for you.",
  ],
  [
    "How much money do I need to buy a home?",
    "It depends on the loan program, purchase price, property, and your financial situation. Some programs offer low down payment options, and eligible borrowers may have access to zero-down or down payment assistance programs. We'll estimate your down payment, closing costs, and monthly payment as part of your Mortgage Game Plan™.",
  ],
  [
    "How long does the mortgage process usually take?",
    "Many purchase loans can close in about 30 days, but every transaction is different. The loan program, appraisal, property, documentation, and contract timeline can all affect closing. I'll help you understand the timeline for your specific transaction and keep you informed along the way.",
  ],
  [
    "Will talking with you affect my credit score?",
    "No. An initial conversation about your goals and mortgage options does not require a credit inquiry. If we reach the point where reviewing your credit is appropriate, I'll explain the next step before requesting authorization.",
  ],
  [
    "What is a Mortgage Game Plan™?",
    "It's my process for helping you understand the financial side of buying a home before you make major decisions. We'll discuss your goals, explore loan options, estimate payments and cash needed, and develop a financing strategy around your situation.",
  ],
  [
    "Can I buy my next home before selling my current one?",
    "Possibly. Depending on your equity, income, credit, and overall situation, there may be financing strategies that allow you to purchase your next home before selling your current one. We'll compare the available options and determine whether one makes sense for you.",
  ],
  [
    "What types of home loans do you offer?",
    "I work with a wide range of mortgage options, including Conventional, FHA, VA, USDA, investment property and DSCR financing, jumbo loans, refinancing, and specialized solutions for borrowers with unique income or financing needs.",
  ],
  [
    "Do you only work with first-time homebuyers?",
    "Not at all. I work with first-time buyers, move-up buyers, veterans, homeowners considering a refinance, real estate investors, and other borrowers throughout Texas.",
  ],
];

function FAQ() {
  return (
    <section className="faq-section" id="faq">
      <div className="faq-intro">
        <p className="eyebrow">
          Frequently Asked Questions
        </p>

        <h2>
          Clear Answers.
          <br />
          Confident Decisions.
        </h2>

        <p>
          Mortgage questions are normal—and asking them before making a major
          financial decision is smart. Here are answers to some of the questions
          I hear most often.
        </p>
      </div>

      <div className="faq-list">
        {questions.map(([question, answer], index) => (
          <details key={question} open={index === 0}>
            <summary>
              {question}
              <span aria-hidden="true">+</span>
            </summary>

            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;