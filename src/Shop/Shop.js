import React from 'react';
import "./Shop.css"
import Footer from '../Footer/Footer.js';
import Dropdown from '../Dropdown/Dropdown';
import CartButton from '../CartButton/CartButton';
import config from '../config';
import ItemSquare from '../ItemPage/ItemSquare';
import Back from '../Back/Back.js';


export default class Shop extends React.Component{

  constructor(props) {
    super(props);
    this.category = this.props.category
    this.state={items:[]};
    this.fetchItem = this.fetchItem.bind(this);
  }
 
  componentDidMount(){
    this.fetchItem();
  }

  fetchItem() {
    fetch(`${config.API_ENDPOINT}/items/category/${this.category}`, { headers: {'Authorization': `Bearer ${config.API_TOKEN}`}})
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

  render(){
    return(
      <div className="Shop">
        <Dropdown/>
        <Back/>
        <CartButton/>
        <div className="categoryTitle">{this.category}</div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" className="torn-edge-shop"><path d="M172 48h-4l-1-1-6-3-5-4-2-1h-3l-10 1-5-2-7-3h-8l-3 2h-17l-11-3-3 1-4 1-1-1-9 1-4 1-8 2-10 5-7-1-3-2h-7l-5-1h-2l-5-1-6-1-3-3-9-6L0 3V0h1400l-1 3-1 3-2 3-8 2-4-1-4-3-2-1-7-3-3-1-3-1-8 2h-14l-1-1-5 2-4 3-1 1-10-2-3-1-10 1-4-1-1-1-9 1-5 2h-2l-7-1-3 1h-7l-11 3-11 1-16 1-15-2h-14l-14 1h-9l-15-4-2 1-3 1-5-1h-24l-19-1h-1l-6-2-3 2-4 3-8 6-5 2-9 1-4-2h-2l-9-1-7-1-2-1v-1l-2-2-7 2-4 1-4-2-5 1-12 3-7 1-11 3-12 1h-2l-17 1-5 2-7 5-4 2-7-1-3-1-6-1-7-2-10-1h-5l-7-1-3-1h-2l-5 1h-5l-2 1-8-1-4-3-2 1-4 3-6 3h-6l-6 1-2-1-7-1-4 1-5 1-9-2-9 1h-18l-22-1-10-2-4-3-3-2h-6l-6 1-6 3h-14l-2 2-5 1h-8l-6-2h-4l-7-1h-2l-11 1-12-4-6-2-6-2-4-1-8 4-4-1-4-2-5-1-1 1-4 4h-10l-6 2-12-4-1-2-3-4-2-3-4-3h-3l-3-1V4l-2-2-2 1-2 3-2 1-2-2-3-1-4 3h-3l-7-4-7 1-4 1-10-1-7-3-2-1h-10l-2 1-7 2h-3l-9 7h-2l-2-2-4-1-17-1h-11l-3-2-8-1-7 1h-3l-3 1-7-3-2-1-2-1-2 1-12-1-7 1-4 1-4 4h-2V2h-7l-4-1h-6l-4-1-7 1-20 4-12-1-6 1-18-1h-2l-3 3-4 4-9 2-2-3-4 1h-1l-4 1-5 1-9 3-5 3-3 5-1 1-3 1-4 1-4-2-2 1v1l-2 1-4-2-3 1-7 6-3 1-4 2-4 4-8 2h-2l-9-2-5-1-18 5-8 4z"></path></svg>
        <div className="catItemGrid">
        {this.state.items.reverse().map((item, index) => (<ItemSquare item={item}/>))}
  
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" className="torn-edge-shop-bottom"><path d="M172 48h-4l-1-1-6-3-5-4-2-1h-3l-10 1-5-2-7-3h-8l-3 2h-17l-11-3-3 1-4 1-1-1-9 1-4 1-8 2-10 5-7-1-3-2h-7l-5-1h-2l-5-1-6-1-3-3-9-6L0 3V0h1400l-1 3-1 3-2 3-8 2-4-1-4-3-2-1-7-3-3-1-3-1-8 2h-14l-1-1-5 2-4 3-1 1-10-2-3-1-10 1-4-1-1-1-9 1-5 2h-2l-7-1-3 1h-7l-11 3-11 1-16 1-15-2h-14l-14 1h-9l-15-4-2 1-3 1-5-1h-24l-19-1h-1l-6-2-3 2-4 3-8 6-5 2-9 1-4-2h-2l-9-1-7-1-2-1v-1l-2-2-7 2-4 1-4-2-5 1-12 3-7 1-11 3-12 1h-2l-17 1-5 2-7 5-4 2-7-1-3-1-6-1-7-2-10-1h-5l-7-1-3-1h-2l-5 1h-5l-2 1-8-1-4-3-2 1-4 3-6 3h-6l-6 1-2-1-7-1-4 1-5 1-9-2-9 1h-18l-22-1-10-2-4-3-3-2h-6l-6 1-6 3h-14l-2 2-5 1h-8l-6-2h-4l-7-1h-2l-11 1-12-4-6-2-6-2-4-1-8 4-4-1-4-2-5-1-1 1-4 4h-10l-6 2-12-4-1-2-3-4-2-3-4-3h-3l-3-1V4l-2-2-2 1-2 3-2 1-2-2-3-1-4 3h-3l-7-4-7 1-4 1-10-1-7-3-2-1h-10l-2 1-7 2h-3l-9 7h-2l-2-2-4-1-17-1h-11l-3-2-8-1-7 1h-3l-3 1-7-3-2-1-2-1-2 1-12-1-7 1-4 1-4 4h-2V2h-7l-4-1h-6l-4-1-7 1-20 4-12-1-6 1-18-1h-2l-3 3-4 4-9 2-2-3-4 1h-1l-4 1-5 1-9 3-5 3-3 5-1 1-3 1-4 1-4-2-2 1v1l-2 1-4-2-3 1-7 6-3 1-4 2-4 4-8 2h-2l-9-2-5-1-18 5-8 4z"></path></svg>
        
        <Footer/>
      </div>
    );
  }

}
