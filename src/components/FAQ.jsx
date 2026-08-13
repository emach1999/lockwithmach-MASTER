const questions = [
  [
    "Should I get pre-approved before looking at homes?",
    "Absolutely. Getting pre-approved first helps you understand your budget, strengthens your offers, and allows you to act quickly when you find the right home. It also helps prevent falling in love with a home that's outside your comfortable price range."
  ],
  [
    "How much money do I need to buy a home?",
    "That depends on the loan program, purchase price, and your financial situation. Some buyers qualify for low down payment programs, while others may even qualify for zero-down financing. During your Mortgage Game Plan™ session, we'll estimate your down payment, closing costs, monthly payment, and review every available option."
  ],
  [
    "How long does the mortgage process usually take?",
    "Most home purchases close in about 30 days, although the timeline can vary depending on the loan program and transaction. My goal is to keep everything moving smoothly while keeping you informed every step of the way."
  ],
  [
    "Will talking with you affect my credit score?",
    "No. Our first conversation is simply about your goals and answering your questions. If reviewing your credit becomes the next step, I'll explain exactly what we'll do before requesting any credit inquiry."
  ],
  [
    "What is a Mortgage Game Plan™?",
    "It's my step-by-step process for helping you buy with confidence. We'll discuss your goals, compare loan options, estimate monthly payments, review down payment strategies, and build a personalized roadmap before you ever submit an offer."
  ],
  [
    "Can I buy my next home before selling my current one?",
    "Possibly. Depending on your situation, Buy Before You Sell programs and other financing strategies may allow you to purchase your next home before your current home sells. We'll determine whether that's the right solution for your situation."
  ],
  [
    "What types of home loans do you offer?",
    "I help Texas homebuyers with Conventional, FHA, VA, investment property financing, refinancing, and specialized mortgage solutions for unique financial situations. Together we'll determine which loan best fits your goals."
  ],
  [
    "Do you only work with first-time homebuyers?",
    "Not at all. I work with first-time buyers, growing families, veterans, homeowners refinancing, real estate investors, and buyers making their next move anywhere in Texas."
  ]
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
          Every homebuyer has questions—and you should. Here are answers to
          some of the questions I hear most often. If you don't see yours
          here, I'd be happy to answer it personally.
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