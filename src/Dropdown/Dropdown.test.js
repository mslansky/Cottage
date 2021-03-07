import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Dropdown Component without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><Dropdown/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});