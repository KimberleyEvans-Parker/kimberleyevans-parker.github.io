import React from "react";
import Grid from "@material-ui/core/Grid";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Project(props) {
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
        <Grid item xs>
          <h2>
            {props.heading} - {props.subheading}
          </h2>
          <h3>{props.dates}</h3>
          <p>{props.description}</p>
        </Grid>
      )}
      {props.images && (
        <Grid item xs={12} sm={6} md={4}>
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
              <div>
                <img alt="" src={image} />
              </div>
            ))}
          </Carousel>
        </Grid>
      )}
      {(props.imgOnLeft && dimensions.width) >= 600 && (
        <Grid item xs>
          <Grid item xs>
            <h2>
              {props.heading} - {props.subheading}
            </h2>
            <h3>{props.dates}</h3>
            <p>{props.description}</p>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Project;