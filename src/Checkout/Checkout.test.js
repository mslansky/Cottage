import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './Checkout.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Checkout Page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><Checkout/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});