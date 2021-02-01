import React from "react";
import { Link, withRouter } from "react-router-dom";
// import { EXTRA_SMALL_SCREEN } from "../../Constants";

function SubNavbarLink(props) {

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
