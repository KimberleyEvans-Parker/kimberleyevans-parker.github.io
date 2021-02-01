import React from "react";
import { withRouter } from "react-router-dom";
import { EXTRA_SMALL_SCREEN } from "../Constants";
import SubNavbarLink from "./components/SubNavbarLink";

function Navigation2(props) {

  return (
      <nav className="nav2 slide-in">
        <div className="navbar-container">
          <ul>
            <SubNavbarLink heading="Work" />
            <SubNavbarLink heading="Volunteer" />
            <SubNavbarLink heading="Projects" />
            <SubNavbarLink heading="Awards" />
          </ul>
        </div>
      </nav>
  );
}

export default withRouter(Navigation2);
