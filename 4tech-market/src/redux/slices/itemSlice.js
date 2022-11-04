import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "api/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export const fetchItemData = createAsyncThunk(
    'viewItem/fetchItemData',
    async (name) => {
        try {
            const ref = doc(db, "store", name);
            const q = await getDoc(ref)
                .then((response) => { console.log(response.data()); return response.data() })
            return q
        } catch (error) {
            console.log(error)
        }
    }
)

export const itemSlice = createSlice({
    name: 'viewItem',
    initialState: {
        item: null,
    },

    reducers: {
        removeItem: (state) => {
            state.item = null;
        },

    },
    extraReducers: {
        [fetchItemData.fulfilled]: (state, action) => {
            state.item = action.payload
        },
    }
})


export const { removeItem } = itemSlice.actions

export default itemSlice.reducer