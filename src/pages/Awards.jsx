import React, { useState } from "react";

import Krayon1 from "../assets/awards/Team Krayon.jpg";

import ContentItem from "./components/ContentItem";

function Awards() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const openModal = (image, caption) => {
    console.log("open modal", image, caption);
    setImage(image);
    setCaption(caption);
  };

  return (
    <div className="content-container">
      <h1>Awards and Achievments</h1>
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
        imgOnLeft={true}
        heading="2020 DEVS Hackathon"
        subheading="1st place"
        dates="July 2020"
        description="My team of 6 participated in the DEVS 48 hour Hackathon, making a demo platform; Upskill.  
          We took out market research to validate our idea and performed financial analysis.  
          In the end, my team was awarded 1st place!  
          We gained a huge amount of experience, and learnt a lot.  
          You can also see the project Upskill on my projects page."
        images={[Krayon1]}
        openModal={openModal}
        animationDelay="0s"
      />
      <ContentItem
        imgOnLeft={false}
        heading="AUCS Hackathon"
        subheading="Best Presentation"
        dates="May 2019"
        description="My team of 6 was awarded best presentation during the 2019 AUCS Hackathon.
          Our presentation included our project; Eventigate.  
          A platform for connecting event organisers, locations and people, which you can find out more about on my projects page."
        openModal={openModal}
        animationDelay="0.4s"
      />
      <ContentItem
        imgOnLeft={true}
        heading="New Zealand Programming Competition"
        subheading="3rd in New Zealand"
        dates="June 2019"
        description="We worked in a team of three to solve problems of a range of difficulties in Python, C or Java.  
          100-point questions, in particular, were designed to be extremly difficult, but my team and I managed to work together to complete the problem.  
          As a result of our hard work, team effor and problem solving skills, our team ranked 2nd in Auckland and 3rd in New Zealand."
        openModal={openModal}
        animationDelay="0.8s"
      />
      <ContentItem
        imgOnLeft={false}
        heading="Alice Programming Competition"
        subheading="2nd place"
        dates="April 2016"
        description="My partner and I received 2nd place for a competition in the Alice programming environment.
          During this, we were able to create 3D animations to fit a desired script, within a given time frame."
        openModal={openModal}
        animationDelay="1.2"
      />
    </div>
  );
}

export default Awards;
