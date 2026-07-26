function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-intro">

        <p className="eyebrow">
          Let's Build Your Mortgage Game Plan™
        </p>

        <h2>
          You Don't Need All the Answers.
          <br />
          You Just Need the Right Guide.
        </h2>

        <p>
          Whether you're buying your first home, moving into your next one,
          investing, refinancing, or simply exploring your options, your first
          conversation with me is designed to answer your questions—not pressure
          you into a loan.
        </p>

        <div className="contact-promise">

          <span>✓</span>

          <div>

            <strong>
              No pressure. No confusing sales pitch.
            </strong>

            <small>
              Just honest advice, a personalized Mortgage Game Plan™, and
              clear next steps.
            </small>

          </div>

        </div>

      </div>

      <div className="contact-options">

        <article className="contact-card featured">

          <span className="card-kicker">
            Best Place to Start
          </span>

          <h3>
            Schedule Your Free Strategy Call
          </h3>

          <p>
            We'll discuss your goals, answer your questions, review your
            options, and build a Mortgage Game Plan™ that's tailored to
            your situation.
          </p>

          <a
            className="button button-gold"
            href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
            target="_blank"
            rel="noreferrer"
          >
            Schedule My Free Call
          </a>

        </article>

        <article className="contact-card">

          <h3>
            Call or Text Eric
          </h3>

          <p>
            Have a quick question? Give me a call or send a text.
            If I'm helping another client, I'll get back to you as
            soon as I can.
          </p>

          <a
            className="contact-link"
            href="tel:2146839034"
          >
            (214) 683-9034 <span>→</span>
          </a>

        </article>

        <article className="contact-card">

          <h3>
            Send an Email
          </h3>

          <p>
            Tell me a little about your situation and I'll personally
            respond with guidance on the best next step.
          </p>

          <a
            className="contact-link"
            href="mailto:eric@mtg-pro.com?subject=Mortgage Strategy Question"
          >
            eric@mtg-pro.com <span>→</span>
          </a>

        </article>

      </div>
    </section>
  );
}

export default ContactSection;