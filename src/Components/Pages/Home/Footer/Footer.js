import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    
    return (
        <div className='copy'>
            <p><small>Copyright © {year} My-photoshot.com</small></p>
        </div>
    );
};

export default Footer;