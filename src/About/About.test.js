import React from 'react';
import ReactDOM from 'react-dom';
import About from './About.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders About page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><About/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});