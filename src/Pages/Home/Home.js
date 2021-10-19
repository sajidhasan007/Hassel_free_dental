import React from 'react';
import Achievement from '../Achievement/Achievement';
import Contact from '../ContactUs/Contact';
import Banner from './Banner/Banner';
import Services from './Services/Services';


const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Achievement></Achievement>
            <Contact></Contact>

        </div>
    );
};

export default Home;