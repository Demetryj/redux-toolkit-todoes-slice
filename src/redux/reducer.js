import { createReducer } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import { addTask, deleteTask, toggleCompleted, setFilter } from './actions';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Learn React', completed: false },
  { id: 3, text: 'Learn Redux', completed: false },
  { id: 4, text: 'Learn Node.js', completed: false },
  { id: 5, text: 'Build apps', completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    state.push(action.payload);
  },

  [deleteTask]: (state, action) => {
    console.log(state);
    return state.filter(task => task.id !== action.payload);
  },

  [toggleCompleted]: (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setFilter]: (state, action) => {
    state.status = action.payload.status;
  },
});
