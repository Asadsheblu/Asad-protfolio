import React from 'react';

import ProgressBar from "@ramonak/react-progress-bar";
const Skill = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>My <span className='text-primary'>Skill</span></h2>
            <div className="row p-3">
                <div className="col-md-4"><h6>HTML</h6>
                <ProgressBar completed={90} /></div>
                <div className="col-md-4"><h6>CSS</h6>
                <ProgressBar completed={80} /></div>
                <div className="col-md-4"><h6>BOOTSTRAP</h6>
                <ProgressBar completed={90} /></div>
                <div className="col-md-4 pt-3"><h6>TAILWIND</h6>
                <ProgressBar completed={60} /></div>
                <div className="col-md-4 pt-3"> <h6>JAVASCRIPT</h6>
                <ProgressBar completed={75} /></div>
                <div className="col-md-4 pt-3"> <h6>REACT.JS</h6>
                <ProgressBar completed={60} /></div>
                <div className="col-md-4 pt-3"> <h6>NODE.JS</h6>
                <ProgressBar completed={50} /></div>
                <div className="col-md-4 pt-3"> <h6>EXPRESS.JS</h6>
                <ProgressBar completed={53} /></div>
                <div className="col-md-4"> <h6>FIREBASE</h6>
                <ProgressBar completed={50} /></div>
                <div className="col-md-6 pt-3 text-center"> <h6>MONGODB</h6>
                <ProgressBar completed={40} /></div>
            </div>
        </div>
    );
};

export default Skill;