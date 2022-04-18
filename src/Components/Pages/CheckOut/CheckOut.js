import React from 'react';
import { Link } from 'react-router-dom';
import '../CheckOut/CheckOut.css';


const CheckOut = () => {
    
    return (
        <div className='bg-dark text-white pb-5'>
            <h1 className='p-4 text-center'>Please Confirm Your Order</h1>
            <form className='padding-set'>
                <div className='mb-4'>
               
                <input className='d-block mx-auto mb-4 p-2 w-25' type="text" placeholder='Card Number' required/>

                
                <input className='d-block mx-auto mb-4 p-2 w-25' type="text" placeholder='Phone Number' required/>

                
                <input className='d-block mx-auto mb-4 p-2 w-25' type="text" placeholder='User Name' required/>
                
                
                <input className='d-block mx-auto mb-4 p-2 w-25' type="text" placeholder='Full Address' required />
                </div>
                <Link to='/success' className='button-colors d-block w-25 mx-auto text-center submit-btn py-1' >Submit</Link>

            </form>
            
        </div>
    );
};

export default CheckOut;