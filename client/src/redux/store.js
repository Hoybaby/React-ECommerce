import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

export default configureStore({
    // going to have to add the reducer to the store
    reducer: {
        // need to provide a provider
        cart: cartReducer,
    }
});