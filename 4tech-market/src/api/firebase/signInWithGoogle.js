import { auth } from "./firebase";
import setUserToDB from "./setUserToDB";

const { GoogleAuthProvider, signInWithPopup } = require("firebase/auth");


const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    const user = await signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            return user
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    setUserToDB(user)
};

