import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { QuizEditor } from './QuizEditor.jsx';
import { Navigation } from '../../components/manage/Navigation.jsx';


export const Manage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl' id='root-container' sx={{padding: 0, margin: 0}}>
        <Navigation />
        <QuizEditor />
      </Container>
    </React.Fragment>
  );
}