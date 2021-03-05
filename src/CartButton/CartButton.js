import React from 'react';
import "./CartButton.css"
import { Link } from "react-router-dom";



export default class CartButton extends React.Component{
  render(){
    return(
      <div className="CartButton">
       
       <Link to="/Cart"><img src="https://img.icons8.com/ios-glyphs/30/000000/add-shopping-cart.png" alt="black cart icon" className="cartIcon"/></Link>

      </div>
    );
  }

}
