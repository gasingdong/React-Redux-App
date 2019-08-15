import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/index';
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
