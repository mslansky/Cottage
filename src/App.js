import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import config from './config';


export default class App extends React.Component{

  render(){

    return (
      <div>
        <Router>
          <Switch>

          <Route exact path="/">
          
          </Route>




          </Switch>
        </Router>

      </div>
    );
  }
}

