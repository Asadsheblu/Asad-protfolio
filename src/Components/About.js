import React from 'react';
import me from "../assest/120528910_1201585603549283_2012264543360913145_n.jpg"
import Fade from 'react-reveal/Fade';
const About = () => {
    return (
        <div id='about' className='container'>
            <h2 className='text-center'>About <span className="text-primary">Me</span></h2>
            <div className="row">
                <div className="col-md-4 p-5">
                    <Fade left>
                    <img width={300} src={me} alt="" />
                    </Fade>
                </div>
                <div className="col-md-8 p-5">
                    <p>Hello! I'm Asaduz Zaman, a programmer with a good level of expertise in Front-End Web Development. . I'm a tech lover and like to write blogs about programming and web development. I'm interested in MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development.

I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment. I am down to earth honest, confident, fun loving and caring as well.</p>
<div className="d-flex">
<button className='btn btn-outline-info p-2 rounded-pill me-5'><a className='text-decoration-none fw-bold' href="https://drive.google.com/file/d/1tO5I85ecVLLaIKxvrAsfxnzQdCyAkDJd/view?usp=sharing">Download Resume</a></button>
<button className='btn btn-primary  ps-2 pe-2 rounded-pill me-5'><a className='text-decoration-none fw-bold text-white' href="https://github.com/Asadsheblu/">Github</a></button>
</div>
                </div>
            </div>
            
        </div>
    );
};

export default About;