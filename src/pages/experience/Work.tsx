import { ContentItem } from "../components/content item/ContentItem";
import { Modal } from "../components/modal/Modal";
import { workData } from "../../data/work";

export const Work = () => {
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
    <div className="content-container">
      <h1 className="fade left">Work Experience</h1>
      <Modal />
      
      {workData.map((project) => (
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
