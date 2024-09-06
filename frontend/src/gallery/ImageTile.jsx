import Card from "react-bootstrap/Card";
import DeleteThisImageButton from "./DeleteThisImageButton";

// format of image (for PNG images):
// "data:image/png;base64," + base64 bytes.
const ImageTile = ({ image }) => {

  const imageId = image.slice(image.lastIndexOf("/") + 1);

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>zz Title</Card.Title>
        <Card.Text>zz Text</Card.Text>
      </Card.Body>
      <DeleteThisImageButton imageId={imageId}/>
      <Card.Footer>
        <small className="text-muted">footer</small>
      </Card.Footer>
    </Card>
  );
};

export default ImageTile;
