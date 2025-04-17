import { useState } from "react";

import { ContentItem } from "../components/content item/ContentItem";
import { Modal } from "../components/Modal";
import { projectData } from "../../data/projects";
import { Sort } from "../components/sort filter/Sort";

export const Projects = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [ascending, setAscending] = useState(true);
  const [sortBy, setSortBy] = useState("date");

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

  const sortProjects = (projects) => {
    if (sortBy === "date") {
      return projects.sort((a, b) => ascending ? a.dates.start - b.dates.start : b.dates.start - a.dates.start);
    } else if (sortBy === "name") {
      return projects.sort((a, b) => ascending ? a.heading.localeCompare(b.heading) : b.heading.localeCompare(a.heading));
    } else if (sortBy === "technologies") {
      return projects.sort((a, b) => ascending ? a.technologies.length - b.technologies.length : b.technologies.length - a.technologies.length);
    } else {
      return projects;
    }
  }

  return (
    <div className="content-container experience-container">
      <h1 className="fade left">Projects</h1>
      <Modal image={image} caption={caption} setImage={setImage} />

      <Sort setAscending={setAscending} setSortBy={setSortBy} />


      {sortProjects(projectData).map((project, index) => (
        <ContentItem
          key={index}
          imgOnLeft={imgOnLeft()}
          heading={project.heading}
          subheading={project.subheading}
          dates={project.dates}
          description={project.description}
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
