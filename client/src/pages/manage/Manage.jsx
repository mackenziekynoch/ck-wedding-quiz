import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { QuizEditor } from './QuizEditor.jsx';
import { TabList } from '../../components/common/tabs/TabList.jsx';
import { PreviewPage } from './PreviewPage.jsx';
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