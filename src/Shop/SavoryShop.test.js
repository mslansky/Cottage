import React from 'react';
import ReactDOM from 'react-dom';
import SavoryShop from './SavoryShop.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Savory Shop Page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><SavoryShop/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});