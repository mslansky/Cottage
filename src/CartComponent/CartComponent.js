import React from 'react';
import "./CartComp.css"



export default class CartComponent extends React.Component{
  render(){
    return(
      <div className="CartComp">

        <div className="cartItemImg">

        </div>

        <div className="cartItemPrice">

        </div>

        <div className="cartAdd"></div>

        <div className="cartDelete"></div>

        <p>Line</p>
        
        <div className="cartTotal">

        </div>
        
      </div>
    );
  }

}
