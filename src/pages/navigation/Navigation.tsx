import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { SMALL_SCREEN } from "../../helpers/Constants"
import "./navigation.css"
import "./menu-icon.css"

export const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  /* Keeps track of the window dimensions.  Updates when window resizes */
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (dimensions.width >= SMALL_SCREEN) {
        setDropdownOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <nav className="slide-in">
      <div
        className={`${
          dimensions.width >= SMALL_SCREEN
            ? "navbar-container"
            : "navbar-container-smallscreen"
        }`}
      >
        <ul>
          <Link to="/" onClick={() => setDropdownOpen(false)}>
            <li>Kimberley Evans-Parker</li>
          </Link>
          {dimensions.width < SMALL_SCREEN && (
            <div
              className={`navbar-rightside`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <li style={{ height: "100%", paddingBottom: "10.5px" }}>
                <div className={`${dropdownOpen && "change"} menu-icon`}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
              </li>
            </div>
          )}
        </ul>
        {(dropdownOpen || dimensions.width >= SMALL_SCREEN) && (
          <div
            className={`navbar-rightside ${
              dropdownOpen ? "dropdown-open" : ""
            }`}
          >
            <ul>
              <Link
                className="nav-link"
                to="/about"
                onClick={() => setDropdownOpen(false)}
              >
                <li
                  className={`${dropdownOpen ? "dropdown-open" : ""} ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  About
                </li>
              </Link>
              <Link
                className="nav-link"
                to="/experience"
                onClick={() => setDropdownOpen(false)}
              >
                <li
                  className={`${dropdownOpen ? "dropdown-open" : ""} ${
                    location.pathname.startsWith("/experience")
                      ? "active"
                      : ""
                  }`}
                >
                  Experience
                </li>
              </Link>
              <Link
                className="nav-link"
                to="/hobbies"
                onClick={() => setDropdownOpen(false)}
              >
                <li
                  className={`${dropdownOpen && "dropdown-open"} ${
                    location.pathname === "/hobbies" ? "active" : ""
                  }`}
                >
                  Hobbies
                </li>
              </Link>
              <a
                href="https://github.com/KimberleyEvans-Parker"
                onClick={() => setDropdownOpen(false)}
                aria-label="GitHub"
              >
                <li className={dropdownOpen ? "dropdown-open" : ""}>
                  <i className="fa fa-github" aria-hidden="true"></i>
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/kimberleyevans-parker/"
                onClick={() => setDropdownOpen(false)}
                aria-label="LinkedIn"
              >
                <li className={dropdownOpen ? "dropdown-open" : ""}>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
