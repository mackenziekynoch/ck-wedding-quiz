import * as React from 'react';
import ReactDevicePreview from 'react-device-preview';

import Quiz from '../pages/Quiz.jsx';
import data from '../../../database/mock_data.json';

const ManageQuizFrame = (props) => {
  return (
    <ReactDevicePreview device="iphone8" scale="0.8">
      <Quiz quiz={data.quiz} />
    </ReactDevicePreview>
  )
};

export default ManageQuizFrame;