import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Learn React', completed: false },
  { id: 3, text: 'Learn Redux', completed: false },
  { id: 4, text: 'Learn Node.js', completed: false },
  { id: 5, text: 'Build apps', completed: false },
];

const taskSlice = createSlice({
  name: 'task',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },

    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload);
    },

    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
