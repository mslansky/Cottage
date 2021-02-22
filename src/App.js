import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import config from './config';
import FrontPage from '././FrontPage/FrontPage.js'
import CatSearch from './CatSearch/CatSearch';
import Footer from '././Footer/Footer.js'
import ItemPage from '././ItemPage/ItemPage.js'
import Shop from '././Shop/Shop.js'
import Store from './Store/Store';
import Cart from '././Cart/Cart.js';

export default class App extends React.Component{

  render(){

    return (
      <div>
        <Router>
          <Switch>

          <Route exact path="/">
              <FrontPage/>
          </Route>

          <Route path='/Shop'
          component= {Shop}/>
    

          <Route path='/ItemPage'
          component= {ItemPage}/>

          <Route path='/Store'
          component= {Store}/>

          <Route path='/Cart'
          component= {Cart}/>
    

          </Switch>
        </Router>

      </div>
    );
  }
}

