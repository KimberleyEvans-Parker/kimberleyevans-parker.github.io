import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  return (
    <div className="navigation">
      <nav>
        {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark"> */}
        <div className="navbar-container">
          <ul>
            <Link to="/">
              <li>
                {/* <li className={dropdownOpen && "dropdown-open"}> */}
                Kimberley Evans-Parker
              </li>
            </Link>
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
          </ul>
          {dropdownOpen && (
            <div
              className={`navbar-rightside ${dropdownOpen && "dropdown-open"}`}
            >
              <ul>
                <Link className="nav-link" to="/about">
                  <li
                    className={`${dropdownOpen && "dropdown-open"} ${
                      props.location.pathname === "/about" ? "active" : ""
                    }`}
                  >
                    About
                  </li>
                </Link>
                <Link className="nav-link" to="/projects">
                  <li
                    className={`${dropdownOpen && "dropdown-open"} ${
                      props.location.pathname === "/projects" ? "active" : ""
                    }`}
                  >
                    Projects
                  </li>
                </Link>
                <a href="https://github.com/KimberleyEvans-Parker">
                  <li className={dropdownOpen && "dropdown-open"}>
                    <i
                      className="fa fa-github"
                      aria-hidden="true"
                      // style={{
                      //   fontSize: "24px",
                      //   margin: "6px",
                      // }}
                    ></i>
                  </li>
                </a>
                <a href="https://www.linkedin.com/in/kimberley-evans-parker/">
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
