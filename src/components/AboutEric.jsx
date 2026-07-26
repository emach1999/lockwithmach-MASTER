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
          Buying a home is one of the biggest financial decisions you'll ever
          make. You deserve someone who takes the time to explain it clearly,
          answer your questions honestly, and help you move forward with
          confidence.
        </p>

        <p>
          Before becoming a mortgage loan originator, I spent more than
          26 years teaching physics and coaching high school football.
          Every day, my job was to simplify complex concepts, build
          confidence, and help people succeed.
        </p>

        <p>
          Today, I bring that same philosophy to home financing.
          Whether you're buying your first home, purchasing an investment
          property, refinancing, or making your next move, I'll help you
          understand your options, build a personalized Mortgage Game
          Plan™, and make informed decisions every step of the way.
        </p>

        <div className="about-promise">

          <span>My Promise To You</span>

          <strong>
            I'll treat your mortgage like it's my own—with honesty,
            strategy, and clear communication from our first conversation
            through closing day.
          </strong>

        </div>

        <a
          className="button button-primary"
          href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
          target="_blank"
          rel="noreferrer"
        >
          Schedule My Free Strategy Call
        </a>

      </div>
    </section>
  );
}

export default AboutEric;