import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Cart Page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><Cart/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});