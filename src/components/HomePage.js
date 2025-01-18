import React from "react";
import withContext from "../withContext";

const Homepage = props => {
  
  return (
    <div className="home container">
      <div className="hero row">
        <p className="title">Our Sweet Treats are Handcrafted with Love</p>
        <img  className="col-sm hero-img" src={process.env.PUBLIC_URL + '/hero.png'}/>
      </div>
    </div>
  );
};

export default withContext(Homepage);