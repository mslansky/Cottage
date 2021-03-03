import React from 'react';
import "./Dropdown.css"



export default class Dropdown extends React.Component{
  render(){
    return(
      <div className="drop">
         <div class="dropdown">
            <button class="dropbtn">
              <i class="fa fa-caret-down"></i><img src="https://img.icons8.com/ios-glyphs/30/000000/drag-list-down.png"/>
             </button>
            <div class="dropdown-content">
              <a href="#">Sweet</a>
              <a href="#">Savory</a>
              <a href="#">Satisfying</a>
            </div>
          </div>
      </div>
    );
  }

}