import React from "react";
import Grid from "@material-ui/core/Grid";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { SMALL_SCREEN } from "../../Constants";

function ImageItem(props) {
  // for loading an image when it scrolls into view

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
      console.log(isVisible);
    });
    observer.observe(domRef.current);
    const current = domRef.current;
    return () => observer.unobserve(current);
  }, [isVisible]);

  return (
    <div className={`image-gallery-image  ${isVisible ? "is-visible" : ""} `}>
      <img
        ref={domRef}
        alt={props.name}
        src={props.image.default}
        className="image-gallery-animation"
        style={{
          WebkitAnimationDelay: props.animationDelay,
          MozAnimationDelay: props.animationDelay,
          OAnimationDelay: props.animationDelay,
          MsAnimationDelay: props.animationDelay,
          AnimationDelay: props.animationDelay,
          width: "100%",
        }}
      />
    </div>
  );
}

function ImageGalleryCollumn(props) {
  return (
    <>
      {props.images.map((imageIndex) => {
        const image = imageIndex[0];
        const animationDelay = imageIndex[1] * 0.15 + "s";
        const path = image.default.split("/");
        const name = path[path.length - 1].split(".")[0];
        return (
          <button
            onClick={() => props.openModal(image.default, name)}
            key={name}
            className="modal-thumbnail"
          >
            <ImageItem
              name={name}
              image={image}
              animationDelay={animationDelay}
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

  // collumns of images
  var l3_1 = [];
  var l3_2 = [];
  var l3_3 = [];
  var l2_1 = [];
  var l2_2 = [];

  for (var i = 0; i < props.images.length; i++) {
    if (i % 3 === 0) {
      l3_1.push([props.images[i], i]);
    } else if (i % 3 === 1) {
      l3_2.push([props.images[i], i]);
    } else {
      l3_3.push([props.images[i], i]);
    }

    if (i % 2 === 0) {
      l2_1.push([props.images[i], i]);
    } else {
      l2_2.push([props.images[i], i]);
    }
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <div>
        {dimensions.width < SMALL_SCREEN ? (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ImageGalleryCollumn images={l2_1} openModal={props.openModal} />
            </Grid>
            <Grid item xs={6}>
              <ImageGalleryCollumn images={l2_2} openModal={props.openModal} />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ImageGalleryCollumn images={l3_1} openModal={props.openModal} />
            </Grid>
            <Grid item xs={4}>
              <ImageGalleryCollumn images={l3_2} openModal={props.openModal} />
            </Grid>
            <Grid item xs={4}>
              <ImageGalleryCollumn images={l3_3} openModal={props.openModal} />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}

export default ImageGallery;