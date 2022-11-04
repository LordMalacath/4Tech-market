import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";


const setUserToDB = async ({ displayName, email, uid, photoURL }) => {
    try {
        const response = await getDoc(doc(db, "users", uid));
        if (!response.exists()) {
            await setDoc(doc(db, "users", uid),
                {
                    name: displayName,
                    uid,
                    email,
                    photoURL,
                    admin: false,
                }
            );
            await setDoc(doc(db, "orders", uid),
                {}
            );
        };
    } catch (error) {
        console.log("Set User to DB => ", error);
    }
}

export default setUserToDB;