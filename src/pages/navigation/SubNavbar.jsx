import React from "react"
import { withRouter } from "react-router-dom";
import { SMALL_SCREEN } from "../../helpers/Constants";
import { SubNavbarLink } from "../components/SubNavbarLink";

export const SubNavbar = withRouter((props) => {
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
          dimensions.width >= SMALL_SCREEN
            ? "navbar-container"
            : "navbar-container-smallscreen"
        }`}
      >
        <ul>
          {props.headings.map((heading) => {
            return <SubNavbarLink section={props.section} heading={heading} />;
          })}
        </ul>
      </div>
    </nav>
  );
})
