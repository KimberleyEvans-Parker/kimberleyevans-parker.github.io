// import React from "react";
import React, { useState, useEffect } from "react";

function Modal(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <!-- Trigger the Modal --> */}
      <img
        id="myImg"
        // src="img_snow.jpg"
        src={props.image}
        alt="Snow"
        // className="carousal_img fade left"
        style={{ width: "100%", maxWidth: "300px" }}
        onClick={() => setOpen(!open)}
      />

      {!open && (
        <>
          {/* <img alt="" src={props.image} className="fade left" width="100%" /> */}
          {/* <img alt="" src={props.image} className="modal-content" /> */}
          <div
            // id="myModal"
            class="modal2"
          >
            <span class="close" onClick={() => setOpen(!open)}>
              &times;
            </span>
            {/* <img className="modal-content" id="img01" alt="Snow" /> */}
            <img alt="" src={props.image} className="modal-content" />
            {props.caption && (
              <div className="caption">
                <h2>{props.caption}</h2>
              </div>
            )}
          </div>
        </>
      )}
      {/* <script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
</script> */}
    </>
  );
}

export default Modal;
