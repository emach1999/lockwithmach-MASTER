import { useState } from "react";
import logo from "../assets/lock-with-mach-logo.png";

function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Lock With Mach home" onClick={closeMenu}>
        <img src={logo} alt="Lock With Mach" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        <a href="#game-plan" onClick={closeMenu}>Game Plan</a>
        <a href="#solutions" onClick={closeMenu}>Loan Solutions</a>
        <a href="#about" onClick={closeMenu}>Meet Eric</a>
        <a href="#faq" onClick={closeMenu}>Questions</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <a className="header-cta" href="https://calendar.app.google/RgxDCZDHUD7gUCXc6" target="_blank" rel="noreferrer">
        Schedule a Call
      </a>
    </header>
  );
}

export default Header;
