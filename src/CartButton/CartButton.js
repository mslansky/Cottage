import React from 'react';
import "./CartButton.css"



export default class CartButton extends React.Component{
  render(){
    return(
      <div className="CartButton">
       
       <img src="https://img.icons8.com/pastel-glyph/64/000000/shopping-bag--v3.png" alt="black cart icon" className="cartIcon"/>

      </div>
    );
  }

}
