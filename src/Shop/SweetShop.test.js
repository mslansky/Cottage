import React from 'react';
import ReactDOM from 'react-dom';
import SweetShop from './SweetShop.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Sweet Shop Page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><SweetShop/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});