import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "api/firebase/firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

export const fetchCategoriesList = createAsyncThunk(
    'categories/fetchCategoriesList',
    async () => {
        const categories = await getDoc(doc(db, "categories", "categoriesList"))
            .then((res) => { return res.data() })
            .catch(err => console.log(err))
        return categories
    }
);

export const fetchItemsCollection = createAsyncThunk(
    'categories/fetchItemsCollection',
    async (category) => {
        try {
            const ref = collection(db, "store");
            const q = query(ref, where("category", "==", category))
            const itemsCollection = await getDocs(q);
            const data = [];
            itemsCollection.forEach((item) => {
                data.push(item.data())
            })
            return data
        } catch (error) {
            console.log(error)
        }
    }
);

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: null,
        chosedCategory: null,
        itemsCollection: null,
    },

    reducers: {
        setItemsCollection: (state, action) => {
            state.itemsCollection.push(action.payload)
        },
        setChosenCategory: (state, action) => {
            state.chosedCategory = action.payload
        }
    },
    extraReducers: {
        [fetchCategoriesList.fulfilled]: (state, action) => {
            state.categories = action.payload.list
        },
        [fetchItemsCollection.fulfilled]: (state, action) => {
            state.itemsCollection = action.payload
        },
    }
})

export const { setItemsCollection, setChosenCategory } = categoriesSlice.actions

export default categoriesSlice.reducer