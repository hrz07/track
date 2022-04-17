import React from 'react';
import happy from '../../photos/happy.gif'
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='checkoutBox'>
            <div className='content'>
                <p>CHECKOUT</p>
                <img src={happy} alt="" />
            </div>
        </div>
    );
}

export default Checkout;
