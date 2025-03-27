import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { SMALL_SCREEN } from "../../helpers/Constants";
import "./navigation.css";

export const Navigation = withRouter((props) => {
  const [dropdownOpen, setdropdownOpen] = useState(false);

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
        setdropdownOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return (_) => {
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
          <Link to="/" onClick={() => setdropdownOpen(false)}>
            <li>Kimberley Evans-Parker</li>
          </Link>
          {dimensions.width < SMALL_SCREEN && (
            <div
              className={`navbar-rightside`}
              onClick={() => setdropdownOpen(!dropdownOpen)}
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
                onClick={() => setdropdownOpen(false)}
              >
                <li
                  className={`${dropdownOpen ? "dropdown-open" : ""} ${
                    props.location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  About
                </li>
              </Link>
              <Link
                className="nav-link"
                to="/experience"
                onClick={() => setdropdownOpen(false)}
              >
                <li
                  className={`${dropdownOpen ? "dropdown-open" : ""} ${
                    props.location.pathname.startsWith("/experience")
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
                onClick={() => setdropdownOpen(false)}
              >
                <li
                  className={`${dropdownOpen && "dropdown-open"} ${
                    props.location.pathname === "/hobbies" ? "active" : ""
                  }`}
                >
                  Hobbies
                </li>
              </Link>
              <a
                href="https://github.com/KimberleyEvans-Parker"
                onClick={() => setdropdownOpen(false)}
                aria-label="GitHub"
              >
                <li className={dropdownOpen ? "dropdown-open" : ""}>
                  <i className="fa fa-github" aria-hidden="true"></i>
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/kimberleyevans-parker/"
                onClick={() => setdropdownOpen(false)}
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
})
