import React from 'react';
import ReactDOM from 'react-dom';
import SatisfyingShop from './SatisfyingShop.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Satisfying Shop Page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><SatisfyingShop/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});