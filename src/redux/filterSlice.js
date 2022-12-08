import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersInitialState = {
  status: statusFilters.all,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
