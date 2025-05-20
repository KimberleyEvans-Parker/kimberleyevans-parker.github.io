import { importAllPhotosFromFolder } from "../../helpers/Helpers";
import ImageGallery from "../components/image gallery/ImageGallery";

export const Cosplays = () => {
  const CosplayImages = importAllPhotosFromFolder(
    require.context("../../assets/hobbies/Cosplays")
  );

  return (
    <div className="content-container experience-container">
      <div className="fade left">
        <h1>Cosplays</h1>
        <p>
          I enjoy sewing, making costumes and looking cool in them ^.^ I often
          design, sew and create my dresses from scratch. Some of my favourite
          cosplays include the Tardis and a Weeping Angel from Doctor Who, Zelda
          and Link from Twilight Princess and Bella.
        </p>
      </div>
      <ImageGallery images={CosplayImages.reverse()} />
    </div>
  );
}
