import React from "react";
import withContext from "../withContext";

const Homepage = props => {
  
  return (
    <div className="home container">
      <div className="hero row">
        <div className="col-sm">
          <h1 className="title ">Our Sweet Treats are Handcrafted with Love</h1>
          <h2 className="subtitle">Customize Your Cake and Indulge in Flavors. You can get freshly baked 
            sweer treats that are moist and warm with flavour fillings. Visit our location to try out the flavours
            first before order
          </h2>
        </div>
        
        <img  className="col-sm hero-img" src={process.env.PUBLIC_URL + '/hero.png'}/>
      </div>
    </div>
  );
};

export default withContext(Homepage);