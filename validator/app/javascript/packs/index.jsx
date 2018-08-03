// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom';
import App from './app';





document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root');
  // console.log(node);
  // console.log(node.getAttribute('data'))
  // const data = JSON.parse(node.getAttribute('data')) 
  ReactDOM.render(
    <BrowserRouter>
        <App data={node.getAttribute('data')}/>
    </BrowserRouter>,
    document.getElementById('root'));
})