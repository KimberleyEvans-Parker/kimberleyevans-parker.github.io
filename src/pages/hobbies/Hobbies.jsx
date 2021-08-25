import React from "react";
import { Link } from "react-router-dom";

import Lego from "../../assets/hobbies/Lego/Zelda, Link and Wolf Link.JPG";

import { SMALL_SCREEN } from "../../Constants";

function Hobbies() {
  // Keeps track of the window dimensions.  Updates when window resizes
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="content-container experience-container">
      {/* <div className="content-container experience-container fade left"> */}
      <h1>Hobbies</h1>
      <p>
        I have a lot of hobbies including badminton, piano, art and skiing. Here
        are some them :)
      </p>

      <div className="row">
        <div
          className={dimensions.width < SMALL_SCREEN ? "columns1" : "columns2"}
        >
          <Link to="hobbies/lego">
            <img src={Lego} alt="Lego" className="experience-img" />
            <h3 className="centered">Lego</h3>
            <div className="layer"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
