import '../src/styles/fireflies.css';

import { Outlet, useLocation } from "react-router-dom"

import { Modal } from "./pages/components/modal/Modal.tsx"
import { Navigation } from "./pages/navigation/Navigation.tsx"
import { SubNavbar } from "./pages/navigation/SubNavbar.tsx"

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
      <Modal />
      <Outlet />
    </>
  )
}

export default Layout
