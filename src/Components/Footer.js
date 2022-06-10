import React from 'react';
import fb from "../assest/icons8-facebook-48.png"
import link from "../assest/icons8-linkedin-circled-48.png"
import github from "../assest/icons8-github-48.png"
const Footer = () => {
    return (
        <div  className='text-center'>
           <h6 className='text-center'>All right Reserved &copy; Asaduz Zaman 2022
            <br />
                   <span className="">
                    <a href="www.linkedin.com/in/md-asaduzzaman-web "> <img width={24} src={link} alt="" /></a>
                      
                       <a href="https://github.com/Asadsheblu/">   <img width={24} src={github} alt="" /></a>
                     
                        <a href="https://web.facebook.com/md.sheblu.161/"><img width={24} src={fb} alt="" /></a>
                       
                    </span>
                    </h6>
        </div>
    );
};

export default Footer;