import React from "react";
import Grid from "@material-ui/core/Grid";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { SMALL_SCREEN } from "../../../helpers/Constants";
import { ImageContent } from "./ImageContent";
import { TextContent } from "./TextContent";
import { ContentItemType } from "../../../data/types";

import "./content-item.css"

interface ContentItemProps {
  contentData?: ContentItemType;
  animationDelay: string;
  imgOnLeft: boolean;
}

export const ContentItem = ({contentData, animationDelay, imgOnLeft}: ContentItemProps) => {
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

  if (!contentData) return <></>

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
      id={contentData.heading}
    >
      <div
        className="fade left"
        style={{
          WebkitAnimationDelay: animationDelay,
          MozAnimationDelay: animationDelay,
          OAnimationDelay: animationDelay,
          animationDelay: animationDelay,
        }}
      >
        {contentData.links?.github && dimensions.width >= SMALL_SCREEN ? (
          <a href={contentData.links?.github} className={"popout-link"}>
            <h2>
              <i className="fa fa-github popout" aria-hidden="true" />
              {contentData.heading} {contentData.subheading && "- "} {contentData.subheading}
            </h2>
          </a>
        ) : (
          <h2>
            {contentData.heading} {contentData.subheading && "-"} {contentData.subheading}
          </h2>
        )}

        <Grid container spacing={3}>
          {(!imgOnLeft || dimensions.width < SMALL_SCREEN) && (
            <Grid item xs>
              <TextContent
                dates={contentData.dates}
                description={contentData.description}
                teamSize={contentData.teamSize}
                links={contentData.links}
                technologies={contentData.technologies}
              />
            </Grid>
          )}
          {contentData.images && (
            <Grid item xs={12} sm={6} md={4}>
              <ImageContent images={contentData.images} heading={contentData.heading} />
            </Grid>
          )}
          {imgOnLeft && dimensions.width >= SMALL_SCREEN && (
            <Grid item xs>
            <TextContent
              dates={contentData.dates}
              description={contentData.description}
              teamSize={contentData.teamSize}
              links={contentData.links}
              technologies={contentData.technologies}
            />
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}
