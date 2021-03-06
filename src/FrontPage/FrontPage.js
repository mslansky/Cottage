import React from 'react';
import CatSearch from '../CatSearch/CatSearch';
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

        <div className="x1"><img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-cross.png"/></div>
        <h1 className="bigTitle">Cottage</h1>
        <div className="x2"><img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-cross.png"/></div>

        <CartButton/>
        <Back/>
        <Dropdown/>

        <FrontShop/>
        
       <Footer/>
      </div>
    );
  }

}
