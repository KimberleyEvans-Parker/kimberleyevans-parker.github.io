import Awards from "../../assets/experience/Awards.jpg"
import Projects from "../../assets/experience/Projects.jpg"
import Volunteer from "../../assets/experience/Volunteer.jpg"
import Work from "../../assets/experience/Work.jpg"

import { Tile } from "../components/tile/Tile"

export const Experience = () => {

  let animationDelay = 0

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s"
    animationDelay += (0.6 - animationDelay) / 5
    return animationDelaySeconds
  }

  return (
    <div className="content-container experience-container fade left">
      <h1>Experience</h1>
      <p>
        View the experience I've gained through my different jobs, my various
        projects, and view the awards I've won
      </p>

      <div className="row">
        <Tile
          animationDelay={getAnimationDelay()}
          imgSrc={Work}
          title="Work"
        />
        <Tile
          animationDelay={getAnimationDelay()}
          imgSrc={Volunteer}
          title="Volunteer"
        />
        <Tile
          animationDelay={getAnimationDelay()}
          imgSrc={Projects}
          title="Projects"
        />
        <Tile
          animationDelay={getAnimationDelay()}
          imgSrc={Awards}
          title="Awards"
        />
      </div>
    </div>
  )
}
