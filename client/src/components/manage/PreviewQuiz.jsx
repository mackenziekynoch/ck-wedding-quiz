import * as React from 'react';
import { useSelector } from 'react-redux';

// import Quiz from '../../pages/Quiz.jsx';
import { Quiz } from '../../pages/quiz/Quiz.jsx';
import { IPhone8 } from '../common/device/IPhone8.jsx';

export const PreviewQuiz = (props) => {
  const quiz = useSelector(state => state.quiz.quiz)
  console.log(props)
  return (
    <IPhone8
      sx={{ order: 2, alignItems: 'flex-end', marginLeft: 5 }}
      children={<Quiz quiz={quiz} editMode={props.editMode} />}
    />
  )
};