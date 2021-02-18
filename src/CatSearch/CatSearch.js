import React from 'react';
import "./CatSearch.css"



export default class CatSearch extends React.Component{
  render(){
    return(
      <div className="CatSearch">

          <div id="cover">
            <form method="get" action="">
                <input type="text" placeholder="Search" required/>
                  <button type="submit"><img src="https://img.icons8.com/ios-glyphs/30/000000/search.png"/></button>
            </form>
          </div>
      </div>
    );
  }

}
