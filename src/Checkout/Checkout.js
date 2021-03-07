import React from 'react';
import "./Checkout.css"
import Dropdown from '.././Dropdown/Dropdown.js';
import Back from '.././Back/Back.js';
import Footer from '.././Footer/Footer.js';
// import { Link } from "react-router-dom";


export default class Checkout extends React.Component{
  render(){
    return(
      <div className="checkoutpage">
        <Dropdown/>
        <Back/>
       <h2 className="bigTitleCheckout">Cottage</h2>
       <p className="chkout"> Thanks for your order! All orders will be processed soon. Continue to support local businesses!</p>
       <Footer/>
      </div>
    );
  }

}