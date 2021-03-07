import React from 'react';
import ReactDOM from 'react-dom';
import FrontShop from './FrontShop.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Front Shop Component without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><FrontShop/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});