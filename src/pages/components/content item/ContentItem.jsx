import React from "react";
import Grid from "@material-ui/core/Grid";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  SMALL_SCREEN,
} from "../../../helpers/Constants";
import { ImageContent } from "./ImageContent";
import { TextContent } from "./TextContent";

export const ContentItem = (props) => {
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
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // for loading a section when it scrolls into view

  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    const current = domRef.current;
    return () => observer.unobserve(current);
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
          MsAnimationDelay: props.animationDelay,
          AnimationDelay: props.animationDelay,
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
