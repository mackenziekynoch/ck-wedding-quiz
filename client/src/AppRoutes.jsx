import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useSelector } from "react-redux";

import { Quiz } from "./pages/quiz/Quiz.jsx"
import { Manage } from "./pages/manage/Manage.jsx";

export const AppRoutes = () => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <Routes>
      <Route path="quiz" element={
        <ThemeProvider theme={createTheme(theme)}>
          <Quiz />
        </ThemeProvider>
      } />
      <Route path="manage" element={<Manage />} />
    </Routes>
  );
};
