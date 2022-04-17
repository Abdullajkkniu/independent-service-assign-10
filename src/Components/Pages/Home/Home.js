import React from 'react';
import Banner from '../../Banner/Banner';
import Service from '../Service/Service';
import Services from '../Services/Services';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;