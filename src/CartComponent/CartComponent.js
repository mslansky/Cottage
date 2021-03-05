import React from 'react';
import "./CartComp.css"
import config from '../config';



export default class CartComponent extends React.Component{
  // constructor(props) {
  //   super(props);
  //   const { itemId } = this.props.match.params
  //   this.itemId = itemId;
  //   this.state={items:[]};
  //   this.fetchItem = this.fetchItem.bind(this);
  // }
 
  // componentDidMount(){
  //   this.fetchItem();
  // }

  // fetchItem() {
  //   fetch(`${config.API_ENDPOINT}/userId/${this.userId}`, { headers: {'Authorization': `Bearer ${config.API_TOKEN}`}})
  //   .then(response => {
  //     if(!response.ok)
  //       return response.json().then(e => Promise.reject(e))
  //     return response.json()
  //   }).then(itemsJson => {
  //     this.setState(state => ({
  //       items: itemsJson
  //     }))
  //   })
  // }





  render(){
    return(
      <div className="CartComp">

        <div className="cartFlex">
        <div className="cartItemImg"><img src="https://images.unsplash.com/photo-1571809864118-d0a73b090d6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/></div>
        <div className="cartItemName">Name</div>

        <div className="cartItemPrice">$0.00</div>
        <div className="quantity">QTY : </div>

        <div className="cartAddDelete"><img src="https://img.icons8.com/material/26/000000/plus--v1.png"/><img src="https://img.icons8.com/metro/26/000000/minus.png"/> </div>

        </div>


        <div className='fancy-line'></div>
        
        <div className="cartTotal">$0.00</div>
        
      </div>
    );
  }

}
