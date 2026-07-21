const questions = [
  ["How much money do I need to buy a home?", "That depends on the loan program, property, credit profile, and your goals. Some qualified buyers may have low- or no-down-payment options. We will review the full picture, including closing costs and reserves—not just the down payment."],
  ["Will talking with you hurt my credit?", "A first conversation does not require a hard credit inquiry. When a credit review becomes useful, I will explain what is being requested and why before moving forward."],
  ["What is a Mortgage Game Plan™?", "It is a personalized strategy that connects your budget, loan options, timeline, cash needs, and long-term goals so you can make decisions with context instead of guessing."],
  ["Can I buy before I sell my current home?", "Possibly. Bridge, equity-advance, and buy-before-you-sell programs may help qualified homeowners access equity or reduce the challenge of carrying two homes. The right structure depends on your numbers."],
  ["Do you work with first-time buyers and investors?", "Yes. I work with first-time buyers, repeat buyers, veterans, homeowners, and real estate investors throughout Texas."],
];

function FAQ() {
  return (
    <section className="faq-section" id="faq">
      <div className="faq-intro">
        <p className="eyebrow">Common Questions</p>
        <h2>Clarity Before Commitment.</h2>
        <p>You do not need to know every mortgage term before reaching out. Asking questions is part of the process.</p>
      </div>
      <div className="faq-list">
        {questions.map(([question, answer], index) => (
          <details key={question} open={index === 0}>
            <summary>{question}<span aria-hidden="true">+</span></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
