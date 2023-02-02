import { setSearchResult } from "redux/slices/itemSlice";
const { collection, query, where, getDocs } = require("firebase/firestore");
const { db } = require("./firebase");


const searchItems = async (data, dispatch) => {
    const ref = collection(db, "store");
    const q = query(ref, where("name", "==", data.search));
    try {
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((item) => {
            data.push(item.data());
        });
        dispatch(setSearchResult(data));
    } catch (error) {
        console.log("search item =>", error)
    }
}

export default searchItems;