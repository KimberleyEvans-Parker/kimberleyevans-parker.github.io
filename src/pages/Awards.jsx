import React, { useState } from "react";

import ContentItem from "./components/ContentItem";

function Awards() {
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

  // image imports
  function importAll(r) {
    return r.keys().map(r);
  }

  const KrayonImages = importAll(
    require.context("../assets/awards/2020 DEVS Hackathon", false)
  );
  const MYOBImages = importAll(
    require.context("../assets/awards/MYOB IT Challenge", false)
  );

  return (
    <div className="content-container experience-container">
      <h1 className="fade left">Awards and Achievments</h1>
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
        heading="2020 MYOB IT Challenge"
        subheading="3rd place"
        dates="September 2020"
        description="I competed in the MYOB IT Challenge with a team of 4 against over 140 other teams across Australia and New Zealand.  
          Our challenge was to come up with an AI-powered solution to a problem encountered during quarantine and isolation.  
          We decided to focus on the reduced productivity and mental well-being.  
          To combat this problem, we created Heart Healer - an AI chatbot, friend and counsellor, which you can view on my projects page.
          During the competition, there were two rounds - the first of which was a video pitch of our idea.  
          Six successful teams progressed to the second round, where we were able to get feedback, before pitching our idea live to the judges.
          My team - Whiz Craft - was awarded 3rd place overall, or 1st in New Zealand."
        images={MYOBImages}
        link="https://www.auckland.ac.nz/en/news/2020/10/09/heart-healer-app-a-winner.html"
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="2020 DEVS Hackathon"
        subheading="1st place"
        dates="July 2020"
        description="My team of 6 participated in the DEVS 48-hour Hackathon, making a demo platform; Upskill.  
          We took out market research to validate our idea and performed financial analysis.  
          In the end, my team was awarded 1st place!  
          We gained a huge amount of experience, and learnt a lot.  
          You can also see the project Upskill on my projects page."
        images={KrayonImages}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="AUCS Hackathon"
        subheading="Best Presentation"
        dates="May 2019"
        description="My team of 6 was awarded best presentation during the 2019 AUCS, KPMG Hackathon.
          Our presentation included our project; Eventigate.  
          A platform for connecting event organisers, locations and people, which you can find out more about on my projects page."
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="New Zealand Programming Competition"
        subheading="3rd in New Zealand"
        dates="June 2019"
        description="We worked in a team of three to solve problems of a range of difficulties in Python, C or Java.  
          100-point questions, in particular, were designed to be extremely difficult, but my team and I managed to work together to complete the problem.  
          As a result of our hard work, team effort and problem-solving skills, our team ranked 2nd in Auckland and 3rd in New Zealand."
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Alice Programming Competition"
        subheading="2nd place"
        dates="April 2016"
        description="My partner and I received 2nd place for a competition in the Alice programming environment.
          During this, we were able to create 3D animations to fit a desired script, within a given time frame."
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
    </div>
  );
}

export default Awards;
