import { ContentItem } from "../components/content item/ContentItem";
import { Modal } from "../components/modal/Modal";
import { volunteerData } from "../../data/volunteer";

export const Volunteer = () => {
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
      <Modal />
      
      {volunteerData.map((project) => (
        <ContentItem
          key={project.heading}
          imgOnLeft={imgOnLeft()}
          contentData={project}
          animationDelay={getAnimationDelay()}
        />
      ))}
    </div>
  );
}
