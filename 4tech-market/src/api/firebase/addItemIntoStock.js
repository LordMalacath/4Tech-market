import { arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { uploadImg } from "./uploadImg";

export const addItemIntoStock = async ({ category, name, image, price, stock, description }) => {
    try {
        const imgURL = await uploadImg(category, name, image)

        const ref = doc(db, "store", name)
        const response = await getDoc(ref);
        if (!response.exists()) {
            await setDoc(ref, {
                name,
                imgURL,
                price,
                stock,
                description,
                category,
            });
        } else {
            alert("Item already exist")
        }
    } catch (error) {
        console.log(error)
    }

    console.log("done")
}
