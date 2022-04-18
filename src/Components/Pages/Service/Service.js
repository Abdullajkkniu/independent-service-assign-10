import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../Pages/Service/Service.css';

const Service = (props) => {
    const {price, description, name, img} = props.service;
    
    return (
        <div className=' single-service mb-4 pb-5'>
            <img className='image-size' src={img} alt="" />
            <h2 className='pt-2'>Type: {name}</h2>
            <p>Description: {description}</p>
            <h2 className='pb-2'>Only : {price}</h2>
            <NavLink className='btn btn-secondary fw-bold' as={Link} to="/checkout">Checkout</NavLink>

        </div>
    );
};

export default Service;