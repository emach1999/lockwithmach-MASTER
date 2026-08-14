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
          Whether you're buying your first home, moving into your next one,
          refinancing, investing, or simply trying to understand your options,
          start by telling me what you're trying to accomplish. I'll review
          your information personally and help you determine the right next
          step.
        </p>

        <div className="contact-promise">
          <span>✓</span>

          <div>
            <strong>
              No pressure. No confusing sales pitch.
            </strong>

            <small>
              Just clear answers, thoughtful guidance, and a Mortgage Game
              Plan™ built around your goals.
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
            Tell Me About Your Situation
          </h3>

          <p>
            Complete the short Mortgage Game Plan™ form and let me know what
            you're trying to accomplish. I'll review it personally and follow
            up with you directly.
          </p>

          <a
            className="button button-gold"
            href="/#lead-form"
          >
            Get My Mortgage Game Plan™
          </a>
        </article>

        <article className="contact-card">
          <h3>
            Call or Text Me
          </h3>

          <p>
            Have a quick question? Call or text me directly. If I'm unavailable,
            I'll get back to you as soon as I can.
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
            Tell me a little about your situation and what you're trying to
            accomplish, and I'll help you figure out the best next step.
          </p>

          <a
            className="contact-link"
            href="mailto:eric@mtg-pro.com?subject=Mortgage%20Strategy%20Question"
          >
            eric@mtg-pro.com <span>→</span>
          </a>
        </article>
      </div>
    </section>
  );
}

export default ContactSection;