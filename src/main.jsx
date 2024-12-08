import React from 'react';
import ReactDom  from 'react-dom/client';
import './index.css';
import App from './App.jsx';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />                 {/*This code indicates that when we start our React webapp, it will render an App component using <App />. */}
  </React.StrictMode>,
);
