import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  date: new Date().getTime(),
  searchMode: false,
  page: 2,
};

const slice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    SET_DATE: (state, action) => {
      state.date = action.payload;
    },
    SET_SEARCH_MODE: (state, action) => {
      state.searchMode = action.payload;
    },
    SET_PAGE: (state, action) => {
      state.page = action.payload;
    },
  },
});

const {reducer, actions} = slice;
export const {SET_DATE, SET_SEARCH_MODE, SET_PAGE} = actions;

export default reducer;
