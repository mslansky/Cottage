import React from 'react';
import ReactDOM from 'react-dom';
import Registration from './Registration.js';
import {BrowserRouter as Router} from "react-router-dom";

it('renders Registration Page without crashing', () => {
  
  const div = document.createElement('div');


  ReactDOM.render(<Router><Registration/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});