import * as React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/store.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { PreviewQuiz } from '../../components/manage/PreviewQuiz.jsx';
import { ThemeColors } from './ThemeColors.jsx';

export const ThemeEditor = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <ThemeColors />
      <ThemeProvider theme={createTheme(theme)}>
        <PreviewQuiz />
      </ThemeProvider>
    </Box>
  );
}