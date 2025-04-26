import { useState } from "react";

import { ContentItem } from "../components/content item/ContentItem";
import { Modal } from "../components/Modal";
import { volunteerData } from "../../data/volunteer";

export const Volunteer = () => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [caption, setCaption] = useState<string>("");

  const openModal = (image: string, caption: string) => {
    setImage(image);
    setCaption(caption);
  };

  let animationDelay = 0;

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s";
    animationDelay += (2 - animationDelay) / 5
    return animationDelaySeconds;
  };

  let onLeft = false;

  const imgOnLeft = () => {
    onLeft = !onLeft;
    return onLeft;
  };


  return (
    <div className="content-container experience-container">
      <h1 className="fade left">Volunteer Work</h1>
      <Modal image={image} caption={caption} setImage={setImage} />
      
      {volunteerData.map((project) => (
        <ContentItem
          key={project.heading}
          imgOnLeft={imgOnLeft()}
          contentData={project}
          openModal={openModal}
          animationDelay={getAnimationDelay()}
        />
      ))}
    </div>
  );
}
