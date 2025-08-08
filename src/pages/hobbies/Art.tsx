import ImageGallery from "../components/image gallery/ImageGallery";
import { importAllPhotosFromFolder } from "../../helpers/Helpers";

export const Art = () => {
  const ArtImages = importAllPhotosFromFolder("hobbies/Art")

  return (
    <div className="content-container">
      <div className="fade left">
        <h1>Art</h1>
        <p>
          I enjoy painting, sketching and all sorts of art creation.  
          I love the outlet for creativity and making something pretty to look at.  
          I have done a range of art, from painting to sketching and from water colours to pour painting.
          Enjoy :)
        </p>
      </div>
      <ImageGallery images={ArtImages.reverse()} />
    </div>
  );
}
