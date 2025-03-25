import {configureStore} from "@reduxjs/toolkit";
import accountReducer from "./account/accountSlice.js"
import userCartReducer from "./cart/cartSlice.js"

const store = configureStore({
    reducer: {
        account: accountReducer,
        userCart: userCartReducer,
    }
})

export default store