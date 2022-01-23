import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/pages/home/Home';
import Layout from './components/pages/home/Home';
import Header from './components/layout/header/Header'

ReactDOM.render(
  <React.Fragment>
    <Layout/>
  </React.Fragment>,
  document.getElementById('root')
);