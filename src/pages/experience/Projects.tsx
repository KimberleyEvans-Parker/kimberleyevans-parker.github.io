import { ContentItem } from "../components/content item/ContentItem"
import { Modal } from "../components/modal/Modal"
import { ToolBar } from "../components/toolbar/ToolBar"
import { isImageOnLeft } from "../../helpers/Helpers"
import { projectData } from "../../data/projects"
import { useState } from "react"

export const Projects = () => {
  const [sortedProjects, setSortedProjects] = useState(projectData)

  let animationDelay = 0

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s"
    animationDelay += (2 - animationDelay) / 5
    return animationDelaySeconds
  }

  return (
    <div className="content-container">
      <h1 className="fade left">Projects</h1>
      <Modal />

      <ToolBar projectData={projectData} setSortedProjects={setSortedProjects} />

      {sortedProjects.map((project, index) => (
        <ContentItem
          key={project.heading + project.subheading}
          imgOnLeft={isImageOnLeft(index)}
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
  )
}
