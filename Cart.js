import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from './cartSlice';
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                {items.map(item => (
                    <div key={item.id} className="cart-item">
                        <span>{item.title}</span>
                        <span>${item.price.toFixed(2)}</span>
                        <span>
                            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                            {item.quantity}
                            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <span>Total Quantity: {totalQuantity}</span>
                <span>Total Amount: ${totalAmount.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default Cart;