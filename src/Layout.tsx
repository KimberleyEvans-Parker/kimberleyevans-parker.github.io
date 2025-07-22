import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./pages/navigation/Navigation";
import { SubNavbar } from "./pages/navigation/SubNavbar";
import { SMALL_SCREEN } from "./helpers/Constants";

const Layout = () => {
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
  
  const location = useLocation();
  const path = location.pathname;

  const showNav = path !== "/";
  const smallScreen = dimensions.width < SMALL_SCREEN;
  const showExperienceSub = path.startsWith("/experience") && !smallScreen;
  const showHobbiesSub = path.startsWith("/hobbies") && !smallScreen;

  return (
    <>
      {showNav && <Navigation />}
      {showNav && showExperienceSub && (
        <SubNavbar
          section={"experience"}
          headings={["Work", "Volunteer", "Projects", "Awards"]}
        />
      )}
      {showNav && showHobbiesSub && (
        <SubNavbar
          section={"hobbies"}
          headings={["Lego", "Photography", "Cosplays", "Art", "Travel"]}
        />
      )}
      <Outlet />
    </>
  );
};

export default Layout;
