import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import config from './config';
import FrontPage from '././FrontPage/FrontPage.js'
import CatSearch from './CatSearch/CatSearch';
import Footer from '././Footer/Footer.js'
import ItemPage from '././ItemPage/ItemPage.js'
import Shop from '././Shop/Shop.js'
import Store from './Store/Store';
import Cart from '././Cart/Cart.js';

export default class App extends React.Component{

  state = {
    items: [],
    shops: [],
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/items`, { headers: {'Authorization': `Bearer ${config.API_TOKEN}`}})
    ])
      .then(([itemsRes]) => {
        if (!itemsRes.ok)
          return itemsRes.json().then(e => Promise.reject(e))

        return Promise.all([
          itemsRes.json(),
        ])
      })
      .then(([items]) => {
        this.setState({ items })
      })
      .catch(error => {
        console.error({ error })
      })
      fetch(`${config.API_ENDPOINT}/shops`, { headers: {'Authorization': `Bearer ${config.API_TOKEN}`}})
      .then(([shopsRes]) => {
        if (!shopsRes.ok)
          return shopsRes.json().then(e => Promise.reject(e))

        return Promise.all([
          shopsRes.json(),
        ])
      })
      .then(([shops]) => {
        this.setState({ shops })
      })
      .catch(error => {
        console.error({ error })
      })
  }

 









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

