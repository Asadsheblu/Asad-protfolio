import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';

import Header from './Header';

import Particlesjs from './Particlesjs';
import Project from './Project';
import Skill from './Skill';

const Home = () => {
    return (
       <>
       
     
            <Particlesjs/>
            <div className='text-white'>
            <Header></Header>
            <Banner />
            <About></About>
            <Skill></Skill>
            <Project />
            <Contact />
            <Footer />
            </div>
            
            </>
    );
};

export default Home;