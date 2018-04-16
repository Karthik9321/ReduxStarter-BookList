import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'unstated';

import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>
  , document.querySelector('.container'));
