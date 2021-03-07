import React from 'react';
import "./About.css"
import { Link } from "react-router-dom";



export default class About extends React.Component{
  render(){
    return(
      <div className="About"   style={{
        backgroundColor: 'black'}}>
        <div className="abt">
          <h1 className="abt-title">Cottage</h1>
          <p className="abt-intro">Welcome to Cottage, an e-commerce site for your tastiest locally baked or homemade goodies!
          Explore your tastebuds and support local businesses as you shop. Search by your craving or find a specific shop, add items to your cart and then enjoy!</p>
        </div>
        <Link to="/"><button className="start">Shop</button></Link>
      
      </div>
    );
  }

}