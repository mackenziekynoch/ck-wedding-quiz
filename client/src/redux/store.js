import { configureStore, createSlice } from '@reduxjs/toolkit'
import data from '../../../database/mock_data.json';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quiz: data.quiz,
  },
  reducers: {
    updateQuestion: (state, action) => {
      console.log('reducer updateQuestion: ', action.payload)
      state.quiz[action.payload.id] = action.payload;
    },
    addQuestion: (state, action) => {
      state.quiz[action.payload.id] = action.payload;
    },
    removeQuestion: (state, action) => {
      delete state.quiz[action.payload.id];
    },
  },
});

export const {updateQuestion, addQuestion, removeQuestion} = quizSlice.actions;

export default configureStore({
  reducer: {
    quiz: quizSlice.reducer
  },
});