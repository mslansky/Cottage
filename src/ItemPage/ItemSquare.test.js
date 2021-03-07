import React from 'react';
import ReactDOM from 'react-dom';
import ItemSquare from './ItemSquare.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Item Square Component without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><ItemSquare/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});