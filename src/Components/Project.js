import React from 'react';
import bicycle from "../assest/bycyle.png"
import mahira from "../assest/Mahira (1).png"
import dream from "../assest/Dream.png"
import center from "../assest/center.png"
import influencer from "../assest/influencer.png"
import Zoom from 'react-reveal/Zoom';
import github from "../assest/icons8-github-48.png"
import browser from "../assest/globe.png"
const Project = () => {
    return (
        <div id='project' className="container p-5 text-dark ">
              <h2 className='text-center pt-5 pb-5 text-white'>My Recent <span className="text-primary">Project</span></h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card shadow h-100 p-3">
      <Zoom>
      <img src={bicycle} className="card-img-top" alt="..."/>
      </Zoom>
     
      <div className="card-body">
        <h5 className="text-center">BiCycle Manufacture</h5>
        <p className="card-text">A full-stack responsive service seller app. Users can request a service, also make a review from the dashboard.</p>
       <a href="https://github.com/Asadsheblu/Bicyle-manufacture-server-side"> <button className='ps-2 pe-2 rounded btn btn-outline-danger'><img width={24} src={github} alt="" />Server Code</button></a>
       <a href="https://github.com/Asadsheblu/Bicyle-manufacture-client-side"> <button className='ps-2 pe-2  rounded btn btn-outline-danger'><img width={24} src={github} alt="" />Client Code</button></a>
       <a href="https://bicycle-parts-manufacture.web.app/">  <button className='ps-2 pe-2 ms-5 mt-3 rounded btn btn-outline-info'><img width={24} src={browser} alt="" /> Live Site</button></a>
      
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 p-3 shadow">
    <Zoom>
    <img src={mahira} className="card-img-top" alt="..."/>
    </Zoom>
      <div className="card-body">
        <h5 className="text-center">Furniture Warehouse</h5>
        <p className="card-text">A full-stack responsive Furniture Warehouse app. Users can request a service,Buy product</p>
        <a href="https://github.com/Asadsheblu/Mahirafurniture-server"> <button className='ps-2 pe-2 rounded btn btn-outline-danger'><img width={24} src={github} alt="" />Server Code</button></a>
       <a href="https://github.com/Asadsheblu/Mahirafurniture-client"> <button className='ps-2 pe-2 rounded btn btn-outline-danger'><img width={24} src={github} alt="" />Client Code</button></a>
       <a href="https://mahira-furniture.web.app/">  <button className='ps-2 pe-2 ms-5 mt-3 rounded btn btn-outline-info'><img width={24} src={browser} alt="" /> Live Site</button></a>
      
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 p-3 shadow">
    <Zoom>
    <img src={dream} className="card-img-top" alt="..."/>
    </Zoom>
      <div className="card-body">
        <h5 className="text-center">Photography Service</h5>
        <p className="card-text">A  responsive Photography Service App. Users can request a service,and Booking any Service</p>
       <a href="https://github.com/Asadsheblu/Dream-Artisan"> <button className='ps-2 pe-2 rounded btn btn-outline-danger'><img width={24} src={github} alt="" />Github</button></a>
       <a href="https://dream-artisan.web.app/">  <button className='ps-2 pe-2 ms-3 rounded btn btn-outline-info'><img width={24} src={browser} alt="" /> Live Site</button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 p-3 shadow">
    <Zoom>
    <img src={center} className="card-img-top" alt="..."/>
    </Zoom>
      <div className="card-body">
        <h5 className="text-center">Convention Center</h5>
        <p className="card-text">A  responsive Convention Center App. Users can show any kinds of Services</p>
       <a href="https://github.com/Asadsheblu/Artisan-convention-center"> <button className='ps-2 pe-2  rounded btn btn-outline-danger'><img width={24} src={github} alt="" />Github</button></a>
       <a href="https://artisan-convention-center.netlify.app/">  <button className='ps-2 pe-2 ms-3 rounded btn btn-outline-info '><img width={24} src={browser} alt="" /> Live Site</button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 p-3 shadow">
    <Zoom>
    <img src={influencer} className="card-img-top" alt="..."/>
    </Zoom>
      <div className="card-body">
        <h5 className="text-center">Gear Shop</h5>
        <p className="card-text">A  responsive Influencer Gear Shop App. Influencer can Show  Products</p>
       <a href=""> <button className='ps-2 pe-2 rounded btn btn-outline-danger '><img width={24} src={github} alt="" />Github</button></a>
       <a href="https://asadsheblu.github.io/influencer-gear/">  <button className='ps-2 pe-2  rounded btn btn-outline-info ms-3'><img width={24} src={browser} alt="" /> Live Site</button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 p-3 shadow">
    <Zoom>
    <img src={influencer} className="card-img-top" alt="..."/>
    </Zoom>
      <div className="card-body">
        <h5 className="text-center">Gear Shop</h5>
        <p className="card-text">A  responsive Influencer Gear Shop App. Influencer can Show  Products</p>
       <a href="https://github.com/Asadsheblu/influencer-gear-shop"> <button className='ps-2 rounded pe-2 btn btn-outline-danger'><img width={24} src={github} alt="" />Github</button></a>
       <a href="https://asadsheblu.github.io/influencer-gear/">  <button className='ps-2 rounded btn btn-outline-info pe-2 ms-3'><img width={24} src={browser} alt="" /> Live Site</button></a>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Project;