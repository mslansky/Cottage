import React from 'react';
import "./FrontPage.css"
import Footer from '../Footer/Footer.js';
import FrontShop from './FrontShop.js';
import Dropdown from '../Dropdown/Dropdown';
import CartButton from '../CartButton/CartButton';
import Back from '../Back/Back.js'




export default class FrontPage extends React.Component{
  render(){
    return(
      <div className="Front">
        <h1 className="bigTitle">Cottage</h1>
        <CartButton/>
        <Back/>
        <Dropdown/>
        <FrontShop/>
       <Footer/>
      </div>
    );
  }

}
