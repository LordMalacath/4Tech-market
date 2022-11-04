import { configureStore } from "@reduxjs/toolkit"
import authReducer from "redux/slices/authSlice"
import categoriesReducer from "redux/slices/categoriesSlice"
import itemReducer from "redux/slices/itemSlice"
import basketReducer from "redux/slices/basketSlice"



export default configureStore({
    reducer: {
        loggedUser: authReducer,
        viewItem: itemReducer,
        categories: categoriesReducer,
        basket: basketReducer,
    }
})