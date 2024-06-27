import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        {
            id: 1,
            title: "iPhone 9",
            price: 549,
            quantity: 1
        },
        {
            id: 2,
            title: "iPhone X",
            price: 899,
            quantity: 1
        },
        {
            id: 3,
            title: "Samsung Universe 9",
            price: 1249,
            quantity: 1
        },
        {
            id: 4,
            title: "OPPOF19",
            price: 280,
            quantity: 1
        },
        {
            id: 5,
            title: "Huawei P30",
            price: 499,
            quantity: 1
        },
    ],
    totalQuantity: 5,
    totalAmount: 3476
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseQuantity(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
                state.totalAmount += item.price;
            }
        },
        decreaseQuantity(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalAmount -= item.price;
            }
        },
    },
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;