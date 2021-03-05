import React from 'react';
import "./Dropdown.css"
import { Link } from "react-router-dom";

export default class Dropdown extends React.Component{
  render(){
    return(
      <div className="drop">
         <div class="dropdown">
            <button class="dropbtn">
              <i class="fa fa-caret-down"></i><img src="https://img.icons8.com/ios-glyphs/30/000000/drag-list-down.png"/>
             </button>
            <div class="dropdown-content">
              <Link to="/Shop/Sweet">Sweet</Link>
              <Link to="/Shop/Savory">Savory</Link>
              <Link to="/Shop/Satisfying">Satisfying</Link>
            </div>
          </div>
      </div>
    );
  }

}