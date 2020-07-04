import React from "react";
import Grid from "@material-ui/core/Grid";
import ProfilePic from "../assets/profile-pic.jpg";

function About() {
  return (
    <div className="content-container">
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4} md={3}>
          <img src={ProfilePic} className="profile-pic"></img>
        </Grid>
        <Grid item xs>
          <h1 class="font-weight-light">About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
