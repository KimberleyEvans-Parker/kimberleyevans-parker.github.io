import React from "react";
import Grid from "@material-ui/core/Grid";
import ProfilePic from "../assets/profile-pic.jpg";

function About() {
  return (
    <div className="content-container">
      <Grid container spacing={4}>
        <Grid item xs={6} sm={4} md={3} className="fade-right">
          <img src={ProfilePic} className="profile-pic"></img>
        </Grid>
        <Grid item xs className="fade-left">
          <h1 class="font-weight-light">About</h1>
          <p>
            I am a problem solver that loves to program. This has lead to a deep
            interest in coding, robotics and algorithms.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
