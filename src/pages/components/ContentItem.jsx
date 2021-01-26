import React from "react";
import Grid from "@material-ui/core/Grid";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  SMALL_SCREEN,
  CAROUSEL_TRANSITION_TIME,
  CAROUSEL_INTERVAL,
} from "../../Constants";

function ContentItem(props) {
  // Keeps track of the window dimensions.  Updates when window resizes
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

  // for loading an image when it scrolls into view
  
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    const current = domRef.current;
    return () => observer.unobserve(current);
  }, []);

  return (
    <div style={{ marginTop: "40px" }} className={` fade-in-section ${isVisible ? 'is-visible' : ''} fade-left`}
    ref={domRef}>
      <div className="fade left"
            style={{
              webkitAnimationDelay: props.animationDelay,
              mozAnimationDelay: props.animationDelay,
              oAnimationDelay: props.animationDelay,
              msAnimationDelay: props.animationDelay,
              animationDelay: props.animationDelay,
            }}
            >
        {props.githubLink && dimensions.width >= SMALL_SCREEN ? (
          <a href={props.githubLink} className={"popout-link"}>
            <h2>
              <i className="fa fa-github popout" aria-hidden="true"></i>
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
          <Grid
            item
            xs
          >
            <h3>{props.dates}</h3>
            <p>{props.description}</p>
            {props.link && <p>For more information, take a look <a href={props.link}>here</a></p>}
          </Grid>
        )}
        {props.images && (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Carousel
              autoPlay
              showIndicators={props.images.length > 1}
              showStatus={props.images.length > 1}
              showThumbs={false}
              transitionTime={CAROUSEL_TRANSITION_TIME}
              interval={CAROUSEL_INTERVAL}
              infiniteLoop={true}
              className="shadow"
            >
              {props.images.map((image) => {
                const path = image.split("/");
                const name =
                  props.heading + " - " + path[path.length - 1].split(".")[0];
                return (
                  <button
                    onClick={() => props.openModal(image, name)}
                    key={name}
                  >
                    <img alt={name} src={image} />
                  </button>
                );
              })}
            </Carousel>
          </Grid>
        )}
        {props.imgOnLeft && dimensions.width >= SMALL_SCREEN && (
          <Grid
            item
            xs
          >
            <h3>{props.dates}</h3>
            <p>{props.description}</p>
            {props.link && <p>For more information, take a look <a href={props.link}>here</a></p>}
          </Grid>
        )}
      </Grid>
    </div>
    </div>
  );
}

export default ContentItem;
