import React from 'react';
import Locations from './Locations/Locations';
import Reviews from './Review/Reviews';
import SecondSection from './SecondSection/SecondSection';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <SecondSection></SecondSection>
            <Reviews></Reviews>
            <Locations></Locations>
        </div>
    );
};

export default Home;