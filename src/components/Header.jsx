import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/lock-with-mach-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const loanPrograms = [
    { name: "First-Time Homebuyers", path: "/first-time-homebuyers" },
    { name: "VA Loans", path: "/va-loans-texas" },
    { name: "FHA Loans", path: "/fha-loans" },
    { name: "Conventional Loans", path: "/conventional-loans" },
    { name: "Buy Before You Sell", path: "/buy-before-you-sell" },
    { name: "Investment Loans", path: "/investment-loans" },
    { name: "Refinancing", path: "/refinancing" },
  ];

  const closeEverything = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    function handleClick(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <header className="site-header">
      <Link
        to="/"
        className="brand"
        onClick={closeEverything}
      >
        <img src={logo} alt="Lock With Mach" />
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`site-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        <NavLink to="/" onClick={closeEverything}>
          Home
        </NavLink>

        <NavLink
          to="/mortgage-game-plan"
          onClick={closeEverything}
        >
          Mortgage Game Plan™
        </NavLink>

        <div
          className="nav-dropdown"
          ref={dropdownRef}
        >
          <button
            type="button"
            className="nav-dropdown-label"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            Loan Solutions

            <svg
              className={`chevron ${dropdownOpen ? "rotate" : ""}`}
              width="12"
              height="12"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                d="M5 7l5 6 5-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu">
              {loanPrograms.map((loan) => (
                <NavLink
                  key={loan.path}
                  to={loan.path}
                  onClick={closeEverything}
                >
                  {loan.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <NavLink
          to="/mortgage-calculator"
          onClick={closeEverything}
        >
          Calculators
        </NavLink>

        <a href="/#about" onClick={closeEverything}>
          About Eric
        </a>

        <a href="/#contact" onClick={closeEverything}>
          Contact
        </a>
      </nav>

      <a
        className="header-cta"
        href="https://calendar.app.google/RgxDCZDHUD7gUCXc6"
        target="_blank"
        rel="noreferrer"
      >
        Schedule a Call
      </a>
    </header>
  );
}