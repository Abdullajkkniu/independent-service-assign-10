import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import '../../Pages/Services/Services.css';

const Services = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='bg-color'>
            <h1 className='text-title'>My Photography Services</h1>
            <div className='container services-size'>
            {
                services.map(service=> <Service key={service.id} service={service}></Service> )
            }
            </div>

        </div>
    );
};

export default Services;