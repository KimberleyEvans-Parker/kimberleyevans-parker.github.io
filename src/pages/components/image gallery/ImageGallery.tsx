import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./image-gallery.css";
import "../modal.css";

import { SMALL_SCREEN } from "../../../helpers/Constants";
import { ImageGalleryCollumn } from "./ImageGalleryCollumn";
import { Modal } from "../Modal";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [caption, setCaption] = useState("");

  const openModal = (image: any, caption: string) => {
    setImage(image);
    setCaption(caption);
  };

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

  // collumns of images
  var l3_1 = [];
  var l3_2 = [];
  var l3_3 = [];
  var l2_1 = [];
  var l2_2 = [];

  for (var i = 0; i < images.length; i++) {
    if (i % 3 === 0) {
      l3_1.push([images[i], i]);
    } else if (i % 3 === 1) {
      l3_2.push([images[i], i]);
    } else {
      l3_3.push([images[i], i]);
    }

    if (i % 2 === 0) {
      l2_1.push([images[i], i]);
    } else {
      l2_2.push([images[i], i]);
    }
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <Modal />
          
      <div>
        {dimensions.width < SMALL_SCREEN ? (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ImageGalleryCollumn images={l2_1} openModal={openModal} />
            </Grid>
            <Grid item xs={6}>
              <ImageGalleryCollumn images={l2_2} openModal={openModal} />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ImageGalleryCollumn images={l3_1} openModal={openModal} />
            </Grid>
            <Grid item xs={4}>
              <ImageGalleryCollumn images={l3_2} openModal={openModal} />
            </Grid>
            <Grid item xs={4}>
              <ImageGalleryCollumn images={l3_3} openModal={openModal} />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}

export default ImageGallery;
