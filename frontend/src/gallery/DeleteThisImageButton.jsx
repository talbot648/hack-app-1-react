import {deleteAnImageFromImageStore} from "../upload/imageApi";
import DeleteButtonIcon from "../../icons/deleteButtonIcon.svg";
import config from "../appconfig";

const DeleteThisImageButton = (props) => {
    const location = document.location;

    const deleteImage = async () => {
        deleteAnImageFromImageStore(`/${props.imageId}`);
        console.log(`${config.imageServiceUrl()}/${props.imageId}`)
        // location.reload();
    }

    return <img onClick={deleteImage} src={DeleteButtonIcon} alt="Delete Icon"/>
}

export default DeleteThisImageButton;