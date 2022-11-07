import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from "redux/slices/authSlice";
import categoriesReducer from "redux/slices/categoriesSlice";
import itemReducer from "redux/slices/itemSlice";
import basketReducer from "redux/slices/basketSlice";


const persistConfig = {
    key: 'basket',
    storage,
    whitelist: ['basket'],
};

const rootReducer = combineReducers({
    loggedUser: authReducer,
    viewItem: itemReducer,
    categories: categoriesReducer,
    basket: basketReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);