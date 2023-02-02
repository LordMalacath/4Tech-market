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
            console.log(error);
        }
    }
);


export const itemSlice = createSlice({
    name: 'viewItem',
    initialState: {
        item: null,
        searchResult: [],
    },

    reducers: {
        setItem: (state, action) => {
            state.item = action.payload;
        },
        removeItem: (state) => {
            state.item = null;
        },
        setSearchResult: (state, action) => {
            state.searchResult = action.payload;
        },
        removeSearchResults: (state) => {
            state.searchResult = [];
        },
    }
})


export const { setItem, removeItem, setSearchResult, removeSearchResults } = itemSlice.actions;

export default itemSlice.reducer;