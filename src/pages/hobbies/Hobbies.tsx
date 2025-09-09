import { Tile } from "../components/tile/Tile"

import Lego from "../../assets/hobbies/Lego/Zelda, Link and Wolf Link.jpg"
import Photography from "../../assets/hobbies/Photography/Flying Bee.jpg"
import Cosplays from "../../assets/hobbies/Cosplays/Tardis - Bigger on the Inside.jpg"
import Art from "../../assets/hobbies/Art/Skyrim fanart.jpg"
import Travel from "../../assets/hobbies/Travel/New Zealand - Hobbiton.jpg"

export const Hobbies = () => {
  let animationDelay = 0

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s"
    animationDelay += (0.6 - animationDelay) / 5
    return animationDelaySeconds
  }

  return (
    <div className="content-container">
      <h1>Hobbies</h1>
      <p>
        I have a lot of hobbies including badminton, piano, art and skiing. Here
        are some them :)
      </p>

      <div className="row">
        <Tile
          animationDelay={getAnimationDelay()}
          imgSrc={Lego}
          title="Lego"
        />
        <Tile
          animationDelay={getAnimationDelay()}
          imgSrc={Photography}
          title="Photography"
        />
        <Tile
          animationDelay={getAnimationDelay()}
          imgSrc={Cosplays}
          title="Cosplays"
        />
        <Tile
          animationDelay={getAnimationDelay()}
          imgSrc={Art}
          title="Art"
        />
        <Tile
          animationDelay={getAnimationDelay()}
          imgSrc={Travel}
          title="Travel"
        />
      </div>
    </div>
  )
}
