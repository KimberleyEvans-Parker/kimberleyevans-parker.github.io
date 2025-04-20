import { useState } from "react";

import { ContentItem } from "../components/content item/ContentItem";
import { Modal } from "../components/Modal";
import { workData } from "../../data/work";

export const Work = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const openModal = (image, caption) => {
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
      <h1 className="fade left">Work Experience</h1>
      <Modal image={image} caption={caption} setImage={setImage} />
      
      {workData.map((project, index) => (
        <ContentItem
          key={index}
          imgOnLeft={imgOnLeft()}
          heading={project.heading}
          subheading={project.subheading}
          dates={project.dates}
          description={project.description}
          teamSize={project.teamSize}
          githubLink={project.githubLink}
          linkedInLink={project.linkedInLink}
          projectLink={project.projectLink}
          images={project.images}
          technologies={project.technologies}
          openModal={openModal}
          animationDelay={getAnimationDelay()}
        />
      ))}
    </div>
  );
}
