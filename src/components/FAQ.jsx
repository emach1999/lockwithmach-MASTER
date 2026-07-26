const questions = [
  [
    "Should I get pre-approved before looking at homes?",
    "Yes. Getting pre-approved before you start shopping helps you understand your budget, strengthens your offers, and allows you to move quickly when you find the right home. It also helps prevent falling in love with a home that's outside your comfortable price range."
  ],
  [
    "How much money do I need to buy a home?",
    "It depends on the loan program, purchase price, and your financial situation. Some buyers qualify for low down payment programs, while others may even qualify for zero-down financing. During your Mortgage Game Plan™ session, we'll review your down payment, estimated closing costs, monthly payment, and financing options."
  ],
  [
    "Will talking with you affect my credit score?",
    "No. Our first conversation is simply about understanding your goals and answering your questions. If reviewing your credit becomes the next step, I'll explain exactly what we'll do before any credit inquiry is requested."
  ],
  [
    "What is a Mortgage Game Plan™?",
    "It's my step-by-step approach to helping you buy with confidence. We'll discuss your goals, compare financing options, estimate payments, review down payment strategies, and create a personalized roadmap before you ever submit an offer."
  ],
  [
    "Can I buy a new home before selling my current one?",
    "Possibly. Depending on your situation, Buy Before You Sell programs or other financing strategies may allow you to purchase your next home before your current one sells. We'll determine whether that's the right solution for you."
  ],
  [
    "What types of home loans do you offer?",
    "I help Texas homebuyers with Conventional, FHA, VA, investment property financing, refinancing, and specialized mortgage solutions for unique situations. During your strategy session, we'll determine which option best fits your goals."
  ],
  [
    "Do you only work with first-time homebuyers?",
    "Not at all. I work with first-time buyers, growing families, veterans, homeowners looking to refinance, real estate investors, and buyers making their next move anywhere in Texas."
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
          Buying a home doesn't have to feel confusing.
          Here are answers to some of the questions I hear most often from Texas homebuyers.
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