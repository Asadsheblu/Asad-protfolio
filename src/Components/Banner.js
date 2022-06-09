import React from 'react';
import TypeAnimation from 'react-type-animation';
import sheblu from '../assest/Shibu_passport_size__1_-removebg-preview (1).png'
import fb from "../assest/icons8-facebook-48.png"
import link from "../assest/icons8-linkedin-circled-48.png"
import github from "../assest/icons8-github-48.png"
import Fade from 'react-reveal/Fade';

const Banner = () => {
    
    return (
        <div>
       
        <div className='container-fluid'>
        
            <div className="row">
            
                <div className="col-md-6 text-center p-5 mt-5">
                <Fade left>
                    <h5>Hi, I am</h5>
                    <h1 className='text-primary fw-bold'>ASADUZ ZAMAN <br /> SHEBLU</h1>
                    <h3>I am 
                    <TypeAnimation
            cursor={true}
            sequence={[
              'Frontend Developer.',
              3000,
              'Programmer.',
              3000,
            ]}
            wrapper="span"
            repeat={Infinity}
           />
                    </h3>
                   <div className="text-center p-5 ms-5">
                   <div className="d-flex text-center">
                    <a href="www.linkedin.com/in/md-asaduzzaman-web "> <img src={link} alt="" /></a>
                      
                       <a href="https://github.com/Asadsheblu/">   <img src={github} alt="" /></a>
                     
                        <a href="https://web.facebook.com/md.sheblu.161/"><img src={fb} alt="" /></a>
                       
                    </div>
                   </div>
                   </Fade>
                </div>
                
                <div className="col-md-6 text-center p-5">
                    <Fade right>
            <img width={300} src={sheblu} alt="" />
            </Fade>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;