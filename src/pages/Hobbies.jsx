import React, { useState } from "react";

import ContentItem from "./components/ContentItem";

function Hobbies() {
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

  const Industry4Images = importAll(
    require.context("../assets/projects/Industry 4.0", false)
  );

  return (
    <div className="content-container experience-container fade left">
      <h1>Hobbies</h1>
      <p>
        I have a lot of hobbies including badminton, piano, art and skiing. Here
        are some them :)
      </p>
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
        technologies={[GIT, HTML, CSS, JS, REACT, REDUX]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
    </div>
  );
}

export default Hobbies;
