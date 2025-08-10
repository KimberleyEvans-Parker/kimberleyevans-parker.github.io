import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./styles/global.styles";
import "./styles/fireflies.styles";
import "./styles/animations.styles";
import "./styles/fade animations.styles";
import "./styles/link.styles";
import "./styles/bullet points.styles";
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
