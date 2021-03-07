import React from 'react';
import "./CartComp.css"
import config from '../config';
import ItemSquare from '../ItemPage/ItemSquare';
import UserContext from '../UserContext';
import { useHistory } from 'react-router'



export default class CartComponent extends React.Component{

  static contextType = UserContext;

  constructor(props){
    super(props)
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    const { location, history } = this.props
    this.history = history
  }

  deleteItem() {
    fetch(`${config.API_ENDPOINT}/cart/cartItem/${this.props.item.id}`, 
    { method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${config.API_TOKEN}`,
        'Content-Type': 'application/json'}})
    .then(response => {
      if(!response.ok)
        return response.json().then(e => Promise.reject(e))
      this.history.go(0);
      return response.json()
    })

  }

  addItem() {
    this.updateItem({
      id: this.props.item.id, 
      name: `${this.props.item.name}`, 
      itemId: `${this.props.item.itemId}`, 
      userId: `${this.context.user.id}`, 
      quantity: parseInt(this.props.item.quantity) + 1})
  }

  removeItem() {
    console.log(parseInt(this.props.item.quantity))
    console.log(parseInt(this.props.item.quantity) <= 1)
    if(parseInt(this.props.item.quantity) <= 1){
      this.deleteItem()
    } else {
      this.updateItem({
        id: this.props.item.id, 
        name: `${this.props.item.name}`, 
        itemId: `${this.props.item.itemId}`, 
        userId: `${this.context.user.id}`, 
        quantity: parseInt(this.props.item.quantity) - 1})
    }
  }

  updateItem(newItem){

    fetch(`${config.API_ENDPOINT}/cart/cartItem/${this.props.item.id}`, 
    { method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Authorization': `Bearer ${config.API_TOKEN}`,
        'Content-Type': 'application/json'}})
    .then(response => {
      if(!response.ok)
        return response.json().then(e => Promise.reject(e))
      this.history.go(0);
      return response.json()
    })
  }

  render(){
    return(
      <div className="CartComp">

        <div className="cartFlex">
        <div className="cartItemImg"><ItemSquare item={this.props.item}/></div>
        <div className="cartItemName">{this.props.item.name}</div>

        <div className="cartItemPrice">{this.props.item.price}</div>
        <div className="quantity">QTY : {this.props.item.quantity}</div>

        <div className="cartAddDelete">
            <img onClick={this.addItem} src="https://img.icons8.com/material/26/000000/plus--v1.png"/>
            <img onClick={this.removeItem} src="https://img.icons8.com/metro/26/000000/minus.png"/>
        </div>

        </div>


        <div className='fancy-line'></div>
        
        
      </div>
    );
  }

}
