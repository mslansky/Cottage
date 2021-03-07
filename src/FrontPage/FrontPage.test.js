import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './FrontPage.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Front Page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><FrontPage/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});