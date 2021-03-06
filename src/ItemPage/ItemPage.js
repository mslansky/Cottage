import React from 'react';
import "./ItemPage.css"
import Footer from '../Footer/Footer.js';
import Dropdown from '../Dropdown/Dropdown';
import Back from '../Back/Back.js';
import CartButton from '../CartButton/CartButton';
import config from '../config';
import { Link } from "react-router-dom";
import UserContext from '../UserContext'



export default class ItemPage extends React.Component{

  static contextType = UserContext

  constructor(props) {
    super(props);
    const { itemId } = this.props.match.params;
    this.itemId = itemId;
    this.fetchItem = this.fetchItem.bind(this);

    this.state={shops:[], items: []};
    this.fetchShops = this.fetchShops.bind(this);
  }
 
  componentDidMount(){
    this.fetchItem();
    this.fetchShops();
  }

  fetchItem() {
    fetch(`${config.API_ENDPOINT}/items/${this.itemId}`, { headers: {'Authorization': `Bearer ${config.API_TOKEN}`}})
    .then(response => {
      if(!response.ok)
        return response.json().then(e => Promise.reject(e))
      return response.json()
    }).then(itemsJson => {
      this.setState(state => ({
        items: itemsJson
      }))
    })
  }

  fetchShops() {
    fetch(`${config.API_ENDPOINT}/shops/${this.shopsid}`, { headers: {'Authorization': `Bearer ${config.API_TOKEN}`}})
    .then(response => {
      if(!response.ok)
        return response.json().then(e => Promise.reject(e))
      return response.json()
    }).then(shopsJson => {
      this.setState(state => ({
        shops: shopsJson
      }))
    })
  }

  addToCart(itemId){
    fetch(`${config.API_ENDPOINT}/cart/`, 
    { method: 'POST',
      body: JSON.stringify({itemId: `${itemId}`, userId: `${this.context.user.id}`, quantity: 1}),
      headers: {
        'Authorization': `Bearer ${config.API_TOKEN}`,
        'Content-Type': 'application/json'}})
    .then(response => {
      if(!response.ok)
        return response.json().then(e => Promise.reject(e))
      return response.json()
    })
  }

  render(){
    return(
      <div className="items">
        <Dropdown/>
        <Back/>
        <CartButton/>

        <div className="item-flex">
        {this.state.items.reverse().map((items, index) => (
          <div className="item-pic">
          <img src={items.picUrl} className="macaron"/>
          </div>
        ))}

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" className="torn-edge-item"><path d="M172 48h-4l-1-1-6-3-5-4-2-1h-3l-10 1-5-2-7-3h-8l-3 2h-17l-11-3-3 1-4 1-1-1-9 1-4 1-8 2-10 5-7-1-3-2h-7l-5-1h-2l-5-1-6-1-3-3-9-6L0 3V0h1400l-1 3-1 3-2 3-8 2-4-1-4-3-2-1-7-3-3-1-3-1-8 2h-14l-1-1-5 2-4 3-1 1-10-2-3-1-10 1-4-1-1-1-9 1-5 2h-2l-7-1-3 1h-7l-11 3-11 1-16 1-15-2h-14l-14 1h-9l-15-4-2 1-3 1-5-1h-24l-19-1h-1l-6-2-3 2-4 3-8 6-5 2-9 1-4-2h-2l-9-1-7-1-2-1v-1l-2-2-7 2-4 1-4-2-5 1-12 3-7 1-11 3-12 1h-2l-17 1-5 2-7 5-4 2-7-1-3-1-6-1-7-2-10-1h-5l-7-1-3-1h-2l-5 1h-5l-2 1-8-1-4-3-2 1-4 3-6 3h-6l-6 1-2-1-7-1-4 1-5 1-9-2-9 1h-18l-22-1-10-2-4-3-3-2h-6l-6 1-6 3h-14l-2 2-5 1h-8l-6-2h-4l-7-1h-2l-11 1-12-4-6-2-6-2-4-1-8 4-4-1-4-2-5-1-1 1-4 4h-10l-6 2-12-4-1-2-3-4-2-3-4-3h-3l-3-1V4l-2-2-2 1-2 3-2 1-2-2-3-1-4 3h-3l-7-4-7 1-4 1-10-1-7-3-2-1h-10l-2 1-7 2h-3l-9 7h-2l-2-2-4-1-17-1h-11l-3-2-8-1-7 1h-3l-3 1-7-3-2-1-2-1-2 1-12-1-7 1-4 1-4 4h-2V2h-7l-4-1h-6l-4-1-7 1-20 4-12-1-6 1-18-1h-2l-3 3-4 4-9 2-2-3-4 1h-1l-4 1-5 1-9 3-5 3-3 5-1 1-3 1-4 1-4-2-2 1v1l-2 1-4-2-3 1-7 6-3 1-4 2-4 4-8 2h-2l-9-2-5-1-18 5-8 4z"></path></svg>
          <div className="itemBox">
          {this.state.items.reverse().map((items, index) => (
          <div className="item-price">
            <p>{items.price}</p>
          </div>
             ))}

          <div className="item-title">
          {this.state.items.reverse().map((items, index) => (
            <h1>{items.name}</h1>
            ))}
          </div>

          <div className="item-title-shop">
          {this.state.items.reverse().map((items, index) => (
            <Link to={`/Store/${items.shopId}`}><h1>{items.shop}</h1></Link>
            ))}
          </div>
          

          <div className="item-desc">
          {this.state.items.reverse().map((items, index) => (
            <p>{items.desc}</p>
            ))}
          </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" className="torn-edge-item-bottom"><path d="M172 48h-4l-1-1-6-3-5-4-2-1h-3l-10 1-5-2-7-3h-8l-3 2h-17l-11-3-3 1-4 1-1-1-9 1-4 1-8 2-10 5-7-1-3-2h-7l-5-1h-2l-5-1-6-1-3-3-9-6L0 3V0h1400l-1 3-1 3-2 3-8 2-4-1-4-3-2-1-7-3-3-1-3-1-8 2h-14l-1-1-5 2-4 3-1 1-10-2-3-1-10 1-4-1-1-1-9 1-5 2h-2l-7-1-3 1h-7l-11 3-11 1-16 1-15-2h-14l-14 1h-9l-15-4-2 1-3 1-5-1h-24l-19-1h-1l-6-2-3 2-4 3-8 6-5 2-9 1-4-2h-2l-9-1-7-1-2-1v-1l-2-2-7 2-4 1-4-2-5 1-12 3-7 1-11 3-12 1h-2l-17 1-5 2-7 5-4 2-7-1-3-1-6-1-7-2-10-1h-5l-7-1-3-1h-2l-5 1h-5l-2 1-8-1-4-3-2 1-4 3-6 3h-6l-6 1-2-1-7-1-4 1-5 1-9-2-9 1h-18l-22-1-10-2-4-3-3-2h-6l-6 1-6 3h-14l-2 2-5 1h-8l-6-2h-4l-7-1h-2l-11 1-12-4-6-2-6-2-4-1-8 4-4-1-4-2-5-1-1 1-4 4h-10l-6 2-12-4-1-2-3-4-2-3-4-3h-3l-3-1V4l-2-2-2 1-2 3-2 1-2-2-3-1-4 3h-3l-7-4-7 1-4 1-10-1-7-3-2-1h-10l-2 1-7 2h-3l-9 7h-2l-2-2-4-1-17-1h-11l-3-2-8-1-7 1h-3l-3 1-7-3-2-1-2-1-2 1-12-1-7 1-4 1-4 4h-2V2h-7l-4-1h-6l-4-1-7 1-20 4-12-1-6 1-18-1h-2l-3 3-4 4-9 2-2-3-4 1h-1l-4 1-5 1-9 3-5 3-3 5-1 1-3 1-4 1-4-2-2 1v1l-2 1-4-2-3 1-7 6-3 1-4 2-4 4-8 2h-2l-9-2-5-1-18 5-8 4z"></path></svg>

          {this.state.items.reverse().map((items, index) => (
          <button className="add" onClick={() => this.addToCart(items.id)}>Add to Cart</button>
          ))}

        </div>

        


        
        <Footer/>
      </div>
    );
  }

}
