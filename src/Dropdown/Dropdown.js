import React from 'react';
import "./Dropdown.css"
import { Link } from "react-router-dom";

export default class Dropdown extends React.Component{
  render(){
    return(
      <div className="drop">
         <div className="dropdown">
            <button className="dropbtn">
              <i className="fa fa-caret-down"></i><img src="https://img.icons8.com/ios-glyphs/30/000000/drag-list-down.png"/>
             </button>
            <div className="dropdown-content">
              <Link to="/Home">Home</Link>
              <Link to="/Shop/Sweet" key="sweet" >Sweet</Link>
              <Link to="/Shop/Savory" key="savory">Savory</Link>
              <Link to="/Shop/Satisfying" key="sats">Satisfying</Link>
            </div>
          </div>
      </div>
    );
  }

}