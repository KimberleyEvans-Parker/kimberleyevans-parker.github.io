import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SMALL_SCREEN } from "../../helpers/Constants"
import { NavbarLink } from "./NavbarLink"
import { NavbarExternalLink } from "./NavbarExternalLink"
import "./navigation.css"
import "./menu-icon.css"
import { HamburgerIcon } from "./HamburberIcon"

export const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const isSmallScreen = dimensions.width < SMALL_SCREEN;

  return (
    <nav className="slide-in">
      <div
        className="navbar-container"
      >
        <ul>
          <Link to="/" onClick={() => setDropdownOpen(false)}>
            <li>Kimberley Evans-Parker</li>
          </Link>
          <HamburgerIcon
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />
        </ul>
        {(dropdownOpen || !isSmallScreen) && (
          <ul
            className="navbar-rightside dropdown-item dropdown-container"
          >
            <NavbarLink
              heading="About"
              setDropdownOpen={setDropdownOpen}
            />
            <NavbarLink
              heading="Experience"
              setDropdownOpen={setDropdownOpen}
              subheadings={isSmallScreen ? [
                "Work",
                "Volunteer",
                "Projects",
                "Awards",
              ] : undefined}
            />
            <NavbarLink
              heading="Hobbies"
              setDropdownOpen={setDropdownOpen}
              subheadings={isSmallScreen ? [
                "Lego",
                "Photography",
                "Cosplays",
                "Art",
                "Travel",
              ] : undefined}
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
        )}
      </div>
    </nav>
  );
}
