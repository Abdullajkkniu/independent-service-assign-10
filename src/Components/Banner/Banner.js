import React from 'react';
import banner1 from  '../../Images/banner.jpg';
import '../Banner/Banner.css';

const Banner = () => {
    return (
        <div className='background-set'>
            <img className='w-100'  src={banner1} alt="" />
        </div>
    );
};

export default Banner;