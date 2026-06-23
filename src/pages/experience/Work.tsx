import { ContentItem } from "../components/content item/ContentItem.tsx"
import { isImageOnLeft } from "../../helpers/Helpers.ts"
import { workData } from "../../data/work.ts"

export const Work = () => {
  let animationDelay = 0

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s"
    animationDelay += (2 - animationDelay) / 5
    return animationDelaySeconds
  }

  return (
    <div className="content-container">
      <h1 className="fade left">Work Experience</h1>
      
      {workData.map((project, index) => (
        <ContentItem
          key={project.heading + project.subheading}
          imgOnLeft={isImageOnLeft(index)}
          contentData={project}
          animationDelay={getAnimationDelay()}
        />
      ))}
    </div>
  )
}
