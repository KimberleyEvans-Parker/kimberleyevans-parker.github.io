import { ContentItem } from "../components/content item/ContentItem.tsx"
import { Modal } from "../components/modal/Modal.tsx"
import { awardsData } from "../../data/awards.ts"
import { isImageOnLeft } from "../../helpers/Helpers.ts"

export const Awards = () => {


  let animationDelay = 0

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s"
    animationDelay += (2 - animationDelay) / 5
    return animationDelaySeconds
  }

  return (
    <div className="content-container">
      <h1 className="fade left">Awards and Achievments</h1>

      {awardsData.map((project, index) => (
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
