import React from "react";
import Grid from "@material-ui/core/Grid";
import AshasQuest1 from "../../assets/AshasQuest1.jpg";
import AshasQuest2 from "../../assets/AshasQuest2.jpg";
import PointsExample from "../../assets/Points example.gif";
import RollForReaction from "../../assets/Roll for Reaction.mp4";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Projects(props) {
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
      <Grid item xs={4}>
        <Carousel
          autoPlay
          showThumbs={false}
          transitionTime={1500}
          interval={4000}
          infiniteLoop={true}
        >
          <div>
            <img alt="" src={AshasQuest1} />
          </div>
          <div>
            <img alt="" src={AshasQuest2} />
          </div>
        </Carousel>
      </Grid>
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

export default Projects;
