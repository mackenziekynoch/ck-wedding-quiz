import * as React from 'react';
import Box from '@mui/material/Box';

import { QuestionList } from '../../components/manage/QuestionList.jsx';

export const QuestionEditor = (props) => {
  const { setQuestionPage } = props;
  return (
    <Box>
      <QuestionList setQuestionPage={setQuestionPage} />
    </Box>
  );
}