import {configureStore} from '@reduxjs/toolkit';

import dateReducer from './DateSlice';

const rootReducer = {
  date: dateReducer,
};

export default configureStore({
  reducer: rootReducer,
});
