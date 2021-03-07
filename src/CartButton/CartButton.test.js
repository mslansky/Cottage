import React from 'react';
import ReactDOM from 'react-dom';
import CartButton from './CartButton.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Cart Button Component without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><CartButton/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});