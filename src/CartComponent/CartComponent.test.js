import React from 'react';
import ReactDOM from 'react-dom';
import CartComponent from './CartComponent.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Cart Component Component without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><CartComponent/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});