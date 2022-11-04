import { storage } from "api/firebase/firebase";
import { v4 as createId } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";


    export const uploadImg = async ( category, name, image ) => {
    const promises = [];
    for (let i = 0; i < image.length; i++) {
        const storageRef = ref(storage, `${category}/${name}/${createId()}`);
        promises.push(uploadBytesResumable(storageRef, image[i])
            .then((response) => getDownloadURL(response.ref))
            .then((result) => { return result })
        )
    }

    const imgURLs = await Promise.all(promises);
    return imgURLs
}