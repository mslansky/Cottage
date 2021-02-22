import React from 'react';
import "./Store.css"
import Footer from '../Footer/Footer.js';
import Dropdown from '../Dropdown/Dropdown';
import Back from '../Back/Back.js';



export default class Store extends React.Component{
  render(){
    return(
      <div className="store-page">
        <Dropdown/>
        <Back/>

        <div className="store-front">
          
        <div className="store-img">
              <img src ="https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
        </div>

        <div className="store-title">
          <h1> Madison's Macarons</h1>
        </div>


        <div className="store-desc">
          <p> A shope for custom and gourmet macarons</p>
        </div>

        
        <div className="storeItemsGrid">
            <div className="grid-store-items"><img src="https://images.unsplash.com/photo-1566864399117-22c449669089?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="gridCatImg"/></div>
            <div className="grid-store-items"><img src="https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="gridCatImg"/></div>
            <div className="grid-store-items"><img src="https://images.unsplash.com/photo-1599599377756-6c2a54da71d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=797&q=80" className="gridCatImg"/></div>
            <div className="grid-store-items"><img src="https://images.unsplash.com/photo-1582623206169-985dbfb8e738?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="gridCatImg"/></div>
            <div className="grid-store-items"><img src="https://images.unsplash.com/photo-1607124978054-fdd57adf6ba7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="gridCatImg"/></div>
            <div className="grid-store-items"><img src="https://images.unsplash.com/photo-1449049607083-e29383d58423?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg1fHxicmVhZHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="gridCatImg"/></div>
        </div>


        </div>

        
        <Footer/>
      </div>
    );
  }

}
