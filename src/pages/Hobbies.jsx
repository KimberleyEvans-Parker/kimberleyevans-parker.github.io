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

  const LegoImages = importAll(
    require.context("../assets/hobbies/Lego", false)
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
        heading="Lego"
        // subheading="Machine Health Monitoring Software"
        // dates="August 2020 - November 2020"
        description="I enjoy creating with Lego and building different scenes and sculptures with it.  
          I have built sculptures of some my favourite characters - Zelda, Link and Wolf Link from Twilight Princess.
          I have also built several trees and scenes, including an alien planet and a medieval encampment.  "
        images={LegoImages}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
    </div>
  );
}

export default Hobbies;
