import React from 'react';
import "./Shop.css"
import Footer from '../Footer/Footer.js';
import Dropdown from '../Dropdown/Dropdown';
import CatSearch from '../CatSearch/CatSearch';




export default class Shop extends React.Component{
  render(){
    return(
      <div className="Shop">
        <Dropdown/>
        <CatSearch/>
        <div className="categoryTitle">Display the Chosen Category Here</div>

        <div className="catItemGrid">
       
          <div className="grid-cat-item"><img src="https://images.unsplash.com/photo-1566864399117-22c449669089?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="gridCatImg"/></div>
          <div className="grid-cat-item"><img src="https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="gridCatImg"/></div>
          <div className="grid-cat-item"><img src="https://images.unsplash.com/photo-1599599377756-6c2a54da71d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=797&q=80" className="gridCatImg"/></div>
          <div className="grid-cat-item"><img src="https://images.unsplash.com/photo-1582623206169-985dbfb8e738?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="gridCatImg"/></div>
          <div className="grid-cat-item"><img src="https://images.unsplash.com/photo-1607124978054-fdd57adf6ba7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="gridCatImg"/></div>
          <div className="grid-cat-item"><img src="https://images.unsplash.com/photo-1449049607083-e29383d58423?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg1fHxicmVhZHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="gridCatImg"/></div>
  

        </div>

       

      
        
        <Footer/>
      </div>
    );
  }

}
