import React from 'react';
import bicycle from "../assest/bycyle.png"
import github from "../assest/icons8-github-48.png"
import browser from "../assest/globe.png"
const Project = () => {
    return (
        <div className="container p-5">
              <h2 className='text-center'>My Recent <span className="text-primary">Project</span></h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card shadow h-100 p-3">
      <img src={bicycle} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="text-center">BiCycle Manufacture</h5>
        <p className="card-text">A full-stack responsive service seller app. Users can request a service, also make a review from the dashboard.</p>
       <a href=""> <button className='ps-2 pe-2'><img width={24} src={github} alt="" />Github</button></a>
       <a href="https://bicycle-parts-manufacture.web.app/">  <button className='ps-2 pe-2 ms-3'><img width={24} src={browser} alt="" /> Live Site</button></a>
      
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Project;