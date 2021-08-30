import React from "react";

import ImageGallery from "../components/ImageGallery";

function Photography() {
  // image imports
  function importAll(r) {
    return r.keys().map(r);
  }

  const PhotographyImages = importAll(
    require.context("../../assets/hobbies/Photography", false)
  );

  return (
    <div className="content-container experience-container">
      <div className="fade left">
        <h1>Photography</h1>
        <p>
          I enjoy taking pictures, especially of nature. I like taking close-up
          pictures to give people a new perspective of nature.
        </p>
      </div>
      <ImageGallery images={PhotographyImages.reverse()} />
    </div>
  );
}

export default Photography;
