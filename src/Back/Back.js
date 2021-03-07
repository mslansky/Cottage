import React from 'react';
import { Link } from "react-router-dom";
import "./Back.css"

export default class Back extends React.Component{
  render(){
    return(
      <div className="Back">
        <div className="Back-round">
         <div className="dropp">
         <div className="dropdown">
            <button className="dropbtn">
              <i className="fa fa-caret-down"></i><img src="https://img.icons8.com/ios-filled/50/000000/weverse-shop.png"/>
             </button>
            <div className="dropdown-content">
              <Link to="/Store/101">Maryanne Mixes</Link>
              <Link to="/Store/102">The Goats Plan</Link>
              <Link to="/Store/103">Great Balls of Chocolate</Link>
              <Link to="/Store/104">Ice-Cold Ice-Creams</Link>
              <Link to="/Store/105">Bravisimo</Link>
              <Link to="/Store/106">Cookie Delight</Link>
              <Link to="/Store/107">Sissys New York</Link>
              <Link to="/Store/108">Grans Classics</Link>
              <Link to="/Store/109">Granola Sunrise</Link>
              <Link to="/Store/110">Patisserie De La Claude</Link>
              <Link to="/Store/111">Big Bad Brownies</Link>
              <Link to="/Store/112">San Fran Sourdough</Link>
            </div>
          </div>
      </div>
      </div>
       
      </div>
    );
  }

}