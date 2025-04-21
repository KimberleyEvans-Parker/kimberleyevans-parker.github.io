import React from "react";
import Grid from "@material-ui/core/Grid";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  SMALL_SCREEN,
} from "../../../helpers/Constants";
import { ImageContent } from "./ImageContent";
import { TextContent } from "./TextContent";

export const ContentItem = (props: { 
  heading: string; 
  animationDelay: any; 
  githubLink?: string; 
  subheading?: string; 
  imgOnLeft: boolean; 
  dates: string; 
  description: string; 
  teamSize?: number; 
  linkedInLink?: string; 
  link?: string; 
  technologies?: any[]; 
  projectLink?: string; 
  seeMoreLink?: string;
  images?: string[]; 
  openModal: (image: string, caption: string) => void; 
}) => {
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

  // for loading a section when it scrolls into view

  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
      const current = domRef.current;
      return () => {
        if (current) observer.unobserve(current);
      };
    }
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
      id={props.heading}
    >
      <div
        className="fade left"
        style={{
          WebkitAnimationDelay: props.animationDelay,
          MozAnimationDelay: props.animationDelay,
          OAnimationDelay: props.animationDelay,
          animationDelay: props.animationDelay,
        }}
      >
        {props.githubLink && dimensions.width >= SMALL_SCREEN ? (
          <a href={props.githubLink} className={"popout-link"}>
            <h2>
              <i className="fa fa-github popout" aria-hidden="true" />
              {props.heading} {props.subheading && "- "} {props.subheading}
            </h2>
          </a>
        ) : (
          <h2>
            {props.heading} {props.subheading && "-"} {props.subheading}
          </h2>
        )}

        <Grid container spacing={3}>
          {(!props.imgOnLeft || dimensions.width < SMALL_SCREEN) && (
            <Grid item xs>
              <TextContent
                dates={props.dates}
                description={props.description}
                teamSize={props.teamSize}
                linkedInLink={props.linkedInLink}
                link={props.link}
                technologies={props.technologies}
                projectLink={props.projectLink}
              />
            </Grid>
          )}
          {props.images && (
            <Grid item xs={12} sm={6} md={4}>
              <ImageContent images={props.images} openModal={props.openModal} heading={props.heading} />
            </Grid>
          )}
          {props.imgOnLeft && dimensions.width >= SMALL_SCREEN && (
            <Grid item xs>
              <TextContent
                dates={props.dates}
                description={props.description}
                teamSize={props.teamSize}
                linkedInLink={props.linkedInLink}
                link={props.link}
                technologies={props.technologies}
                projectLink={props.projectLink}
              />
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}
