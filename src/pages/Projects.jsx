import React, { useState } from "react";

import Upskill1 from "../assets/projects/Upskill/Home Page.gif";
import Upskill2 from "../assets/projects/Upskill/Instructors.gif";
import Upskill3 from "../assets/projects/Upskill/Instructor Profile.gif";
import Upskill4 from "../assets/projects/Upskill/Classes and Booking.gif";
import Upskill5 from "../assets/projects/Upskill/Rewards.gif";
import Upskill6 from "../assets/projects/Upskill/Company Challenges.gif";
import AshasQuest1 from "../assets/projects/Asha's Quest/Logo.jpg";
import AshasQuest2 from "../assets/projects/Asha's Quest/Title Screen.jpg";
import Doto1 from "../assets/projects/Doto/Marketplace.gif";
import Doto2 from "../assets/projects/Doto/Toggle Tasks.gif";
import RollForReaction1 from "../assets/projects/Roll for Reaction/Logo.jpg";
import RollForReaction2 from "../assets/projects/Roll for Reaction/Playthrough.gif";
import RollForReaction3 from "../assets/projects/Roll for Reaction/Features.gif";
import Flik1 from "../assets/projects/Flik/Traversing the map.gif";
import Flik2 from "../assets/projects/Flik/Line following.gif";
import Flik3 from "../assets/projects/Flik/PCB.jpg";

import Project from "./components/Project";

function Projects() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const openModal = (image, caption) => {
    console.log("open modal", image, caption);
    setImage(image);
    setCaption(caption);
  };

  return (
    <div className="content-container">
      <h1 className="font-weight-light">Projects</h1>
      {image && (
        <>
          <div className="modal-background">
            <span className="close" onClick={() => setImage(null)}>
              &times;
            </span>
            <img alt="" src={image} className="modal-content" />
            {caption && (
              <div className="caption">
                <h2>{caption}</h2>
              </div>
            )}
          </div>
        </>
      )}
      <Project
        imgOnLeft={true}
        heading="Upskill"
        subheading="Platform to connect and upskill"
        dates="July 2020"
        description="Upskill was made during the DEVS 2020 hackathon, in only 48 hours.
          It is a a platform for live learning and teaching, whilst you connect and network with like-minded locals.  
          The platform also serves as a place for companies to post challenges and recruit bright minds.
          Upskill aims to help those impacted by Covid 19, by allowing them to upskill and find new job opportunities.  "
        link="https://github.com/Pyxxil/upskill"
        images={[Upskill1, Upskill2, Upskill3, Upskill4, Upskill5, Upskill6]}
        openModal={openModal}
        animationDelay="0s"
      />
      <Project
        imgOnLeft={false}
        heading="Roll for Reaction"
        subheading="Turn-Based Dungeon Crawler RPG"
        dates="March 2020 – June 2020"
        description="Roll for Reaction is a turn-based dungeon crawler RPG written with React, Redux, JavaScript, HTML and CSS. 
          It is an open-source fork of react-rpg and builds upon and enhances the base game. 
          This is done by modifying and adding elements to lightly emulate the popular tabletop role-playing game Dungeons and Dragons: 5th Edition."
        link="https://github.com/Matteas-Eden/roll-for-reaction"
        images={[RollForReaction1, RollForReaction2, RollForReaction3]}
        openModal={openModal}
        animationDelay="0.4s"
      />
      <Project
        imgOnLeft={true}
        heading="Doto"
        subheading="Calendar and To-Do App"
        dates="March 2020 - May 2020"
        description="An open-source software project for an online smart scheduling calendar and to-do app. 
          It has the basic functionality of any calendar app and can be used to make to-do lists. 
          It also has smart scheduling capabilities, meaning the app will allocate inputted tasks in a suitable time in the user’s calendar. 
          Doto uses Google to sign up, meaning that to use this app, the user must have a google account. 
          The development of Doto is done using the M.E.R.N (MongoDB, Express, React, Node) tech stack."
        link="https://github.com/se701g2/Doto"
        images={[Doto1, Doto2]}
        openModal={openModal}
        animationDelay="0.8s"
      />
      <Project
        imgOnLeft={false}
        heading="Feedr"
        subheading="Media Feed Aggregator"
        dates="March 2020"
        description="A webapp for aggregrating media feeds from various services into a single, uniform display for user convenience.
          We are using the React framework to manage the front-end UI and using a Java server utilising the Spring framework for the back-end. 
          The back-end will call the API for the relevant media service and the front-end will visualise this data."
        link="https://github.com/softeng-701-group-5/softeng-701-assignment-1"
        openModal={openModal}
        animationDelay="1.2"
      />
      <Project
        imgOnLeft={true}
        heading="Flik"
        subheading="Line Following Robot"
        dates="July 2019 - Oct 2019"
        description="A line-following robot that utilises a custom made PCB with light sensors, a radio frequency module, ADC, PSoC and shortest path algorithms written in C."
        link="https://github.com/Matteas-Eden/flik"
        images={[Flik1, Flik2, Flik3]}
        openModal={openModal}
        animationDelay="1.6s"
      />
      <Project
        imgOnLeft={false}
        heading="Midnight's Messages"
        subheading="CherryPy Social Network"
        dates="May 2019 - June 2019"
        description="A social network similar to Twitter, which was developed individually in Python 3, on a CherryPy server. 
          It also utilises NaCl, json, jinja 2, HTML5 and CSS, JavaScript and cryptography. 
          This could authorize and report login from a login server to a main server run by the lecturer, and see how many web clients are online. 
          It could also send messages privately and in group chats while sending public 'tweets' out to all viewers, and block keywords and people from showing up. "
        openModal={openModal}
        animationDelay="2s"
      />
      <Project
        imgOnLeft={true}
        heading="Eventigate"
        subheading="Project During KPMG Hackathon"
        dates="May 2020"
        description="A hub for people to organise and meet up at a range of events with a specified host and location. 
          Aims to connect organisations and volunteer groups who wish to hold events with places people. 
          This was done by 6 people using JavaScript, HTML and CSS. Won Best Presentation in the AUCS, KPMG hackathon."
        link="https://github.com/KimberleyEvans-Parker/Eventigate"
        openModal={openModal}
        animationDelay="2.4s"
      />
      <Project
        imgOnLeft={true}
        heading="Flappy Bird"
        subheading="FPGA VHDL Side Scroller Game"
        dates="April 2019 - May 2019"
        description="A game based off Flappy Bird, created by a team of 2, using VHDL. 
          This was designed to be run on an Altera DE0 Board, equipped with an Altera Cyclone III 3C16 FPGA. 
          Understanding of the FPGA hardware, VHDL and Git were developed."
        openModal={openModal}
        animationDelay="2.8s"
      />
      <Project
        imgOnLeft={false}
        heading="Asha's Quest"
        subheading="Java Dungeon Crawler"
        dates="March 2019 - May 2019"
        description="Asha's Quest is an action-adventure game in the vein of Zelda, created using Java, primarily Java Swing. 
          This was a 2-person project, with the game created from scratch. 
          Details of the project are available on the GitHub repository it was cloned to, shown through a GitHub Wiki. 
          Proficiency in Java 8 (particularly Java Swing and Java AWT) and Git developed."
        link="https://github.com/Matteas-Eden/roll-for-reaction"
        images={[AshasQuest1, AshasQuest2]}
        openModal={openModal}
        animationDelay="3.2s"
      />
      <Project
        imgOnLeft={true}
        heading="Wireless Energy Monitor"
        dates="Aug 2018 – Nov 2018"
        description="Wireless Energy Monitor to display voltage, current and power for ELECTENG 209. 
          Comprised of a digital and an analog section. Data receiver described in VHDL, transmitter programmed in C. 
          Receiver was a CPLD, transmitter was an ATMEGA328PB microcontroller on a self- designed PCB. 
          Breadboarding, LTSpice simulations and Oscilloscopes were used for testing."
        openModal={openModal}
        animationDelay="3.6s"
      />
    </div>
  );
}

export default Projects;
