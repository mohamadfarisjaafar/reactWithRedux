// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';  // Make sure this matches the filename
import store from './store';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;