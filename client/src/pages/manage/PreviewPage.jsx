import * as React from 'react';
import QRCode from "react-qr-code";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { PreviewQuiz } from '../../components/manage/PreviewQuiz.jsx';
import { PreviewQR } from '../../components/manage/PreviewQR.jsx';

export const PreviewPage = (props) => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <PreviewQR />
        </Grid>
        <Grid item xs={8}>
          <ThemeProvider theme={createTheme(theme)}>
            <PreviewQuiz />
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  );
}