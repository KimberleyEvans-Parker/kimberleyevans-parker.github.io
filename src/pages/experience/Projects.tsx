import { useState } from "react";

import { ContentItem } from "../components/content item/ContentItem";
import { Modal } from "../components/Modal";
import { projectData } from "../../data/projects";
import { Sort } from "../components/sort filter/Sort";

export const Projects = () => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [caption, setCaption] = useState<string>("");
  const [sortedProjects, setSortedProjects] = useState(projectData);

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
      <h1 className="fade left">Projects</h1>
      <Modal image={image} caption={caption} setImage={setImage} />

      <Sort projectData={projectData} setSortedProjects={setSortedProjects} />

      {sortedProjects.map((project) => (
        <ContentItem
          key={project.heading}
          imgOnLeft={imgOnLeft()}
          heading={project.heading}
          subheading={project.subheading}
          dates={project.dates}
          description={project.description}
          githubLink={project.links?.github}
          linkedInLink={project.links?.linkedIn}
          projectLink={project.links?.project}
          seeMoreLink={project.links?.seeMore}
          images={project.images}
          technologies={project.technologies}
          openModal={openModal}
          animationDelay={getAnimationDelay()}
        />
      ))}
    </div>
  );
}
