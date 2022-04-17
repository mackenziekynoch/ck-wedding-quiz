import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useSelector, useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/store.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { PreviewQuiz } from '../../components/manage/PreviewQuiz.jsx';
import { ThemeFields } from '../../components/manage/ThemeFields.jsx';


export const ThemeEditor = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Box
        sx={{
          order: 1,
          flexGrow: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{width: 650}}>
          <ThemeFields title='Global theme' bgColor={{handler: () => {}}} />
          <ThemeFields title='Header theme' bgColor={{handler: () => {}}} font={true} fontColor={{handler: () => {}}} fontSize={true} />
          <ThemeFields title='Page counter theme' bgColor={{handler: () => {}}} fontSize={true} select={{label: 'Icon type', options: ['Ten', 'Twenty', 'Thirty']}} />
          <ThemeFields title='Question title theme' bgColor={{handler: () => {}}} fontSize={true} font={true} />
          <ThemeFields title='Question options theme' bgColor={{handler: () => {}}} fontSize={true} font={true} />
          <ThemeFields title='Question description theme' bgColor={{handler: () => {}}} fontSize={true} font={true} />
          <ThemeFields title='Next page theme' bgColor={{handler: () => {}}} fontSize={true} />
          <ThemeFields title='Leaderboard theme' />
        </Stack>
      </Box>
      <ThemeProvider theme={createTheme(theme)}>
        <PreviewQuiz />
      </ThemeProvider>
    </Box>
  );
}