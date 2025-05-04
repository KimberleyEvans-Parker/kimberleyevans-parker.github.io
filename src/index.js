import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/global.css";
import "./css/fireflies.css";
import "./css/animations.css";
import "./css/fade animations.css";
import "./css/link.css";
import "./css/tiles.css";
import "./css/bullet points.css";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
