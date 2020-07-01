import React from "react";
import Grid from "@material-ui/core/Grid";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Project(props) {
  return (
    <Grid container spacing={3}>
      {!props.imgOnLeft && (
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
      {props.imgOnLeft && (
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
