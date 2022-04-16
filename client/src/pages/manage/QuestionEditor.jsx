import * as React from 'react';
import Box from '@mui/material/Box';

import ManageQuizFrame from '../../components/ManageQuizFrame.jsx';
import { QuestionList } from '../../components/manage/QuestionList.jsx';

export const QuestionEditor = (props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <QuestionList />
      <ManageQuizFrame />
    </Box>
  );
}