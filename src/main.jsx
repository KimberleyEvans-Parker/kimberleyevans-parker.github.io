import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./css/global.css";
import "./css/fireflies.css";
import "./css/animations.css";
import "./css/fade animations.css";
import "./css/link.css";
import "./css/tiles.css";
import "./css/bullet points.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
