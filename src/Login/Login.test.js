import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Login Page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><Login/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});