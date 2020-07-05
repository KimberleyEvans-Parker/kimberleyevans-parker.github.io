import React from "react";
import AshasQuest1 from "../assets/AshasQuest1.jpg";
import AshasQuest2 from "../assets/AshasQuest2.jpg";
import Doto1 from "../assets/Doto1.gif";
import Doto2 from "../assets/Doto2.gif";
// import RollForReaction from "../assets/Roll for Reaction.mp4";

import Project from "./components/Project";

function Projects() {
  return (
    <div className="content-container">
      <h1 class="font-weight-light">Projects</h1>
      <Project
        imgOnLeft={false}
        heading="Doto"
        subheading="Calendar and To-Do App"
        dates="March 2020 - May 2020"
        description="An open-source software project for an online smart scheduling calendar and to-do app. It has the basic functionality of any calendar app and can be used to make to-do lists. It also has smart scheduling capabilities, meaning the app will allocate inputted tasks in a suitable time in the user’s calendar. Doto uses Google to sign up, meaning that to use this app, the user must have a google account. The development of Doto is done using the M.E.R.N (MongoDB, Express, React, Node) tech stack."
        link="https://github.com/se701g2/Doto"
        images={[Doto1, Doto2]}
      />
      <Project
        imgOnLeft={true}
        heading="Asha's Quest"
        subheading="Java Dungeon Crawler"
        dates="March 2020 - June 2020"
        description="Roll for Reaction is a turn-base dungeon crawler RPG written with React, Redux, JavaScript and CSS. It is an open-source fork of react-rpg and builds upon and enhances the base game. This is done by modifying and adding elements to lightly emulate the popular tabletop role-playing game Dungeons and Dragons: 5th Edition."
        link="https://github.com/Matteas-Eden/roll-for-reaction"
        images={[AshasQuest1, AshasQuest2]}
      />
      <Project
        imgOnLeft={false}
        heading="Feedr"
        subheading="Media Feed Aggregator"
        dates="March 2020"
        description="A webapp for aggregrating media feeds from various services into a single, uniform display for user convenience.
          We are using the React framework to manage the front-end UI and using a Java server utilising the Spring framework for the back-end. The back-end will call the API for the relevant media service and the front-end will visualise this data."
        link="https://github.com/softeng-701-group-5/softeng-701-assignment-1"
        // images={[AshasQuest1, AshasQuest2]}
      />
      <Project
        imgOnLeft={true}
        heading="Flik"
        subheading="Line Following Robot"
        dates="July 2019 - Oct 2019"
        description="A line-following robot that utilises a custom made PCB with light sensors, a radio frequency module, ADC, PSoC and shortest path algorithms written in C."
        link="https://github.com/Matteas-Eden/flik"
        // images={[AshasQuest1, AshasQuest2]}
      />
    </div>
  );
}

export default Projects;
