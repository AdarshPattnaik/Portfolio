// Main JS File: index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App.jsx';
// Importing Bootstrap:
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// CSS Files:
import './index.css';
import './responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);