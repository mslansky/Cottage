import React from 'react';
import "./ItemPage.css"
import Footer from '../Footer/Footer.js';
import Dropdown from '../Dropdown/Dropdown';
import Back from '../Back/Back.js';




export default class ItemPage extends React.Component{
  render(){
    return(
      <div className="items">
        <Dropdown/>
        <Back/>

        <div className="item-flex">
          <div className="item-pic">
          <img src="https://images.unsplash.com/photo-1599599377756-6c2a54da71d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=797&q=80" className="macaron"/>
          </div>

          <div className="item-title">
            <h1>Madison's Macarons</h1>
          </div>

          <div className="item-desc">
            <p>Made with love, these cookies are vanilla with a classic buttercream filling</p>
          </div>

          <button>Add to Cart</button>

        </div>

        


        
        <Footer/>
      </div>
    );
  }

}
