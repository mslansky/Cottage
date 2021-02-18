import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import config from './config';
import FrontPage from '././FrontPage/FrontPage.js'
import CatSearch from './CatSearch/CatSearch';
import Footer from '././Footer/Footer.js'

export default class App extends React.Component{

  render(){

    return (
      <div>
        <Router>
          <Switch>

          <Route path="/">
              <FrontPage/>
              
          </Route>




          </Switch>
        </Router>

      </div>
    );
  }
}

