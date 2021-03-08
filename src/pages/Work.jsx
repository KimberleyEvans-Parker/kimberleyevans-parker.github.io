import React, { useState } from "react";

import ContentItem from "./components/ContentItem";

import { GIT, PYTHON, CSHARP } from "../Constants";

function Work() {
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
      <h1 className="fade left">Work Experience</h1>
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
        heading="Engineering Intern"
        subheading="FlexWare"
        dates="September 2020 - Present"
        description="I manafacture cables for a variety of purposes, have tested both hardware and software 
          and have gained experience programming in C#."
        technologies={[GIT, CSHARP]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Teacher"
        subheading="Bricks4Kidz"
        dates="January 2020 - Present"
        description="I encourage young childrem into STEM related fields by teaching them related skills.  
          These skills are taught with the aid of LEGO robtics and mechanics. "
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Co-Founder"
        subheading="School Storage Solutions"
        dates="March 2016 - Present"
        description={`As part of the Young Enterprise Scheme, I created a business that rents out lockers to students.  
          This made a profit in its first year and is still being run along side my studies.  
          During my time in my business, I have gained experience communicating with producers and customers, 
          designing and manufacturing the lockers, working with marketing and sales and designing a website.  `}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
        link={"http://www.schoolstorage.co.nz"}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Tutor"
        subheading="Compsci 220 and Compsci 367"
        dates="September 2019 – November 2020"
        description="I was approached by a student in Compsci 220 and Compsci 367 to tutor them in these courses I had taken.
          I found it extremely rewarding to watch them learn and improve in the course."
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Software Engineering Intern"
        subheading="No. 8 Wireless"
        dates="June 2019"
        description="I developed an automated testing system for the phones that Ooma - a U.S. company.  
          During this, I gained experience with Git, Python and hardware."
        technologies={[GIT, PYTHON]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Cashiers"
        subheading="Gilmours"
        dates="April 2016"
        description="I worked as a cashier/checkout operator for Gilmours - a whilesale food company.  
          During this, I improved my efficiency and interpersonal skills"
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
    </div>
  );
}

export default Work;
