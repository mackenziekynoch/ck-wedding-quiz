import * as React from 'react';
import Box from '@mui/material/Box';

import { PreviewQuiz } from '../../components/manage/PreviewQuiz.jsx';
import { QuestionList } from '../../components/manage/QuestionList.jsx';

export const QuestionEditor = (props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <QuestionList />
      <PreviewQuiz />
    </Box>
  );
}