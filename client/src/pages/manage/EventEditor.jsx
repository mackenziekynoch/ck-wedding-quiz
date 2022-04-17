import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { updateName } from '../../redux/store.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { PreviewQuiz } from '../../components/manage/PreviewQuiz.jsx';

export const EventEditor = (props) => {
  const dispatch = useDispatch();
  const eventName = useSelector(state => state.event.eventName);
  const theme = useSelector(state => state.theme.theme);

  const handleChange = (e) => {
    dispatch(updateName(e.target.value));
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <TextField required id='event-name' label='Event Name' value={eventName} fullWidth onChange={handleChange} />
        </Grid>
        <Grid item xs={3}>
          <ThemeProvider theme={createTheme(theme)}>
            <PreviewQuiz />
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  );
}