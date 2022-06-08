import React from 'react';
import contact from "../assest/download.jpg"
import emailjs from '@emailjs/browser';
const Contact = () => {
    const sendEmail=(e)=>{
        e.preventDefault()
        emailjs.sendForm('gmail','template_m1xqjxc',e.target,'dxpJ_WcOC2xqILPJR').then(res=>console.log(res)).catch(err=>console.log(err))
    }
    return (
        <div className='container shadow'>
            <div className="row">
          <div className="col-md-6 p-5">
            <img src={contact} alt="" />
          </div>
          <div className="col-md-6 p-3">
          <form onSubmit={sendEmail}>
          <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Name</label>
    <input type="name" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
  <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
          </div>
          </div>
        </div>
    );
};

export default Contact;