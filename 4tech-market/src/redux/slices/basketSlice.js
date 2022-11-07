import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "api/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";


export const fetchBusketItems = createAsyncThunk(
    'basket/fetchBusketItems',
    async ({ name, amount }, { dispatch }) => {
        try {
            const ref = doc(db, "store", name);
            await getDoc(ref)
                .then(res => res.data())
                .then(item => {
                    dispatch(setItemIntoBusket(
                        {
                            name: item.name,
                            price: item.price,
                            stock: item.stock,
                            imgURL: item.imgURL,
                            amount,
                        }
                    ));
                    dispatch(setTotalPayment());
                    dispatch(setBadgeCount());
                })
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
        loading: false,
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
        [fetchBusketItems.pending]: (state) => {
            state.loading = true;
        },
        [fetchBusketItems.fulfilled]: (state) => {
            state.loading = false;
        }
    }
})

export const { setItemIntoBusket, removeItemFromBasket, setTotalPayment, setBadgeCount, setItemAmount, setItemPrice } = basketSlice.actions

export default basketSlice.reducer