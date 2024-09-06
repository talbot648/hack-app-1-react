import {deleteAllFromImageStore} from "../upload/imageApi";

const DeleteAllImagesButton = () => {
    const location = document.location;

    const deleteImages = async () => {
        deleteAllFromImageStore();
        location.reload();
    }

    return <button onClick={deleteImages}>Delete All</button>
}

export default DeleteAllImagesButton;