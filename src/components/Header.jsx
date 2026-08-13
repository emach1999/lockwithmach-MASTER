import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/lock-with-mach-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loanDropdownOpen, setLoanDropdownOpen] = useState(false);
  const [calculatorDropdownOpen, setCalculatorDropdownOpen] = useState(false);

  const loanDropdownRef = useRef(null);
  const calculatorDropdownRef = useRef(null);

  const loanPrograms = [
    { name: "First-Time Homebuyers", path: "/first-time-homebuyers" },
    { name: "VA Loans", path: "/va-loans-texas" },
    { name: "FHA Loans", path: "/fha-loans" },
    { name: "Conventional Loans", path: "/conventional-loans" },
    { name: "Buy Before You Sell", path: "/buy-before-you-sell" },
    { name: "Investment Loans", path: "/investment-loans" },
    { name: "Refinancing", path: "/refinancing" },
  ];

  const calculators = [
    {
      name: "Mortgage Payment Calculator",
      path: "/mortgage-calculator",
    },
    {
      name: "Home Affordability Calculator",
      path: "/home-affordability-calculator",
    },
  ];

  const closeEverything = () => {
    setMenuOpen(false);
    setLoanDropdownOpen(false);
    setCalculatorDropdownOpen(false);
  };

  useEffect(() => {
    function handleClick(e) {
      if (
        loanDropdownRef.current &&
        !loanDropdownRef.current.contains(e.target)
      ) {
        setLoanDropdownOpen(false);
      }

      if (
        calculatorDropdownRef.current &&
        !calculatorDropdownRef.current.contains(e.target)
      ) {
        setCalculatorDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const toggleLoanDropdown = () => {
    setLoanDropdownOpen((current) => !current);
    setCalculatorDropdownOpen(false);
  };

  const toggleCalculatorDropdown = () => {
    setCalculatorDropdownOpen((current) => !current);
    setLoanDropdownOpen(false);
  };

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
          ref={loanDropdownRef}
        >
          <button
            type="button"
            className="nav-dropdown-label"
            onClick={toggleLoanDropdown}
            aria-expanded={loanDropdownOpen}
            aria-haspopup="true"
          >
            Loan Solutions

            <svg
              className={`chevron ${loanDropdownOpen ? "rotate" : ""}`}
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

          {loanDropdownOpen && (
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

        <div
          className="nav-dropdown"
          ref={calculatorDropdownRef}
        >
          <button
            type="button"
            className="nav-dropdown-label"
            onClick={toggleCalculatorDropdown}
            aria-expanded={calculatorDropdownOpen}
            aria-haspopup="true"
          >
            Calculators

            <svg
              className={`chevron ${
                calculatorDropdownOpen ? "rotate" : ""
              }`}
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

          {calculatorDropdownOpen && (
            <div className="dropdown-menu">
              {calculators.map((calculator) => (
                <NavLink
                  key={calculator.path}
                  to={calculator.path}
                  onClick={closeEverything}
                >
                  {calculator.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

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