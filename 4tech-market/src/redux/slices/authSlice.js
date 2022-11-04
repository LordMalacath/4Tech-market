import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "api/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export const fetchUserData = createAsyncThunk(
    'loggedUser/fetchUserData',
    async (uid) => {
        const response = await getDoc(doc(db, "users", uid));
        return response.data()
    }
)

export const authSlice = createSlice({
    name: 'loggedUser',
    initialState: {
        user: null
    },

    reducers: {
        setLoggedUser: (state, action) => {
            state.user = action.payload;
        },
        removeLoggedUser: (state) => {
            state.user = null;
        }
    },
    extraReducers: {
        [fetchUserData.fulfilled]: (state, action) => {
            state.user = action.payload
        }
    }
})


export const { setLoggedUser, removeLoggedUser } = authSlice.actions

export default authSlice.reducer