import { Outlet, useLocation } from "react-router-dom"

import { Navigation } from "./pages/navigation/Navigation"
import { SubNavbar } from "./pages/navigation/SubNavbar"

const Layout = () => {
  const location = useLocation()
  const path = location.pathname

  const showNav = path !== "/"
  const showExperienceSub = path.startsWith("/experience")
  const showHobbiesSub = path.startsWith("/hobbies")

  return (
    <>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
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
          headings={["Lego", "Photography", "Cosplays", "Art", "Travel", "Piano", "Creations"]}
        />
      )}
      <Outlet />
    </>
  )
}

export default Layout
