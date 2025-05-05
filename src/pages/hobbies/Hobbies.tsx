import React from "react";
import { Link } from "react-router-dom";

import Lego from "../../assets/hobbies/Lego/Zelda, Link and Wolf Link.jpg";
import Photography from "../../assets/hobbies/Photography/Flying Bee.jpg";
import Cosplays from "../../assets/hobbies/Cosplays/Tardis - Bigger on the Inside.jpg";
import Art from "../../assets/hobbies/Art/Skyrim fanart.jpg";

import { SMALL_SCREEN } from "../../helpers/Constants";

export const Hobbies = () => {
  // Keeps track of the window dimensions.  Updates when window resizes
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  let animationDelay = 0;

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s";
    animationDelay += (0.6 - animationDelay) / 5
    return animationDelaySeconds;
  };

  return (
    <div className="content-container experience-container">
      <h1>Hobbies</h1>
      <p>
        I have a lot of hobbies including badminton, piano, art and skiing. Here
        are some them :)
      </p>

      <div className="row">
        <div
          className={`${dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"} zoom-in`}
          style={{
            animationDelay: getAnimationDelay(),
          }}
        >
          <Link to="lego">
            <img src={Lego} alt="Lego" className="experience-img" />
            <h3 className="centered">Lego</h3>
            <div className="layer"></div>
          </Link>
        </div>
        <div
          className={`${dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"} zoom-in`}
          style={{
            animationDelay: getAnimationDelay(),
          }}
        >
          <Link to="photography">
            <img
              src={Photography}
              alt="Photography"
              className="experience-img"
            />
            <h3 className="centered">Photography</h3>
            <div className="layer"></div>
          </Link>
        </div>
      </div>

      <div className="row">
        <div
          className={`${dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"} zoom-in`}
          style={{
            animationDelay: getAnimationDelay(),
          }}
        >
          <Link to="cosplays">
            <img src={Cosplays} alt="Cosplays" className="experience-img" />
            <h3 className="centered">Cosplays</h3>
            <div className="layer"></div>
          </Link>
        </div>
        
        <div
          className={`${dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"} zoom-in`}
          style={{
            animationDelay: getAnimationDelay(),
          }}
        >
          <Link to="art">
            <img src={Art} alt="Art" className="experience-img" />
            <h3 className="centered">Art</h3>
            <div className="layer"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
