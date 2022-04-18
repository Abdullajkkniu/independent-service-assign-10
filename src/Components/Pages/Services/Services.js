import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import '../../Pages/Services/Services.css';
import image1 from  '../../../Images/young-caucasian-male-football-so.jpg';
import image2 from  '../../../Images/girls1 (1).jpg';
import image3 from  '../../../Images/beautiful-wedding-walk-nature-uk.jpg';
import image4 from  '../../../Images/beautiful-view-plaza-de-espana-s.jpg';
import image5 from  '../../../Images/beautiful-shot-male-lion-resting.jpg';
import image6 from  '../../../Images/audience-applauding-speaker-afte.jpg';

const Services = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='bg-color'>
            <h1 className='text-title pb-4'>My Photography Services</h1>
            
            <div className='container services-size'>
            {
                services.map(service=> <Service key={service.id} service={service}></Service> )
            }
            </div>
            <div className='container'>
                <h1 className='my-5'>My Recent Works</h1>
            <div className='image-grid1 mt-2'>
                <img className='w-100' src={image1} alt="" />
                <img className='w-100' src={image2} alt="" />
                <img className='w-100' src={image3} alt="" />
                
            </div>
            <div className='image-grid1'>
                <img className='w-100' src={image4} alt="" />
                <img className='w-100' src={image5} alt="" />
                <img className='w-100' src={image6} alt="" />
            </div>
            <div className='image-grid1 pb-5'>
            <img className='w-100' src={image2} alt="" />
                <img className='w-100' src={image1} alt="" />
                
                <img className='w-100' src={image3} alt="" />
                
            </div>

            </div>
        </div>
    );
};

export default Services;