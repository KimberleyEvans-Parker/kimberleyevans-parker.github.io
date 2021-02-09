import React from "react";
import { Link, withRouter } from "react-router-dom";

function SubNavbarLink(props) {
  return (
    <Link className="nav-link" to={`/experience/` + props.heading.toLowerCase()}>
      <li
        className={`${props.location.pathname === "/experience/" + props.heading.toLowerCase() ? "active" : ""} 
        `}
      >
        {props.heading}
      </li>
    </Link>
  );
}

export default withRouter(SubNavbarLink);
