import React from 'react';
import { Link } from "react-router-dom";
import "./Back.css"
import config from '../config';




export default class Back extends React.Component{
 

  render(){
    return(
      <div className="Back">
      
      <Link to="/"><img src="https://img.icons8.com/ios-filled/50/000000/weverse-shop.png" alt="black back arrow icon" className="arrow"/></Link>
        
       
      </div>
    );
  }

}