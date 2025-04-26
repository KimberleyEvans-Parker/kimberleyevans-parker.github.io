import React from "react"
import { SMALL_SCREEN } from "../../helpers/Constants";
import { SubNavbarLink } from "../components/SubNavbarLink";

interface SubNavbarProps {
  headings: string[];
  section: string;
}

export const SubNavbar = ({ headings, section }: SubNavbarProps) => {
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
    return () => {
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
          {headings.map((heading) => {
            return <SubNavbarLink section={section} heading={heading} />;
          })}
        </ul>
      </div>
    </nav>
  )
}
