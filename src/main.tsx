import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, } from 'react-router-dom';
import App from './App';
import './styles/App.module.scss';

const Root = ReactDOM.createRoot(document.getElementById('root')!)

Root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);