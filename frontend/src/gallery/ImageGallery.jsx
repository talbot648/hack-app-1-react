import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ImageTile from "./ImageTile";
import {deleteFromImageStore, imageUid} from "../upload/imageApi"

const ImageGallery = ({ images }) => {


  

  return images.length > 0 ?
  (
    <>
      <h2>Image Gallery</h2>
      <CardGroup>
        {images.map((img, k) => (
          <ImageTile image={img} key={k} />
        ))}
      </CardGroup>

      <button onClick={deleteFromImageStore(imageUid[0])}>Delete All</button>

    </>
  ) : (
    <>
      <p>No images found.</p>
      <p>Best get uploading for your demo.</p>
    </>
  );

  
};

export default ImageGallery;
