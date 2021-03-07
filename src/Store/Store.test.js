import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Store Page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><Store/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});