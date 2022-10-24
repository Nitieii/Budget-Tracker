import React from 'react';

// redux
import {Provider} from 'react-redux';
import store from './store';

import App from './App';

const SetUp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default SetUp;
