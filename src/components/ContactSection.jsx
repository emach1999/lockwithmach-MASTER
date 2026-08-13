function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-intro">

        <p className="eyebrow">
          Let's Build Your Mortgage Game Plan™
        </p>

        <h2>
          You Don't Need to Have
          <br />
          Everything Figured Out.
        </h2>

        <p>
          Whether you're buying your first home, upgrading to your next one,
          refinancing, investing, or simply wondering what your options are,
          our first conversation is all about you. We'll answer your questions,
          explore your options, and determine the best path forward—without
          pressure or obligation.
        </p>

        <div className="contact-promise">

          <span>✓</span>

          <div>

            <strong>
              No pressure. No confusing sales pitch.
            </strong>

            <small>
              Just honest advice, a personalized Mortgage Game Plan™, and
              clear next steps designed around your goals.
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
            We'll discuss your goals, answer your questions, compare financing
            options, and build a personalized Mortgage Game Plan™ before you
            make any major decisions.
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
            Call or Text Me
          </h3>

          <p>
            Have a quick question? Give me a call or send me a text. If I'm
            with another client, I'll get back to you as soon as possible.
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
            Send Me an Email
          </h3>

          <p>
            Tell me a little about your situation, and I'll personally respond
            with guidance on the best next step for you.
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