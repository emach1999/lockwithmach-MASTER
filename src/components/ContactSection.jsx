function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-intro">
        <p className="eyebrow">Start the Conversation</p>
        <h2>You Bring the Questions. We&apos;ll Build the Game Plan.</h2>
        <p>Whether you are ready to buy now or simply trying to understand your options, the first step is a straightforward conversation about your goals.</p>
        <div className="contact-promise"><span>✓</span><div><strong>No pressure. No confusing sales pitch.</strong><small>Just clear answers and a practical strategy for moving forward.</small></div></div>
      </div>
      <div className="contact-options">
        <article className="contact-card featured">
          <span className="card-kicker">Recommended</span>
          <h3>Schedule a Strategy Call</h3>
          <p>Choose a convenient time for a one-on-one conversation about your goals, questions, and next steps.</p>
          <a className="button button-gold" href="https://calendar.app.google/RgxDCZDHUD7gUCXc6" target="_blank" rel="noreferrer">View Available Times</a>
        </article>
        <article className="contact-card">
          <h3>Call Eric</h3>
          <p>Prefer a direct conversation? Call and leave a message if Eric is helping another client.</p>
          <a className="contact-link" href="tel:2146839034">214-683-9034 <span>→</span></a>
        </article>
        <article className="contact-card">
          <h3>Send an Email</h3>
          <p>Begin in writing with a brief description of your situation and the help you need.</p>
          <a className="contact-link" href="mailto:eric@mtg-pro.com?subject=Mortgage Strategy Question">eric@mtg-pro.com <span>→</span></a>
        </article>
      </div>
    </section>
  );
}

export default ContactSection;
