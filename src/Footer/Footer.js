import React from 'react';
import "./Footer.css"



export default class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <div className="footerflex">
        <ul>
          
          <li>Login</li>
          <li>Logout</li>
          <li>About</li>
          
        </ul>
        </div>
         
      </div>
    );
  }

}