import {createSlice} from "@reduxjs/toolkit";
import updateUserCart from "./updateUserCart.js";
import getUserCart from "./getUserCart.js";

const initialState = {
    cart: [],
    actionList: [],
    status: "idle",
    errors: ""
}

const cartSlice = createSlice({
    name: "userCart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { product_id, user_action, quantity } = action.payload;

            const isItem = state.actionList.some(item => item.productId === product_id);

            if (isItem) {
                const tmp = [ ...state.actionList ]

                state.actionList = tmp.map((item) => {
                    return item.productId === product_id ? {...item, quantity, userAction: user_action} : item;
                })
            } else {
                state.actionList.push({ productId: product_id, userAction: user_action, quantity });
            }
        },

        updateCart: (state, action) => {
            state.actionList = action.payload
        },

        deleteItem: (state, action) => {
            const { product_id, user_action } = action.payload;

            const isItem = state.actionList.some(item => item.productId === product_id);

            if (isItem) {
                const tmp = [ ...state.actionList ]

                state.actionList = tmp.map((item) => {
                    return item.productId === product_id ? {...item, userAction: user_action} : item;
                })
            } else {
                state.actionList.push({ productId: product_id, userAction: user_action });
            }
        },

        reset: (state) => {
            state.actionList = []
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(updateUserCart.pending, (state) => {
                state.status = "updateLoading"
                state.errors = ""
            })

            .addCase(updateUserCart.fulfilled, (state) => {
                state.status = "updateSuccess";
                state.actionList = [];
                state.errors = "";
            })

            .addCase(updateUserCart.rejected, (state, action) => {
                state.status = "updateError"
                state.errors = action.payload;
            })

            .addCase(getUserCart.pending, (state) => {
                state.status = "getLoading"
                state.errors = ""
            })

            .addCase(getUserCart.fulfilled, (state, action) => {
                state.status = "getSuccess";
                state.cart = action.payload.userCartData.data;
                state.errors = "";
            })

            .addCase(getUserCart.rejected, (state, action) => {
                state.status = "getError"
                state.errors = action.payload;
            })
    }
})

export const { addItem, updateCart, deleteItem, reset } = cartSlice.actions;
export default cartSlice.reducer;