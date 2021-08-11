import React, { useState } from "react";

import Industry1 from "../assets/projects/Industry 4.0/Landing Page and Login.gif";
import Industry2 from "../assets/projects/Industry 4.0/Add and Edit Machines.gif";
import Industry3 from "../assets/projects/Industry 4.0/Subscribe to machines.gif";
import Industry4 from "../assets/projects/Industry 4.0/Add and Edit Sensor.gif";
import Industry5 from "../assets/projects/Industry 4.0/Sensor Page.gif";
import Industry6 from "../assets/projects/Industry 4.0/Sensor Data.gif";
import Industry7 from "../assets/projects/Industry 4.0/Edit Email Notifications.gif";
import Industry8 from "../assets/projects/Industry 4.0/Email Notifications.gif";
import Industry9 from "../assets/projects/Industry 4.0/Changing Machine Status.gif";
import HeartHealer1 from "../assets/projects/Heart Healer/App.gif";
import HeartHealer2 from "../assets/projects/Heart Healer/AI Counsellor.gif";
import Upskill1 from "../assets/projects/Upskill/Home Page.gif";
import Upskill2 from "../assets/projects/Upskill/Instructors.gif";
import Upskill3 from "../assets/projects/Upskill/Instructor Profile.gif";
import Upskill4 from "../assets/projects/Upskill/Classes and Booking.gif";
import Upskill5 from "../assets/projects/Upskill/Rewards.gif";
import Upskill6 from "../assets/projects/Upskill/Company Challenges.gif";
import Doto1 from "../assets/projects/Doto/Landing Page.png";
import Doto2 from "../assets/projects/Doto/Adding a task.gif";
import Doto3 from "../assets/projects/Doto/Gamification.gif";
import Doto4 from "../assets/projects/Doto/Marketplace.gif";
import Feedr1 from "../assets/projects/Feedr/Landing Page.png";
import Feedr2 from "../assets/projects/Feedr/Home Page.png";
import Feedr3 from "../assets/projects/Feedr/Integration Center.png";
import Envirobot from "../assets/projects/Envirobot/Playthrough.gif";
import RollForReaction1 from "../assets/projects/Roll for Reaction/Logo.jpg";
import RollForReaction2 from "../assets/projects/Roll for Reaction/Playthrough.gif";
import RollForReaction3 from "../assets/projects/Roll for Reaction/Features.gif";
import Flik1 from "../assets/projects/Flik/Traversing the map.gif";
import Flik2 from "../assets/projects/Flik/Line following.gif";
import Flik3 from "../assets/projects/Flik/PCB.jpg";
import Eventigate1 from "../assets/projects/Eventigate/Dashboard.png";
import Eventigate2 from "../assets/projects/Eventigate/Location Page.png";
import Eventigate3 from "../assets/projects/Eventigate/Profile Page.gif";
import AshasQuest1 from "../assets/projects/Asha's Quest/Title Screen.jpg";
import AshasQuest2 from "../assets/projects/Asha's Quest/Character Selection.jpg";
import AshasQuest3 from "../assets/projects/Asha's Quest/Playthrough.gif";
import AshasQuest4 from "../assets/projects/Asha's Quest/Logo.jpg";

import ContentItem from "./components/ContentItem";

import {
  GIT,
  PYTHON,
  JAVA,
  C,
  VHDL,
  HTML,
  CSS,
  JS,
  TS,
  REACT,
  REDUX,
  GDSCRIPT,
  AI,
} from "../Constants";

function Projects() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const openModal = (image, caption) => {
    setImage(image);
    setCaption(caption);
  };

  let animationDelay = 0;

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s";
    animationDelay += 0.4;
    return animationDelaySeconds;
  };

  let onLeft = false;

  const imgOnLeft = () => {
    onLeft = !onLeft;
    return onLeft;
  };

  return (
    <div className="content-container experience-container">
      <h1 className="fade left">Projects</h1>
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
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Industry 4.0"
        subheading="Machine Health Monitoring Software"
        dates="August 2020 - November 2020"
        description="A cross-platform application made by 8 people following agile practices.  
          The application was able to take data from different machines and sensors and display them to the technicians.  
          Users would be able to view this data in real-time, and see historical data, and receive notifications when a machine reported unhealthy readings.
          The project which we started for our Product Owner has received funding to continue its production.  "
        githubLink="https://github.com/KimberleyEvans-Parker/industry-4"
        images={"../../assets/projects/Industry 4.0"}
        technologies={[GIT, HTML, CSS, JS, REACT, REDUX]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      {/* <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Heart Healer"
        subheading="AI Counsellor"
        dates="September 2020"
        description="This was conceptualised for the 2020 MYOB IT challenge, in which the problems of isolation and quarantine were highlighted.  
          To combat the problems that arose through isolation and quarantine, we created Heart Healer.
          Heart Healer is an AI chatbot and counsellor that monitors your mental wellbeing and productivity.  
          It can schedule in breaks for you, talk to you when you're lonely and connect you to other people.  
          This chatbot would be able to learn individual's preferences through an AI backend and connect people to their business or personal counsellor if needed."
        images={[HeartHealer1, HeartHealer2]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Upskill"
        subheading="Platform to connect and upskill"
        dates="July 2020"
        description="Upskill was made during the DEVS 2020 hackathon, in only 48 hours.
          It is a a platform for live learning and teaching, where you connect and network with like-minded locals.  
          The platform also serves as a place for companies to post challenges and recruit bright minds.
          Upskill aims to help those impacted by Covid 19, by allowing them to upskill and find new job opportunities.  "
        githubLink="https://github.com/Pyxxil/upskill"
        images={[Upskill1, Upskill2, Upskill3, Upskill4, Upskill5, Upskill6]}
        technologies={[GIT, HTML, CSS, TS, REACT]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Roll for Reaction"
        subheading="Turn-Based Dungeon Crawler RPG"
        dates="March 2020 – June 2020"
        description="Roll for Reaction is a turn-based dungeon crawler RPG written with React, Redux, JavaScript, HTML and CSS. 
          It is an open-source fork of react-rpg and builds upon and enhances the base game. 
          This is done by modifying and adding elements to lightly emulate the popular tabletop role-playing game Dungeons and Dragons: 5th Edition."
        githubLink="https://github.com/Matteas-Eden/roll-for-reaction"
        images={[RollForReaction1, RollForReaction2, RollForReaction3]}
        technologies={[GIT, HTML, CSS, JS, REACT, REDUX]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Doto"
        subheading="Calendar and To-Do App"
        dates="March 2020 - May 2020"
        description="An open-source software project for an online smart scheduling calendar and to-do app. 
          It has the basic functionality of any calendar app and can be used to make to-do lists. 
          It has smart scheduling capabilities, meaning the app will allocate inputted tasks in a suitable time in the user’s calendar. 
          Doto uses Google auth to allow people to sign in. 
          The development of Doto is done using the M.E.R.N (MongoDB, Express, React, Node) tech stack."
        githubLink="https://github.com/se701g2/Doto"
        images={[Doto1, Doto2, Doto3, Doto4]}
        technologies={[GIT, HTML, CSS, JS, REACT, REDUX]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Feedr"
        subheading="Media Feed Aggregator"
        dates="March 2020"
        description="A webapp for aggregating media feeds from various services into a single, uniform display for user convenience.
          We are using the React framework to manage the front-end UI and using a Java server utilising the Spring framework for the back-end. 
          The back-end will call the API for the relevant media service and the front-end will visualise this data."
        githubLink="https://github.com/softeng-701-group-5/softeng-701-assignment-1"
        images={[Feedr1, Feedr2, Feedr3]}
        technologies={[GIT, HTML, CSS, JS, REACT, REDUX]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="A Little Midgnight Music"
        subheading="Research into Automatic Music Transcription"
        dates="March 2020 - November 2020"
        description="My partner and I did our part 4 research topic into the Automatic transcription of piano music.  
          During this project, research was conducted into Fourier Transform, STFT, Constant-Q, Onset/Beat Tracking, Machine Learning: Artificial, Convolutional and Recurrent Neural Networks.  
          Our neural network was an extension of the wav2mid project Jon Sleep created and converted wav files into the more computer-readible midi files.  "
        githubLink="https://github.com/KimberleyEvans-Parker/wav2mid"
        technologies={[GIT, PYTHON, AI]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Envirobot"
        subheading="Platofrmer Game"
        dates="Febraury 2020"
        description="Created for the Global Game Jam, by a team of 3.  
          This is set in the near future, where a robot aims to heal the planet by planting trees, putting out fires and repairing structures.  "
        githubLink="https://github.com/Pyxxil/GameJam"
        images={[Envirobot]}
        technologies={[GIT, GDSCRIPT]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Flik"
        subheading="Line Following Robot"
        dates="July 2019 - Oct 2019"
        description="A line-following robot that utilises a custom-made PCB with light sensors, a radio frequency module, ADC and PSoC.  
          Various shortest path algorithms were created for the robot to plan its traversal across the map, which were written in C."
        githubLink="https://github.com/Matteas-Eden/flik"
        images={[Flik1, Flik2, Flik3]}
        technologies={[GIT, C]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Midnight's Messages"
        subheading="CherryPy Social Network"
        dates="May 2019 - June 2019"
        description="A social network similar to Twitter, which was developed individually in Python 3, on a CherryPy server. 
          It also utilises NaCl, json, jinja 2, HTML5 and CSS, JavaScript and cryptography. 
          This could authorize and report login from a login server to a main server run by the lecturer, and see how many web clients are online. 
          It could also send messages privately and in group chats while sending public 'tweets' out to all viewers, and block keywords and people from showing up. "
        technologies={[PYTHON, HTML, CSS, JS]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Eventigate"
        subheading="Project During KPMG Hackathon"
        dates="May 2020"
        description="A hub for people to organise and meet up at a range of events with a specified host and location. 
          Aims to connect organisations and volunteer groups who wish to hold events with places people. 
          This was done by 6 people using JavaScript, HTML and CSS. Won Best Presentation in the AUCS, KPMG hackathon."
        githubLink="https://github.com/KimberleyEvans-Parker/Eventigate"
        images={[Eventigate1, Eventigate2, Eventigate3]}
        technologies={[GIT, HTML, CSS]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Kalah"
        subheading="The Game Mancala"
        dates="May 2020"
        description="This is the game Mancala written in Java.  
          It was designed to promote good programming qualities such as modularity, modifiability and extendability."
        githubLink="https://github.com/KimberleyEvans-Parker/kalah"
        technologies={[GIT, JAVA]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Scammr"
        subheading="Phone Scam Detector"
        dates="July 2019"
        description="This app was developed during the 2019, 48-hour Devs Hackathon by a group of 6.  
          The app listened in to a call and warned you if it thought the caller was trying to scam you. 
          Sammr makes use of speech-to-text tools and an algorithm to decide the probability of the call being a scam."
        githubLink="https://github.com/Pyxxil/Scammr"
        technologies={[GIT, JAVA]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Flappy Bird"
        subheading="FPGA VHDL Side Scroller Game"
        dates="April 2019 - May 2019"
        description="A game based off Flappy Bird, created by a team of 2, using VHDL. 
          This was designed to be run on an Altera DE0 Board, equipped with an Altera Cyclone III 3C16 FPGA. 
          Understanding of the FPGA hardware, VHDL and Git were developed."
        technologies={[VHDL]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Asha's Quest"
        subheading="Java Dungeon Crawler"
        dates="March 2019 - May 2019"
        description="Asha's Quest is an action-adventure game in the vein of Zelda, created using Java, primarily Java Swing. 
          This was a 2-person project, with the game created from scratch. 
          Details of the project are available on the GitHub repository it was cloned to, shown through a GitHub Wiki. 
          Proficiency in Java 8 (particularly Java Swing and Java AWT) and Git developed."
        githubLink="https://github.com/KimberleyEvans-Parker/AshasQuest"
        technologies={[GIT, JAVA]}
        images={[AshasQuest1, AshasQuest2, AshasQuest3, AshasQuest4]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Wireless Energy Monitor"
        dates="Aug 2018 – Nov 2018"
        description="Wireless Energy Monitor to display voltage, current and power for ELECTENG 209. 
          Comprised of a digital and an analogue section. Data receiver described in VHDL, transmitter programmed in C. 
          Receiver was a CPLD, transmitter was an ATMEGA328PB microcontroller on a self- designed PCB. 
          Breadboarding, LTSpice simulations and Oscilloscopes were used for testing."
        technologies={[VHDL]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      /> */}
    </div>
  );
}

export default Projects;
