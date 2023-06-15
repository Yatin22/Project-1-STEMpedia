import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {App,valueSlice} from './App';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: valueSlice.reducer,
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
