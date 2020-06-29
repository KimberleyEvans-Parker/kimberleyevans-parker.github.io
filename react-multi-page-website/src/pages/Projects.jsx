import React from "react";
import Grid from "@material-ui/core/Grid";
import AshasQuest1 from "../assets/AshasQuest1.jpg";
import AshasQuest2 from "../assets/AshasQuest2.jpg";
import PointsExample from "../assets/Points example.gif";
import RollForReaction from "../assets/Roll for Reaction.mp4";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Project from "./components/Project";

function Projects() {
  return (
    <div className="about">
      <div class="container">
        <h1 class="font-weight-light">Projects</h1>
        <Project
          imgOnLeft={true}
          heading="Asha's Quest"
          subheading="Java Dungeon Crawler"
          dates="March 2020- June 2020"
          description="Roll for Reaction is a turn-base dungeon crawler RPG written with React, Redux, JavaScript and CSS. It is an open-source fork of react-rpg and builds upon and enhances the base game. This is done by modifying and adding elements to lightly emulate the popular tabletop role-playing game Dungeons and Dragons: 5th Edition."
          link="https://github.com/Matteas-Eden/roll-for-reaction"
          images={[AshasQuest1, AshasQuest2]}
        />
        <Project
          imgOnLeft={false}
          heading="Asha's Quest"
          subheading="Java Dungeon Crawler"
          dates="March 2020- June 2020"
          description="Roll for Reaction is a turn-base dungeon crawler RPG written with React, Redux, JavaScript and CSS. It is an open-source fork of react-rpg and builds upon and enhances the base game. This is done by modifying and adding elements to lightly emulate the popular tabletop role-playing game Dungeons and Dragons: 5th Edition."
          link="https://github.com/Matteas-Eden/roll-for-reaction"
          images={[AshasQuest1, AshasQuest2]}
        />

        {/* <Carousel autoPlay showThumbs={false}>
          <div>
            <img alt="" src={AshasQuest1} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img alt="" src={AshasQuest2} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img alt="" src={AshasQuest1} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img alt="" src={AshasQuest2} />
            <p className="legend">Legend 4</p>
          </div>
        </Carousel> */}

        <Grid container spacing={3}>
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
