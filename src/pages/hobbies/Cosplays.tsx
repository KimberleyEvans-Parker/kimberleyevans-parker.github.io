import ImageGallery from "../components/image gallery/ImageGallery";

function Cosplays() {
  // image imports
  function importAll(r: { keys: () => string[]; (path: string): string }) {
    return r.keys().map(r);
  }

  const CosplayImages = importAll(
    require.context("../../assets/hobbies/Cosplays", false)
  );

  return (
    <div className="content-container experience-container">
      <div className="fade left">
        <h1>Lego</h1>
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

export default Cosplays;
