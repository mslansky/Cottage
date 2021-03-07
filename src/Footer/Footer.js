import React from 'react';
import "./Footer.css"
import { Link } from "react-router-dom";
import UserContext from '../UserContext'

export default class Footer extends React.Component{
  
  static contextType = UserContext;

  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }
  
  logout(){
    console.log("!")
    this.context.processLogout()
  }

  registerComponent(){
    if(!!this.context.user.id){
      return ''
    }else{
      return (<Link to="/Register"><div className="abt-link" key="new">New Account</div></Link>)
    }
  }

  loginLogoutComponent(){
    if(!!this.context.user.id){
      return (<div className="abt-link"  key="logout" onClick={this.logout}>Logout</div>)
    }else{
      return (<Link to="/Login"><div className="abt-link"  key="login">Login</div></Link>)
    }
  }

  render(){
    return(
      <div className="Footer">
        <Link to="/"><div className="abt-link" key="abt">About</div></Link>
        {this.registerComponent()}
        {this.loginLogoutComponent()}
      </div>
    );
  }

}