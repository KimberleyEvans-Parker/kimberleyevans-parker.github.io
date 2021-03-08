import React from "react";
import { withRouter } from "react-router-dom";
import { EXTRA_SMALL_SCREEN } from "../Constants";
import SubNavbarLink from "./components/SubNavbarLink";

function Navigation2(props) {
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
    }

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <nav className="nav2 slide-in">
      <div
        className={`nav2-container ${
          dimensions.width >= EXTRA_SMALL_SCREEN
            ? "navbar-container"
            : "navbar-container-smallscreen"
        }`}
      >
        <ul
          className={
            dimensions.width < EXTRA_SMALL_SCREEN ?? "extra-small-screensize"
          }
        >
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
