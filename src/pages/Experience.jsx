import React from "react";

import Awards from "../assets/experience/Awards.jpg";
import Projects from "../assets/experience/Projects.jpg";
import Volunteer2 from "../assets/experience/Volunteer.jpg";
import Work2 from "../assets/experience/Work.jpg";

import { SMALL_SCREEN } from "../Constants";

function Experience() {
  // Keeps track of the window dimensions.  Updates when window resizes
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
    <div className="content-container experience-container fade left">
      <h1>Experience</h1>
      <p>
        View the experience I've gained through my different jobs, my various
        projects, and view the awards I've won
      </p>

      <div class="row">
        <div class={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}>
          <img src={Work2} alt="Work" />
          <h3 className="centered">Work</h3>
        </div>

        <div class={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}>
          <img src={Volunteer2} alt="Volunteer" />
          <h3 className="centered">Volunteer</h3>
        </div>

        <div class={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}>
          <h3 className="centered">Projects</h3>
          <img src={Projects} alt="Projects" />
        </div>

        <div class={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}>
          <img src={Awards} alt="Awards" />
          <h3 className="centered">Awards</h3>
        </div>
      </div>
    </div>
  );
}

export default Experience;
