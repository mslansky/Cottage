import React from 'react';
import "./Cart.css"
import Footer from '../Footer/Footer.js';
import Dropdown from '../Dropdown/Dropdown';
import Back from '../Back/Back.js';
import CartComponent from '../CartComponent/CartComponent.js'



export default class Cart extends React.Component{
  render(){
    return(
      <div className="Cart">
        <Dropdown/>
        <Back/>

        <div className="container">
          <CartComponent/>



        </div>


        <button className="checkout">Checkout</button>

       
        <Footer/>
      </div>
    );
  }

}
