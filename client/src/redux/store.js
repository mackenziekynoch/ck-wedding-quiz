import { configureStore, createSlice } from '@reduxjs/toolkit'
import data from '../../../database/mock_data.json';
import { defaultThemeObject } from '../../assets/defaultTheme';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quiz: data.quiz,
  },
  reducers: {
    updateQuestion: (state, action) => {
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


const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: defaultThemeObject,
  },
  reducers: {
    updateTheme: (state, action) => {
      state.theme = {...state.theme, ...action.payload};
    },
  },
});

export const {updateTheme} = themeSlice.actions;

export default configureStore({
  reducer: {
    quiz: quizSlice.reducer,
    theme: themeSlice.reducer,
  },
});