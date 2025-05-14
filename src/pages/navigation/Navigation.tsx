import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { SMALL_SCREEN } from "../../helpers/Constants"
import "./navigation.css"
import "./menu-icon.css"
import { NavbarLink } from "./NavbarLink"
import { NavbarExternalLink } from "./NavbarExternalLink"

export const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

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
      if (dimensions.width >= SMALL_SCREEN) {
        setDropdownOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <nav className="slide-in">
      <div
        className={`${
          dimensions.width >= SMALL_SCREEN
            ? "navbar-container"
            : "navbar-container-smallscreen"
        }`}
      >
        <ul>
          <Link to="/" onClick={() => setDropdownOpen(false)}>
            <li>Kimberley Evans-Parker</li>
          </Link>
          {dimensions.width < SMALL_SCREEN && (
            <div
              className={`navbar-rightside`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <li style={{ height: "100%", paddingBottom: "10.5px" }}>
                <div className={`${dropdownOpen && "change"} menu-icon`}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
              </li>
            </div>
          )}
        </ul>
        {(dropdownOpen || dimensions.width >= SMALL_SCREEN) && (
          <div
            className={`navbar-rightside dropdown-item`}
          >
            <ul>
              <NavbarLink
                heading="About"
                setDropdownOpen={setDropdownOpen}
              />
              <NavbarLink
                heading="Experience"
                setDropdownOpen={setDropdownOpen}
              />
              <NavbarLink
                heading="Hobbies"
                setDropdownOpen={setDropdownOpen}
              />
              <NavbarExternalLink
                url="https://github.com/KimberleyEvans-Parker"
                ariaLabel="GitHub"
                className="fa-github"
                setDropdownOpen={setDropdownOpen}
              />
              <NavbarExternalLink
                url="https://www.linkedin.com/in/kimberleyevans-parker/"
                ariaLabel="LinkedIn"
                className="fa-linkedin"
                setDropdownOpen={setDropdownOpen}
              />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
