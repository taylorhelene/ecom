import React from "react";
import withContext from "../withContext";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Homepage = props => {
  
  return (
    <div className="home p-2">
      <div className="hero row">
        <div className="col-sm">
          <h1 className="title ">Our Sweet Treats are Handcrafted with Love</h1>
          <h3 className="body-text">Customize Your Cake and Indulge in Flavors. You can get freshly baked 
            sweer treats that are moist and warm with flavour fillings. Visit our location to try out the flavours
            first before order
          </h3>
          <button className="button btn rounded-pill" type="button">View our products</button>
        </div>   
        <img  className="col-sm hero-img object-fit-contain" src={process.env.PUBLIC_URL + '/hero.png'}/>
      </div>
      <div className="row about">
        <div    className="col-sm" >
          <h1 className="sub-title">Our Services</h1>

        </div>
       
        <DotLottieReact
        src="https://lottie.host/2a881668-7aa8-4bfe-a235-f68888a2bceb/dGmyFGxjSL.lottie"
        loop
        autoplay
        className="col-sm about-img object-fit-contain"
      />
      </div>
    </div>
  );
};

export default withContext(Homepage);