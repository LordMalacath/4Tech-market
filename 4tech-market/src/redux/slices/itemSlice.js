import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "api/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export const fetchLastViewedItem = createAsyncThunk(
    'viewItem/fetchLastViewedItem',
    async (name, { dispatch }) => {
        try {
            const ref = doc(db, "store", name);
            await getDoc(ref)
                .then(res => res.data())
                .then(data => dispatch(setItem(data)))
        } catch (error) {
            console.log(error)
        }
    }
);

export const itemSlice = createSlice({
    name: 'viewItem',
    initialState: {
        item: null,
    },

    reducers: {
        setItem: (state, action) => {
            state.item = action.payload
        },
        removeItem: (state) => {
            state.item = null;
        },

    }
})


export const { setItem, removeItem } = itemSlice.actions

export default itemSlice.reducer