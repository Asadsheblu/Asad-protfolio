import React from 'react';
import About from './About';
import Banner from './Banner';

import Header from './Header';

const Home = () => {
    return (
        <div className='bg-light'>
    

            <Header></Header>
            <Banner />
            <About></About>
            
            
        </div>
    );
};

export default Home;