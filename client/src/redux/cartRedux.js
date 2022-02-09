import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            // can only be done like this with redux toolkit
            state.quantity += 1;
            // because we added color and size on the product, we can change it to just payload
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        }
    }
});


export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;