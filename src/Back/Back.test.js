import React from 'react';
import ReactDOM from 'react-dom';
import Back from './Back.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Back component without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><Back/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});