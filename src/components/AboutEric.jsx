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
        <p className="eyebrow">
          Meet Eric Mach
        </p>

        <h2>
          A Teacher's Ability to Explain.
          <br />
          A Coach's Ability to Strategize.
        </h2>

        <p className="about-intro">
          A mortgage isn't just a loan—it's one of the biggest financial
          decisions you'll ever make. You deserve someone who explains the
          process clearly, answers your questions honestly, and helps you make
          confident decisions from start to finish.
        </p>

        <p>
          Before becoming a mortgage loan originator, I spent more than
          26 years teaching physics and coaching high school football.
          Every day I helped students understand complex concepts, built
          game plans with athletes, and guided people toward achieving goals
          they once thought were out of reach.
        </p>

        <p>
          Today, I bring that same approach to home financing. Whether you're
          buying your first home, upgrading to your next home, refinancing,
          purchasing an investment property, or navigating a unique financial
          situation, my job is to educate you, build the right strategy, and
          help you move forward with confidence.
        </p>

        <div className="about-promise">
          <span>My Promise To You</span>

          <strong>
            I'll treat your mortgage the same way I treated every classroom and
            every football team—with preparation, honesty, communication, and a
            commitment to helping you succeed.
          </strong>
        </div>

        <a
          className="button button-primary"
          href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
          target="_blank"
          rel="noreferrer"
        >
          Schedule Your Free Mortgage Game Plan™
        </a>
      </div>
    </section>
  );
}

export default AboutEric;