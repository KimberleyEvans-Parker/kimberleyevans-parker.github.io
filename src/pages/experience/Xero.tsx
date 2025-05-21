import { Modal } from "../components/Modal";
import { workData } from "../../data/work";
import { ContentItem } from "../components/content item/ContentItem";

export const Xero = () => {
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

    const xeroData = workData.find((project) => project.subheading === "Xero")

  return (
    <div className="content-container experience-container">
      <Modal />
      <h1 className="fade left">Xero</h1>
      <h2 className="fade left">Software Engineer</h2>
      <ContentItem
        key={xeroData?.heading}
        imgOnLeft={imgOnLeft()}
        contentData={xeroData}
        animationDelay={getAnimationDelay()}
    />
      
    </div>
  );
}
