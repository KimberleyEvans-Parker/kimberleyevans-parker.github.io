import React from "react";
import Grid from "@material-ui/core/Grid";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  SMALL_SCREEN,
  CAROUSEL_TRANSITION_TIME,
  CAROUSEL_INTERVAL,
} from "../../Constants";

function ImageGalleryCollumn(props) {
  return (
    <>
      {props.images.map((imageIndex) => {
        const image = imageIndex[0];
        const animationDelay = imageIndex[1] * 0.2 + "s";
        console.log(animationDelay);
        const path = image.default.split("/");
        const name = path[path.length - 1].split(".")[0];
        return (
          <button
            onClick={() => props.openModal(image.default, name)}
            key={name}
            className="modal-thumbnail"
          >
            <img
              alt={name}
              src={image.default}
              className="imagegallery-image"
              style={{
                webkitAnimationDelay: animationDelay,
                mozAnimationDelay: animationDelay,
                oAnimationDelay: animationDelay,
                msAnimationDelay: animationDelay,
                animationDelay: animationDelay,
              }}
            />
          </button>
        );
      })}
    </>
  );
}

function ImageGallery(props) {
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    const current = domRef.current;
    return () => observer.unobserve(current);
  }, []);

  // collumns of images
  var l1 = [];
  var l2 = [];
  var l3 = [];

  for (var i = 0; i < props.images.length; i++) {
    if (i % 3 === 0) {
      l1.push([props.images[i], i]);
    } else if (i % 3 === 1) {
      l2.push([props.images[i], i]);
    } else if (i % 3 === 2) {
      l3.push([props.images[i], i]);
    }
  }

  return (
    <div
      style={{ marginTop: "40px" }}
      // className={` fade-in-section ${isVisible ? "is-visible" : ""} fade-left`}
      ref={domRef}
    >
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ImageGalleryCollumn images={l1} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImageGalleryCollumn images={l2} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImageGalleryCollumn images={l3} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ImageGallery;
