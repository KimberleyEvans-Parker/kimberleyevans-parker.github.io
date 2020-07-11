// import React from "react";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "./Modal";

function Project(props) {
  const [open, setOpen] = useState(false);
  /* Keeps track of the window dimensions.  Updates when window resizes */
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
    <Grid container spacing={3}>
      {(!props.imgOnLeft || dimensions.width < 600) && (
        <Grid
          item
          xs
          className={
            props.images && dimensions.width >= 600 ? "fade right" : "fade left"
          }
          style={{
            webkitAimationDelay: props.animationDelay,
            mozAnimationDelay: props.animationDelay,
            oAimationDelay: props.animationDelay,
            msAnimationDelay: props.animationDelay,
            animationDelay: props.animationDelay,
          }}
        >
          <h2>
            {props.heading} - {props.subheading}
          </h2>
          <h3>{props.dates}</h3>
          <p>{props.description}</p>
        </Grid>
      )}
      {props.images && (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          className={
            props.imgOnLeft && dimensions.width >= 600
              ? "fade right"
              : "fade left"
          }
          style={{
            webkitAimationDelay: props.animationDelay,
            mozAnimationDelay: props.animationDelay,
            oAimationDelay: props.animationDelay,
            msAnimationDelay: props.animationDelay,
            animationDelay: props.animationDelay,
          }}
        >
          <Carousel
            autoPlay
            showIndicators={props.images.length > 1}
            showStatus={props.images.length > 1}
            showThumbs={false}
            transitionTime={1500}
            interval={4000}
            infiniteLoop={true}
          >
            {props.images.map((image) => (
              <Modal alt="" image={image} />
              // <div>
              //   <img alt="" src={image} />
              //  <img
              //   src={image}
              //   alt="Snow"
              //   className="clickable"
              //   style={{ width: "100%", maxWidth: "300px" }}
              //   onClick={() => setOpen(!open)}
              // />

              // {!open && (
              //   <>
              //     <div class="modal-background">
              //       <span class="close" onClick={() => setOpen(!open)}>
              //         &times;
              //       </span>
              //       <img alt="" src={image} className="modal-content" />
              //       {props.caption && (
              //         <div className="caption">
              //           <h2>{props.caption}</h2>
              //         </div>
              //       )}
              //     </div>
              //   </>
              // )}
              // </div>
            ))}
          </Carousel>
        </Grid>
      )}
      {props.imgOnLeft && dimensions.width >= 600 && (
        <Grid
          item
          xs
          className="fade left"
          style={{
            webkitAimationDelay: props.animationDelay,
            mozAnimationDelay: props.animationDelay,
            oAimationDelay: props.animationDelay,
            msAnimationDelay: props.animationDelay,
            animationDelay: props.animationDelay,
          }}
        >
          <h2>
            {props.heading} - {props.subheading}
          </h2>
          <h3>{props.dates}</h3>
          <p>{props.description}</p>
        </Grid>
      )}
    </Grid>
  );
}

export default Project;
