import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import config from './config';
import FrontPage from '././FrontPage/FrontPage.js'
import CatSearch from './CatSearch/CatSearch';
import Footer from '././Footer/Footer.js'
import ItemPage from '././ItemPage/ItemPage.js'
import Shop from '././Shop/Shop.js'
import SweetShop from '././Shop/SweetShop.js'
import SavoryShop from '././Shop/SavoryShop.js'
import SatisfyingShop from '././Shop/SatisfyingShop.js'
import Store from './Store/Store';
import Cart from '././Cart/Cart.js';
import Login from '././Login/Login.js';
import Registration from '././Registration/Registration.js';
import UserContext from './UserContext'
import About from '././About/About.js'

export default class App extends React.Component{

  state = {
    items: [],
    shops: [],
  }

  render(){

    return (
      <div>
        <UserContext.Consumer>
          {userContext => console.log(userContext.user)
          }
        </UserContext.Consumer>
        <Router>
          <Switch>

          <Route exact path="/">
              <FrontPage/>
          </Route>

          <Route path='/About'
          component= {About}/>


          <Route path='/Shop/Sweet'
          component= {SweetShop}/>

          <Route path='/Shop/Savory'
          component= {SavoryShop}/>

          <Route path='/Shop/Satisfying'
          component= {SatisfyingShop}/>

          <Route path='/Shop/:category'
          component= {Shop}/>

          <Route path='/Shop/:category'
          component= {Shop}/>

          <Route path='/ItemPage/:itemId'
          component= {ItemPage}/>

          <Route path='/Store/:storeId'
          component= {Store}/>

          <Route path='/Cart'
          component= {Cart}/>

          <Route path='/Login'
          component= {Login}/>

          <Route path='/Register'
          component= {Registration}/>
    
          </Switch>
        </Router>

      </div>
    );
  }
}

