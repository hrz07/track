import React from 'react';
import { NavLink } from 'react-router-dom';
import './TourCard.css'

const Tourcard = ({place}) => {
    return (
        <div className='TourCardContainer'>
            <img src={place.image} alt="" />
            <p className='CardTitle'>{place.title}</p>
            <NavLink to='/checkout' className='checkout'>Checkout</NavLink>
           <p className='price'>৳{place.price}</p> 
            <small>{ place.description}</small>
        </div>
    );
}

export default Tourcard;
