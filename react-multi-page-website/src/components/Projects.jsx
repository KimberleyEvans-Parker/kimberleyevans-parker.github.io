import React from "react";
import Grid from "@material-ui/core/Grid";
import AshasQuest from "../assets/AshasQuest1.jpg";
import PointsExample from "../assets/Points example.gif";
import RollForReaction from "../assets/Roll for Reaction.mp4";

function Projects() {
  return (
    <div className="about">
      <div class="container">
        <h1 class="font-weight-light">Projects</h1>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <img src={AshasQuest} alt="Asha's Quest logo" width="100%" />
          </Grid>
          <Grid item xs>
            <h2>Asha's Quest - Java Dungeon Crawler</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <h2>Roll for Reaction - React Dungeon Crawler</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Grid>
          <Grid item xs={4}>
            <img src={RollForReaction} alt="RollForReaction mp4" width="100%" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <img src={PointsExample} alt="Doto" width="100%" />
          </Grid>
          <Grid item xs>
            <h2>Doto - Calendar and To Do App</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Grid>
        </Grid>
        {/* <div class="row align-items-center my-5">
          <div class="col-lg-3">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div class="col-lg-6">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
