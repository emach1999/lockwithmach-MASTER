import coachingPhoto from "../assets/eric-coaching.jpg";

function AboutEric() {
  return (
    <section className="about-section" id="about">
      <div className="about-photo-wrap">
        <img
          className="about-photo"
          src={coachingPhoto}
          alt="Eric Mach coaching football"
        />

        <div className="about-photo-badge">
          <strong>Educate. Strategize. Close.</strong>
          <span>NMLS 2510620</span>
        </div>
      </div>

      <div className="about-content">
        <p className="eyebrow">Meet Eric Mach</p>

        <h2>
          A Teacher's Ability to Explain.
          <br />
          A Coach's Ability to Strategize.
        </h2>

        <p className="about-intro">
          A mortgage isn't just a loan—it's an important financial decision.
          You deserve someone who explains the process clearly, answers your
          questions, and helps you make informed decisions with confidence.
        </p>

        <p>
          Before becoming a mortgage loan originator, I spent 26 years as an
          advanced science teacher and Texas high school football coach. I
          learned how to simplify complex concepts, develop strategies for
          high-pressure situations, and help people work toward important goals.
        </p>

        <p>
          Today, I bring that same approach to mortgage lending. Whether you're
          buying your first home, moving into your next one, refinancing, or
          purchasing an investment property, my job is to help you understand
          your options and build a Mortgage Game Plan™ around your goals.
        </p>

        <div className="about-promise">
          <span>My Promise To You</span>

          <strong>
            I'll approach your mortgage with preparation, honesty, clear
            communication, and a commitment to helping you make the best
            decisions for your situation.
          </strong>
        </div>

        <a
          className="button button-primary"
          href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
          target="_blank"
          rel="noreferrer"
        >
          Build My Mortgage Game Plan™
        </a>
      </div>
    </section>
  );
}

export default AboutEric;