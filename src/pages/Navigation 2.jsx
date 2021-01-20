import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation2(props) {
  return (
      <nav className="nav2">
        <div className="navbar-container">
          <ul>
                <Link
                  className="nav-link"
                  to="/projects"
                >
                  <li
                    className={`${props.location.pathname === "/experience/projects" ? "active" : ""}`}
                  >
                    Projects
                  </li>
                </Link>
                <Link
                  className="nav-link"
                  to="/awards"
                >
                  <li
                    className={`${props.location.pathname === "/experience/awards" ? "active" : ""}`}
                  >
                    Awards
                  </li>
                </Link>
                <Link
                  className="nav-link"
                  to="/work"
                >
                  <li
                    className={`${props.location.pathname === "/experience/work" ? "active" : ""}`}
                  >
                    Work
                  </li>
                </Link>
              </ul>
        </div>
      </nav>
  );
}

export default withRouter(Navigation2);
