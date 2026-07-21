import logo from "../assets/lock-with-mach-logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={logo} alt="Lock With Mach" />
        <p>Clear guidance. Personal strategy. Confident decisions.</p>
      </div>
      <div>
        <strong>Eric Mach</strong>
        <p>Mortgage Loan Originator</p>
        <p>Mortgage PRO Loan Services</p>
        <p>NMLS #2510620</p>
      </div>
      <div>
        <strong>Connect</strong>
        <p><a href="tel:2146839034">214-683-9034</a></p>
        <p><a href="mailto:eric@mtg-pro.com">eric@mtg-pro.com</a></p>
        <p><a href="https://calendar.app.google/RgxDCZDHUD7gUCXc6" target="_blank" rel="noreferrer">Schedule a call</a></p>
      </div>
      <div>
        <strong>Explore</strong>
        <p><a href="#game-plan">Mortgage Game Plan™</a></p>
        <p><a href="#solutions">Loan Solutions</a></p>
        <p><a href="#about">About Eric</a></p>
      </div>
      <p className="footer-legal">Equal Housing Opportunity. This website is for informational purposes only and is not a commitment to lend. Program availability, rates, terms, and borrower eligibility are subject to applicable guidelines, verification, and approval.</p>
    </footer>
  );
}

export default Footer;
