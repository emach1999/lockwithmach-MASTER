import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/lock-with-mach-logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const loanPrograms = [
    { name: "First-Time Homebuyers", path: "/first-time-homebuyers" },
    { name: "VA Loans", path: "/va-loans-texas" },
    { name: "FHA Loans", path: "/fha-loans" },
    { name: "Conventional Loans", path: "/conventional-loans" },
    { name: "Buy Before You Sell", path: "/buy-before-you-sell" },
    { name: "Investment Loans", path: "/investment-loans" },
    { name: "Refinancing", path: "/refinancing" },
  ];

  return (
    <header className="site-header">
      <Link
        to="/"
        className="brand"
        aria-label="Lock With Mach Home"
        onClick={closeAll}
      >
        <img src={logo} alt="Lock With Mach" />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`site-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        <NavLink to="/" onClick={closeAll}>
          Home
        </NavLink>

        <NavLink to="/mortgage-game-plan" onClick={closeAll}>
          Mortgage Game Plan™
        </NavLink>

        <div className="nav-dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="nav-dropdown-label"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Loan Solutions
            <span>{dropdownOpen ? "▲" : "▼"}</span>
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu">
              {loanPrograms.map((loan) => (
                <NavLink
                  key={loan.path}
                  to={loan.path}
                  onClick={closeAll}
                >
                  {loan.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <a href="/#about" onClick={closeAll}>
          About Eric
        </a>

        <a href="/#contact" onClick={closeAll}>
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

export default Header;