import mortgageProLogo from "../assets/mortgage-pro-logo.png";
import logo from "../assets/lock-with-mach-logo.png";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-brand">

        <img
          src={logo}
          alt="Lock With Mach"
        />

        <p className="footer-tagline">
          Complex Mortgage Decisions.
          <br />
          Clear Guidance.
        </p>

        <p className="footer-description">
          Whether you're buying your first home, upgrading, investing,
          or refinancing, my goal is simple: educate first, build a
          strategy, and help you move forward with confidence.
        </p>

      </div>

      <div>

        <strong>Explore</strong>

        <p><a href="#">Home</a></p>
        <p><a href="#about">Meet Eric</a></p>
        <p><a href="#game-plan">Mortgage Game Plan™</a></p>
        <p><a href="#solutions">Loan Solutions</a></p>
        <p><a href="#faq">Frequently Asked Questions</a></p>
        <p><a href="#contact">Contact</a></p>

      </div>

      <div>

        <strong>Contact</strong>

        <p>Eric Mach</p>

        <p>Mortgage PRO Loan Services</p>

        <p>NMLS #2510620</p>

        <p>
          <a href="tel:2146839034">
            (214) 683-9034
          </a>
        </p>

        <p>
          <a href="mailto:eric@mtg-pro.com">
            eric@mtg-pro.com
          </a>
        </p>

      </div>

      <div>

        <strong>Let's Build Your Plan</strong>

        <p>
          Schedule a free strategy call and let's create a personalized
          Mortgage Game Plan™ built around your goals.
        </p>

        <a
          className="button button-gold footer-button"
          href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
          target="_blank"
          rel="noreferrer"
        >
          Schedule My Call
        </a>

      </div>

<div className="footer-compliance">

  <div className="footer-compliance-logo">

    <p className="footer-license-title">
      Licensed Through
    </p>

    <img
      src={mortgageProLogo}
      alt="Mortgage PRO Loan Services"
    />

  </div>

  <div className="footer-license-grid">

    <div>

      <h4>Loan Originator</h4>

      <p>Eric Mach</p>

      <p>NMLS #2510620</p>

    </div>

    <div>

      <h4>Broker</h4>

      <p>Mortgage PRO Loan Services LLC</p>

      <p>Company NMLS #1975913</p>

    </div>

    <div>

      <h4>Corporate Office</h4>

      <p>(404) 698-1108</p>

      <p>
        2130 Peachtree Parkway
        <br />
        Suite C
        <br />
        Cumming, GA 30041
      </p>

    </div>

  </div>

  <p className="footer-legal">

    Equal Housing Opportunity

    <br /><br />

    This website is provided for informational purposes only and is not
    a commitment to lend. Loan approval is subject to underwriting,
    verification of information, and program availability.

    <br /><br />

    © 2026 Lock With Mach • All Rights Reserved

  </p>

</div>

</footer>
  );
}

export default Footer;