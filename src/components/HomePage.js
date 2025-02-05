import React from "react";
import withContext from "../withContext";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Homepage = props => {
  
  return (
    <div className="home p-2">
      <div className="hero row d-flex align-items-center text-wrap ">
        <div className="col-sm-6 ">
          <h1 className="title ">Our Sweet Treats are Handcrafted with Love</h1>
          <h4 className="subtitle">Customize Your Cake and Indulge in Flavors. You can get freshly baked 
            sweer treats that are moist and warm with flavour fillings. Visit our location to try out the flavours
            first before order
          </h4>
          <button className="button rounded-pill" type="button">View our products</button>
        </div>   
        <img  className="col-sm-5 hero-img " src={process.env.PUBLIC_URL + '/hero.png'}/>
      </div>
      <div className="row about ">
        <DotLottieReact
          src="https://lottie.host/2a881668-7aa8-4bfe-a235-f68888a2bceb/dGmyFGxjSL.lottie"
          loop
          autoplay
          className="col-sm-4 about-img object-fit-contain"      
                  />
        <div    className="col-sm " >
          <h2 className="subtitle">Our Services</h2>
          <p  className="body-text">There are many variations of passages of Lorem Ipsum available, 
            but the majority have sufferedThere are many variations of passages of Lorem Ipsum available, but 
            the majority have sufferedThere are many variations of passages of Lorem Ipsum available, but the
             majority have suffered</p>

          <button className="button rounded-pill" type="button">Read More</button>
        </div>
       
        
      </div>
    </div>
  );
};

export default withContext(Homepage);