import React from 'react';
import "./Footer.css"
import { Link } from "react-router-dom";


export default class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <ul>
        <Link to="/About"><li className="abt-link">About</li></Link>
          <li>Login/Logout</li>
        </ul>
      </div>
    );
  }

}