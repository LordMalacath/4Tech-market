import { auth } from "api/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData, setLoggedUser } from "redux/slices/authSlice";


export function useSetLoggedUser() {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async user => {
            if (user) {
                dispatch(setLoggedUser({
                    name: user.displayName,
                    email: user.email,
                    uid: user.uid,
                    photoURL: user.photoURL,
                    emailVerified: user.emailVerified,
                    phoneNumber: user.phoneNumber,
                }));
                dispatch(fetchUserData(user.uid));
            }
        });
        return () => { unsub() };
    }, [])
};
