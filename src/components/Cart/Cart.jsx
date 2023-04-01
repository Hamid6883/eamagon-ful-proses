import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props
   
    let totalPriz = 0;
    let totalSiping = 0;
    for(const product of cart){
        totalPriz = totalPriz + product.price;
        totalSiping =totalSiping +product.shipping;  
    }

    const tax = totalPriz*7/100
    const grendTotal = totalPriz +totalSiping + tax;
    return (
        <div className='Cart'>
          <h4>Order Summary</h4>  
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${totalPriz}</p>
            <p>Total Shipping :${totalSiping}</p>
            <p>Tax :${tax.toFixed(2)}</p>
            <h6>Grand Total :${grendTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;