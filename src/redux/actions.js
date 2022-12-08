import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
});

export const deleteTask = createAction('task/deleteTask');

export const toggleCompleted = createAction('task/toggleCompleted');

export const setFilter = createAction('filters/setFilter');
