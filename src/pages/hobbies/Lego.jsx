import React, { useState } from "react";

import ImageGallery from "../components/ImageGallery";

function Lego() {
  // image imports
  function importAll(r) {
    return r.keys().map(r);
  }

  const LegoImages = importAll(
    require.context("../../assets/hobbies/Lego", false)
  );

  return (
    <div className="content-container experience-container">
      <div className="fade left">
        <h1>Lego</h1>
        <p>
          I enjoy creating with Lego and building different scenes and
          sculptures with it. I have built sculptures of some my favourite
          characters - Zelda, Link and Wolf Link from Twilight Princess. I have
          also built several trees and scenes, including an alien planet and a
          medieval encampment.
        </p>
      </div>
      <ImageGallery images={LegoImages.reverse()} />
    </div>
  );
}

export default Lego;
