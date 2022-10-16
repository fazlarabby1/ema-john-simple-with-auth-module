import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart , clearCart, children } = props;
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if (product.quantity){
        //     quantity = quantity + product.quantity;
        //     // console.log(quantity);
        // }
        // else {
        //     product.quantity = 1;
        // }
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = total * 0.1;
    let grandTotal;
    grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4 style={{textAlign: 'center'}}>Order summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;