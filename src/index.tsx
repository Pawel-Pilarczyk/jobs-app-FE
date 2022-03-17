import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import Router from './router';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
