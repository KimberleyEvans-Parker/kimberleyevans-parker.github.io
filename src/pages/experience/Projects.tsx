import { useState } from "react";

import { ContentItem } from "../components/content item/ContentItem";
import { Modal } from "../components/modal/Modal";
import { projectData } from "../../data/projects";
import { ToolBar } from "../components/toolbar/ToolBar";

export const Projects = () => {
  const [sortedProjects, setSortedProjects] = useState(projectData);

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
      <Modal />

      <ToolBar projectData={projectData} setSortedProjects={setSortedProjects} />

      {sortedProjects.map((project) => (
        <ContentItem
          key={project.heading}
          imgOnLeft={imgOnLeft()}
          contentData={project}
          animationDelay={getAnimationDelay()}
        />
      ))}
      {sortedProjects.length === 0 && (
        <div className="fade left no-projects">
          <p>No projects found matching those filters</p>
        </div>
      )}
    </div>
  );
}
