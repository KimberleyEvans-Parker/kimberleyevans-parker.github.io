import React from "react";

import Awards1 from "../assets/experience/awards 1.jpg";
import Awards2 from "../assets/experience/awards 2.jpg";
import Awards3 from "../assets/experience/awards 3.jpg";
import Projects1 from "../assets/experience/projects 1.jpg";
import Projects2 from "../assets/experience/projects 2.jpg";
import Projects3 from "../assets/experience/projects 3.jpg";
import Projects4 from "../assets/experience/projects 4.jpg";
import Projects5 from "../assets/experience/projects 5.jpg";
import Projects6 from "../assets/experience/projects 6.jpg";
import Projects7 from "../assets/experience/projects 7.jpg";
import Projects8 from "../assets/experience/projects 8.jpg";
import Projects9 from "../assets/experience/projects 9.jpg";
import Projects10 from "../assets/experience/projects 10.jpg";
import Projects11 from "../assets/experience/projects 11.jpg";
import Volunteer1 from "../assets/experience/volunteer 1.jpg";
import Volunteer2 from "../assets/experience/volunteer 2.jpg";
import Work1 from "../assets/experience/work 1.jpg";
import Work2 from "../assets/experience/work 2.jpg";

function Experience() {
  return (
    <div className="content-container experience-container fade left">
      <h1>Experience</h1>
      <p>
        View the experience I've gained through my different jobs, my various
        projects, and view the awards I've won
      </p>

      <div class="row">
        <div class="column">
          <img src={Awards1} alt="Awards" />
          <img src={Awards2} alt="Awards" />
          <img src={Awards3} alt="Awards" />
        </div>

        <div class="column">
          <img src={Projects1} alt="Projects" />
          <img src={Projects2} alt="Projects" />
          <img src={Projects3} alt="Projects" />
          <img src={Projects4} alt="Projects" />
          <img src={Projects5} alt="Projects" />
          <img src={Projects6} alt="Projects" />
          <img src={Projects7} alt="Projects" />
          <img src={Projects8} alt="Projects" />
          <img src={Projects9} alt="Projects" />
          <img src={Projects10} alt="Projects" />
          <img src={Projects11} alt="Projects" />
        </div>

        <div class="column">
          <img src={Work1} alt="Work" />
          <img src={Work2} alt="Work" />
        </div>

        <div class="column">
          <img src={Volunteer1} alt="Volunteer" />
          <img src={Volunteer2} alt="Volunteer" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
