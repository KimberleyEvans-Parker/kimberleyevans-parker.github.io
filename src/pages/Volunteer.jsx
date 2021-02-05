import React, { useState } from "react";

import Poppy1 from "../assets/volunteer/Poppy Making/Poppies.jpg";
import Motuihe1 from "../assets/volunteer/Motuihe Island/Planting Trees 1.JPG";
import Motuihe2 from "../assets/volunteer/Motuihe Island/Planting Trees 2.JPG";
import Motuihe3 from "../assets/volunteer/Motuihe Island/Planting Trees 3.JPG";
import Motuihe4 from "../assets/volunteer/Motuihe Island/View of the Island.JPG";

import ContentItem from "./components/ContentItem";

function Volunteer() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const openModal = (image, caption) => {
    setImage(image);
    setCaption(caption);
  };

  let animationDelay = 0;

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + 's';
    animationDelay += 0.4
    return animationDelaySeconds
  }

  let onLeft = false;

  const imgOnLeft = () => {
    onLeft = !onLeft;
    return onLeft
  }

  return (
    <div className="content-container experience-container">
      <h1 className="fade left">Volunteer Work</h1>
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
        heading="Class Rep"
        subheading="Phil 222 and Logicomp 301"
        dates="July 2019 - July 2020"
        description="I represented the students in my class and communicate any questions, queries, concerns or feedback to the teacher."
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Robogals"
        subheading="STEM Teacher"
        dates="April 2019 - July 2019"
        description="I worked as a teacher with Robogals to encourage young children into STEM fields.  
          This was done with the aid of LEGO Mindstorm robots, which were able to be programmed by the children to navigate their way around a maze."
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Reforestation"
        subheading="Motuihe Island"
        dates="August 2015"
        description="Motuihe Island used to be farmland, but we have helped transform it into a home for native birds and lizards.  
          During a restoration project as part of the Motuihe Island Restoration Trust, we planted 2,000 native trees around the island to help make the island a sanctuary for wild life"
        images={[Motuihe1, Motuihe2, Motuihe3, Motuihe4]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
      <ContentItem
        imgOnLeft={imgOnLeft()}
        heading="Poppy Making"
        dates="April 2015"
        description="I volunteered to help a small group of people make hundreds of poppies, sewn out of red fabric and buttons. 
          These were placed in the gardens of our school and given away as part of the ANZAC commemoration.  "
        images={[Poppy1]}
        openModal={openModal}
        animationDelay={getAnimationDelay()}
      />
    </div>
  );
}

export default Volunteer;
