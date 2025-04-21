import React from "react";

import Awards from "../../assets/experience/Awards.jpg";
import Projects from "../../assets/experience/Projects.jpg";
import Volunteer from "../../assets/experience/Volunteer.jpg";
import Work from "../../assets/experience/Work.jpg";
import { Link } from "react-router-dom";

import { SMALL_SCREEN } from "../../helpers/Constants";

export const Experience = () => {
  // Keeps track of the window dimensions.  Updates when window resizes
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
    <div className="content-container experience-container fade left">
      <h1>Experience</h1>
      <p>
        View the experience I've gained through my different jobs, my various
        projects, and view the awards I've won
      </p>

      <div className="row">
        <div
          className={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}
        >
          <Link to="Work">
            <img src={Work} alt="Work" className="experience-img" />
            <h3 className="centered">Work</h3>
            <div className="layer"></div>
          </Link>
        </div>

        <div
          className={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}
        >
          <Link to="Volunteer">
            <img src={Volunteer} alt="Volunteer" className="experience-img" />
            <h3 className="centered">Volunteer</h3>
            <div className="layer"></div>
          </Link>
        </div>

        <div
          className={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}
        >
          <Link to="Projects">
            <img src={Projects} alt="Projects" className="experience-img" />
            <h3 className="centered">Projects</h3>
            <div className="layer"></div>
          </Link>
        </div>

        <div
          className={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}
        >
          <Link to="Awards">
            <img src={Awards} alt="Awards" className="experience-img" />
            <h3 className="centered">Awards</h3>
            <div className="layer"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
