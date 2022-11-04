import { db } from "api/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import _ from "lodash";

export const testFunc1 = async () => {
    const ref = collection(db, "store");
    const q = query(ref, where("category", "==", "Smartphones"))
    const itemsCollection = await getDocs(q);
    itemsCollection.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        return itemsCollection
    })
}

export const testFunc2 = () => {
    let animals = {
        'Cow': 'Moo',
        'Cat': 'Meow',
        'Dog': 'Bark'
    };

    delete animals.Cow;
    delete animals['Dog'];

    console.log(animals);
}


export const testFunc3 = () => {
    const arr1 = [{ name: "alex" }];
    const arr2 = [{ name: "alex" }, { name: "ben" }];
    const compare = _.isEqual(arr1, arr2);
    console.log(compare)
}