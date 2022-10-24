import store from './store';
import App from './App';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

createRoot(document.querySelector('#root')).render(
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);



