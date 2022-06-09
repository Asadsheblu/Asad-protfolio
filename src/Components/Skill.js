import React from 'react';
import html from "../assest/icons8-html-5-144.png"
import css from "../assest/icons8-css3-144.png"
import js from "../assest/icons8-javascript-144.png"
import rect from "../assest/icons8-react-120.png"
import express from "../assest/expressjs-icon.png"
import bootstrap from "../assest/icons8-bootstrap-144.png"
import tailwind from "../assest/tailwind-css-svgrepo-com.svg"
import mongo from "../assest/icons8-mongodb-144.png"
import firebase from "../assest/icons8-firebase-144.png"
import stripe from "../assest/icons8-stripe-144.png"


const Skill = () => {
    return (
        <div className='container'>
            <h2 className='text-center pt-5 pb-5'>My <span className='text-primary'>Skill</span></h2>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={html} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={css} alt="" />
                </div>
                </div>
                <div className="col-md-3">
                <div className="shadow text-center">
                    <img src={bootstrap} alt="" />
                </div>
                </div>
                <div className="col-md-3">
                    <div  className="shadow text-center">
                    <img width={144}height={144} src={tailwind} alt="" />
                </div>
                </div>
                
            </div>
            <div className="row mt-2">
            <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={js} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6 p-4">
                <div className="shadow text-center">
                    <img src={rect} alt="" />
                </div>
                </div>
            <div className="col-md-3 col-sm-6">
                <div className="shadow text-center text-white">
                    <img width={144} height={144} src={express} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={mongo} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={firebase} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={stripe} alt="" />
                </div>
                </div>
                
            </div>
           
        </div>
    );
};

export default Skill;