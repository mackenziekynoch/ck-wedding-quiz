import * as React from 'react';
import { useSelector } from 'react-redux';
import ReactDevicePreview from 'react-device-preview';
import Box from '@mui/material/Box';

import Quiz from '../pages/Quiz.jsx';

const ManageQuizFrame = () => {
  const quiz = useSelector(state => state.quiz.quiz)
  return (
    <Box sx={{ order: 2, alignItems: 'flex-end', marginLeft: 5 }}>
      <ReactDevicePreview device="iphone8" scale="0.8">
        <Quiz quiz={quiz} editMode={true} />
      </ReactDevicePreview>
    </Box>
  )
};

export default ManageQuizFrame;