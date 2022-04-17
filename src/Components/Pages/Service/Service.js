import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../Pages/Service/Service.css';

const Service = (props) => {
    const {id, name, img} = props.service;
    
    return (
        <div className=' single-service mb-4'>
            <img className='image-size' src={img} alt="" />
            <h2>My service: {name}</h2>
            <p>Price:</p>
            <p>Description: This is new service</p>
            <NavLink className='btn btn-secondary fw-bold' as={Link} to="/checkout">Checkout</NavLink>

        </div>
    );
};

export default Service;