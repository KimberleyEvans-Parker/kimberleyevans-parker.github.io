import React, { useState } from "react";

import ContentItem from "./components/content item/ContentItem";
import { importAllPhotosFromFolder } from "../helpers/Helpers";

import { TECHNOLOGIES } from "../helpers/Constants";

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

  const EmpowerImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Empower", false)
  );
  const Industry4Images = importAllPhotosFromFolder(
    require.context("../assets/projects/Industry 4.0", false)
  );
  const HeartHealerImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Heart Healer", false)
  );
  const UpskillImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Upskill", false)
  );
  const DotoImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Doto", false)
  );
  const FeedrImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Feedr", false)
  );
  const EnvirobotImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Envirobot", false)
  );
  const RollForReactionImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Roll for Reaction", false)
  );
  const FlikImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Flik", false)
  );
  const EventigateImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Eventigate", false)
  );
  const AshasQuestImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Asha's Quest", false)
  );

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
        heading="Empower"
        subheading="Network to Empower Women"
        dates="July 2022"
        description="I was invited to the We the Women Hackfest, run by Girlboss.  
          During this, my team of five focused on ways we could help women dependent on others for a living.  
          We created Empower.  
          A network of support for women to provide resources and people so that they can regain their independence.  "
        githubLink="https://github.com/Eva-Sorensen/empower"
        images={EmpowerImages}
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
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
        images={Industry4Images}
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Heart Healer"
        subheading="AI Counsellor"
        dates="September 2020"
        description="This was conceptualised for the 2020 MYOB IT challenge, in which the problems of isolation and quarantine were highlighted.  
          To combat the problems that arose through isolation and quarantine, we created Heart Healer.
          Heart Healer is an AI chatbot and counsellor that monitors your mental wellbeing and productivity.  
          It can schedule in breaks for you, talk to you when you're lonely and connect you to other people.  
          This chatbot would be able to learn individual's preferences through an AI backend and connect people to their business or personal counsellor if needed."
        images={HeartHealerImages}
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
        images={UpskillImages}
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.TS, TECHNOLOGIES.REACT]}
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
        images={RollForReactionImages}
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]}
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
        images={DotoImages}
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]}
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
        images={FeedrImages}
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]}
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
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.PYTHON, TECHNOLOGIES.AI]}
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
        images={EnvirobotImages}
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.GDSCRIPT]}
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
        images={FlikImages}
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.C]}
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
        technologies={[TECHNOLOGIES.PYTHON, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS]}
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
        images={EventigateImages}
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS]}
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
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.JAVA]}
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
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.JAVA]}
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
        technologies={[TECHNOLOGIES.VHDL]}
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
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.JAVA]}
        images={AshasQuestImages}
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
        technologies={[TECHNOLOGIES.VHDL]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
    </div>
  );
}

export default Projects;
