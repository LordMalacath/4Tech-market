import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "api/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


export const fetchBusketItems = createAsyncThunk(
    'basket/fetchBusketItems',
    async (name) => {
        try {
            const ref = collection(db, "store");
            const q = query(ref, where("name", "==", name))
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


export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        totalPayment: 0,
        badgeCount: 0,
        basketList: [],
    },
    reducers: {
        setItemIntoBusket: (state, action) => {
            const itemExist = state.basketList.find(item => item.name === action.payload.name);
            if (!itemExist) {
                state.basketList = [...state.basketList, action.payload];
            };
        },
        removeItemFromBasket: (state, action) => {
            state.basketList = state.basketList.filter(item => item.name !== action.payload);
        },
        setItemAmount: (state, action) => {
            state.basketList = state.basketList.map(item => {
                if (item.name === action.payload.name) {
                    if (item.amount + action.payload.increment > 0) {
                        item.amount += action.payload.increment
                    }
                }
                return item
            })
        },
        setItemPrice: (state, action) => {

        },
        setTotalPayment: (state) => {
            let total = 0;
            for (let i = 0; i < state.basketList.length; i++) {
                total += state.basketList[i].amount * state.basketList[i].price;
            }
            state.totalPayment = total;
        },
        setBadgeCount: (state) => {
            state.badgeCount = state.basketList?.length
        },
    },
    extraReducers: {
        [fetchBusketItems.fulfilled]: (state, action) => {

        },
    }
})

export const { setItemIntoBusket, removeItemFromBasket, setTotalPayment, setBadgeCount, setItemAmount, setItemPrice } = basketSlice.actions

export default basketSlice.reducer