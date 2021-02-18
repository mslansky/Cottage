import React from 'react';
import "./CatSearch.css"



export default class CatSearch extends React.Component{
  render(){
    return(
      <div className="CatSearch">
          <form id="search-form">
            <div className="search">
              <div className="round"><img src="https://img.icons8.com/fluent-systems-regular/24/000000/search-more.png" className="searchQ"/></div>
             <input type="submit" className="corner" value=""/>
            </div>
        </form>

      </div>
    );
  }

}
