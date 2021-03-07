import React from 'react';
import ReactDOM from 'react-dom';
import ItemPage from './ItemPage.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Item Page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><ItemPage/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});