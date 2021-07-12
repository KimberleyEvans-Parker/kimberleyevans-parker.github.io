import React from "react";

import Awards from "../assets/experience/Awards.jpg";
import Projects from "../assets/experience/Projects.jpg";
import Volunteer2 from "../assets/experience/Volunteer.jpg";
import Work2 from "../assets/experience/Work.jpg";
import { Link } from "react-router-dom";

import { SMALL_SCREEN } from "../Constants";

function Hobbies() {
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
      <h1>Hobbies</h1>
      <p>
        I have a lot of hobbies including badminton, piano, art and skiing. Here
        are some them :)
      </p>

      <div class="row">
        <div class={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}>
          <Link to="experience/Work">
            <img src={Work2} alt="Work" className="experience-img" />
            <h3 className="centered">Work</h3>
            <div className="layer"></div>
          </Link>
        </div>

        <div class={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}>
          <Link to="experience/Volunteer">
            <img src={Volunteer2} alt="Volunteer" className="experience-img" />
            <h3 className="centered">Volunteer</h3>
            <div className="layer"></div>
          </Link>
        </div>

        <div class={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}>
          <Link to="experience/Projects">
            <img src={Projects} alt="Projects" className="experience-img" />
            <h3 className="centered">Projects</h3>
            <div className="layer"></div>
          </Link>
        </div>

        <div class={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}>
          <Link to="experience/Awards">
            <img src={Awards} alt="Awards" className="experience-img" />
            <h3 className="centered">Awards</h3>
            <div className="layer"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
