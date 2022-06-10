import React from 'react';
import Howlers from './Howlers';
import asad from "../assest/Shibu_passport_size__1_-removebg-preview (1).png"
const Header = () => {
    return (
        <nav className="navbar fixed navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand fs-4" href="#"><img width={40} src={asad} alt="" />A <span className='fs-6'>S A D</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold me-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#project">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <Howlers/>
      </ul>
      <button className='btn btn-outline-info p-2 rounded-pill me-5'><a className='text-decoration-none fw-bold' href="https://drive.google.com/file/d/1tO5I85ecVLLaIKxvrAsfxnzQdCyAkDJd/view?usp=sharing">Download Resume</a></button>
      
    </div>
  </div>
</nav>
    );
};

export default Header;