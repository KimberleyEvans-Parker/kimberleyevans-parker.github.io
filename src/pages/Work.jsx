import React, { useState } from "react";

import GraduationPlushies1 from "../assets/work/Graduation Plushies/Plushies.JPG";
import GraduationPlushies2 from "../assets/work/Graduation Plushies/Pokemon.JPG";
import GraduationPlushies3 from "../assets/work/Graduation Plushies/Workshop.JPG";
import GraduationPlushies4 from "../assets/work/Graduation Plushies/Dog and Seal.JPG";
import GraduationPlushies5 from "../assets/work/Graduation Plushies/Spiderman.JPG";
import SSS1 from "../assets/work/School Storage Solutions/Painted Lockers.jpg";
import SSS2 from "../assets/work/School Storage Solutions/Keys.jpg";
import SSS3 from "../assets/work/School Storage Solutions/Construction.jpg";
import SSS4 from "../assets/work/School Storage Solutions/Lockers and Keys.jpg";
import SSS5 from "../assets/work/School Storage Solutions/Inside the Locker.jpg";
import SSS6 from "../assets/work/School Storage Solutions/Logo.jpg";
import SSS7 from "../assets/work/School Storage Solutions/Completed Lockers.jpg";
import Ooma1 from "../assets/work/Ooma/Testing the Phones.jpg";

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
        description="I manufacture  cables for a variety of purposes, have tested both hardware and software 
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
        description="I encourage young children into STEM related fields by teaching them related skills.  
          These skills are taught with the aid of LEGO robots and mechanics. "
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Co-Founder"
        subheading="School Storage Solutions"
        dates="March 2016 - Present"
        description={`As part of the Young Enterprise Scheme, I created a business that rents out lockers to students.  
          This made a profit in its first year and is still being run alongside my studies.  
          During my time in my business, I have gained experience communicating with producers and customers, 
          designing and manufacturing the lockers, working with marketing and sales and designing a website.  `}
        images={[SSS1, SSS2, SSS3, SSS4, SSS5, SSS6, SSS7]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
        link={"http://www.schoolstorage.co.nz"}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Co-Founder"
        subheading="Graduation Plushies"
        dates="October 2020 - Present"
        description={`I co-founded this service which custom-makes graduation hats for soft toys.
          These have been quite popular for graduates and friends of grads and we were able to make a profit in our first year.  `}
        images={[
          GraduationPlushies1,
          GraduationPlushies2,
          GraduationPlushies3,
          GraduationPlushies4,
          GraduationPlushies5,
        ]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
        link={"https://www.facebook.com/gradplushies/"}
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
        images={[Ooma1]}
        technologies={[GIT, PYTHON]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Cashiers"
        subheading="Gilmours"
        dates="April 2016"
        description="I worked as a cashier/checkout operator for Gilmours - a wholesale food company.  
          During this, I improved my efficiency and interpersonal skills"
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
    </div>
  );
}

export default Work;
