import React from 'react';
import "./Cart.css"
import Footer from '../Footer/Footer.js';
import Dropdown from '../Dropdown/Dropdown';
import Back from '../Back/Back.js';
import CartComponent from '../CartComponent/CartComponent.js'
import UserContext from '../UserContext'
import config from '../config';
import { Link } from "react-router-dom";


export default class Cart extends React.Component{

  static contextType = UserContext

  constructor(props){
    super(props);
    this.state = {cartItems: [], total: "$0.00"}
  }

  componentDidMount(){
    this.fetchCart();
  }

  fetchCart(){
    fetch(`${config.API_ENDPOINT}/cart/${this.context.user.id}`, { headers: {'Authorization': `Bearer ${config.API_TOKEN}`}})
    .then(response => {
      if(!response.ok)
        return response.json().then(e => Promise.reject(e))
      return response.json()
    }).then(itemsJson => {
      this.setState(state => ({
        cartItems: itemsJson,
        total: itemsJson[0] ? this.totalPrice(itemsJson) : '$0.00' 
      }))
    })
  }

  totalPrice(itemsJson) {
    console.log(itemsJson)
     return `$${itemsJson
        .map(item => parseInt(item.quantity) * parseFloat(item.price.substring(1)))
        .reduce((itemPrice, total) => total + itemPrice).toFixed(2)}`
  }


  render(){
    return(
      <div className="Cart">
        <Dropdown/>
        <Back/>
        <div className="container">
          {this.state.cartItems.map((item) => (<CartComponent item={item} key={item.id} history={this.props.history}/>))}          
          <div className="cartTotal">{this.state.total}</div>
        </div>
        <Link to="/Checkout"><button className="checkout">Checkout</button></Link>
        <Footer/>
      </div>
    );
  }

}
