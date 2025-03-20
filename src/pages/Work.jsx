import React, { useState } from "react";

import ContentItem from "./components/content item/ContentItem";
import { importAllPhotosFromFolder } from "../helpers/Helpers";

import { TECHNOLOGIES } from "../helpers/Constants";

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

  const SSSImages = importAllPhotosFromFolder(
    require.context("../assets/work/School Storage Solutions", false)
  );
  const GraduationPlushiesImages = importAllPhotosFromFolder(
    require.context("../assets/work/Graduation Plushies", false)
  );
  const OomaImages = importAllPhotosFromFolder(
    require.context("../assets/work/No.8 Wireless", false)
  );

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
        heading="Software Engineer"
        subheading="Xero"
        dates="February 2022 - April 2025"
        description="I started in the Xero grad programme, going through four rotations and learning about
          fullstack, front end, back end, Android and iOS skills.  
          I settled as a front-end full stack engineer when becoming an associate and as an engineer.  
          During this time, I created webpages seen by 40,000 customers a day, utilising HTML, CSS, React, Typescript and XUI (Xero's UI component library) to create, modernise and improve webpages.
          I also used C# and API endpoints to store and retrieve customer data.
          I gained practical experience in agile teams, delivering customer facing code.

          I also was a feature lead, supporting the deprecation of outdated webpages, encouraging 5k users to align with updated government regulations known as STP2.  
          I performed maintenance and reliability work, adding integration and e2e tests and updating TeamCity pipelines.
          I also mentored and onboarded three graduate engineers, helping them to become productive members of the team and teaching them skills such as React, Typescript and CSS.
          I encouraged availability by ensuring all of our pages were adequately monitored and added alerting with tools such as New Relic, Sumo Logic and Lighthouse
          I developed two webpages to improve the payroll onboarding flow, the first touchpoint for customers exploring Payroll.
          During this I conducted data-driven experiments with Mix Panel Beanie events to improve customer journeys.
          This experiment increased Payroll customer activation in the UK by 28% and 13% in NZ.
          I used Launch Darkly to control releases to customers, with some feature flags getting evaluated 10k-100k times a day.
          A highlight was a hakathon where we received the Customer Impact Award for adding a file upload section to an employee, which was the most requested feature in Payroll for multiple years.  
          I also won the Connected Workplaces Hackathon with a team of four, where we created a wellbeing hub - a dashboard for employees to easily see upcoming events, todos and summaries of their employees.  
        "
        technologies={[
          TECHNOLOGIES.REACT, 
          TECHNOLOGIES.REDUX, 
          TECHNOLOGIES.TS, 
          TECHNOLOGIES.HTML, 
          TECHNOLOGIES.CSS, 
          TECHNOLOGIES.GIT, 
          TECHNOLOGIES.CSHARP, 
          TECHNOLOGIES.LAUNCH_DARKLY, 
          TECHNOLOGIES.TEAM_CITY, 
          TECHNOLOGIES.SUMO_LOGIC, 
          TECHNOLOGIES.NEW_RELIC, 
          TECHNOLOGIES.LIGHTHOUSE, 
          TECHNOLOGIES.MIXPANEL
        ]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Engineering Intern"
        subheading="Rocos/Drone Deploy"
        dates="April 2021 - January 2022"
        description="I contracted for Rocos (later acquired by Drone Deploy) - a PAAS company that gives 
          people with robots a platform to easily manage, monitor and control them.  
          During this time, I created a page for Rocos to monitor the health of their various services.
          I also created widgets that users could add to their dashboard to monitor their robots and made many other css improvements.  
          I gained experience working in Angular and becoming familiar with new codebases.
          A highlight was a hakathon where we added a live 360 feed to the Boston Dynamic robot dog 
          so that you could remotely view and control it live."
        technologies={[TECHNOLOGIES.ANGULAR, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.GIT]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Engineering Intern"
        subheading="FlexWare"
        dates="September 2020 - November 2021"
        description="I manufactured cables for a variety of purposes, have tested both hardware and software 
          and have gained experience programming in C#."
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.CSHARP]}
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
        images={SSSImages}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Co-Founder"
        subheading="Graduation Plushies"
        dates="October 2020 - Present"
        description={`I co-founded this service which custom-makes graduation hats for soft toys.
          These have been quite popular for graduates and friends of grads and we were able to make a profit in our first year.  `}
        images={GraduationPlushiesImages}
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
        images={OomaImages}
        technologies={[TECHNOLOGIES.GIT, TECHNOLOGIES.PYTHON]}
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
