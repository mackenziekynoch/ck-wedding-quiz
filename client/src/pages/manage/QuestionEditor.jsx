import * as React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { PreviewQuiz } from '../../components/manage/PreviewQuiz.jsx';
import { QuestionList } from '../../components/manage/QuestionList.jsx';

export const QuestionEditor = (props) => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <QuestionList />
      <ThemeProvider theme={createTheme(theme)}>
        <PreviewQuiz />
      </ThemeProvider>
    </Box>
  );
}