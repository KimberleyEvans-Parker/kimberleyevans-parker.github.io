import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Kimberley Evans-Parker
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/projects" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li class={`nav-item`}>
                <a href="https://github.com/KimberleyEvans-Parker">
                  <i
                    class="fa fa-github"
                    aria-hidden="true"
                    style={{
                      color: "grey",
                      fontSize: "24px",
                      margin: "6px",
                    }}
                  ></i>
                </a>
              </li>
              <li class={`nav-item`}>
                <a href="https://www.linkedin.com/in/kimberley-evans-parker/">
                  <i
                    class="fa fa-linkedin"
                    aria-hidden="true"
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      margin: "8px",
                    }}
                  ></i>
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
