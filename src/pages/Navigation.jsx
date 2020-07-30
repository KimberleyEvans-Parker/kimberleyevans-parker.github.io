import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  /* Keeps track of the window dimensions.  Updates when window resizes */
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (dimensions.width >= 600) {
        setdropdownOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="navigation">
      <nav>
        <div className="navbar-container">
          <ul>
            <Link to="/" onClick={() => setdropdownOpen(false)}>
              <li>Kimberley Evans-Parker</li>
            </Link>
            {dimensions.width < 650 && (
              <div
                className={`navbar-rightside`}
                onClick={() => setdropdownOpen(!dropdownOpen)}
              >
                <li style={{ height: "100%", paddingBottom: "10.5px" }}>
                  <div class={`${dropdownOpen && "change"} menu-icon`}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                  </div>
                </li>
              </div>
            )}
          </ul>
          {(dropdownOpen || dimensions.width >= 650) && (
            <div
              className={`navbar-rightside ${dropdownOpen && "dropdown-open"}`}
            >
              <ul>
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => setdropdownOpen(false)}
                >
                  <li
                    className={`${dropdownOpen && "dropdown-open"} ${
                      props.location.pathname === "/about" ? "active" : ""
                    }`}
                  >
                    About
                  </li>
                </Link>
                <Link
                  className="nav-link"
                  to="/projects"
                  onClick={() => setdropdownOpen(false)}
                >
                  <li
                    className={`${dropdownOpen && "dropdown-open"} ${
                      props.location.pathname === "/projects" ? "active" : ""
                    }`}
                  >
                    Projects
                  </li>
                </Link>
                <Link
                  className="nav-link"
                  to="/awards"
                  onClick={() => setdropdownOpen(false)}
                >
                  <li
                    className={`${dropdownOpen && "dropdown-open"} ${
                      props.location.pathname === "/awards" ? "active" : ""
                    }`}
                  >
                    Awards
                  </li>
                </Link>
                <a
                  href="https://github.com/KimberleyEvans-Parker"
                  onClick={() => setdropdownOpen(false)}
                >
                  <li className={dropdownOpen && "dropdown-open"}>
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/kimberley-evans-parker/"
                  onClick={() => setdropdownOpen(false)}
                >
                  <li className={dropdownOpen && "dropdown-open"}>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </li>
                </a>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
