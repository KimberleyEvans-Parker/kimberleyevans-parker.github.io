import { ContentItem } from "../components/content item/ContentItem.tsx"
import { isImageOnLeft } from "../../helpers/Helpers.ts"
import { volunteerData } from "../../data/volunteer.ts"

export const Volunteer = () => {
  let animationDelay = 0

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s"
    animationDelay += (2 - animationDelay) / 5
    return animationDelaySeconds
  }

  return (
    <div className="content-container">
      <h1 className="fade left">Volunteer Work</h1>
      
      {volunteerData.map((project, index) => (
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
