import { ContentItem } from "../components/content item/ContentItem"
import { Modal } from "../components/modal/Modal"
import { creationsData } from "../../data/creations"
import { isImageOnLeft } from "../../helpers/Helpers"

export const Creations = () => {
  let animationDelay = 0

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s"
    animationDelay += (2 - animationDelay) / 5
    return animationDelaySeconds
  }

  return (
    <div className="content-container">
      <h1 className="fade left">Artistic Creations</h1>
      <p className="fade left">Aside from my other hobbies, I have enjoyed creating and developing other projects and skills, some of which you can see here :)</p>

      <Modal />
      
      {creationsData.map((creation, index) => (
        <ContentItem
          key={creation.heading + creation.subheading}
          imgOnLeft={isImageOnLeft(index)}
          contentData={creation}
          animationDelay={getAnimationDelay()}
        />
      ))}
    </div>
  )
}
