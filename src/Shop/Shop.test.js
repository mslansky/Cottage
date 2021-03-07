import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './Shop.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Shop Page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><Shop/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});