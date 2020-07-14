import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Kimberley Evans-Parker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/projects" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className={`nav-item`}>
                <a href="https://github.com/KimberleyEvans-Parker">
                  <i
                    className="fa fa-github"
                    aria-hidden="true"
                    style={{
                      fontSize: "24px",
                      margin: "6px",
                    }}
                  ></i>
                </a>
              </li>
              <li className={`nav-item`}>
                <a href="https://www.linkedin.com/in/kimberley-evans-parker/">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
