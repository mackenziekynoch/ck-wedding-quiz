import * as React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion, removeQuestion } from '../../redux/store.js';
import Box from '@mui/material/Box';

import { FullAccordion } from '../common/accordion/FullAccordion.jsx';
import { Question } from './Question.jsx';
import ManageAddQuestion from '../ManageAddQuestion.jsx';

const defaultQuestion = {
  id: "question-default",
  question: "add question here",
  answerOptions: [
    {id: 0, text: "option"},
  ],
  answer: 0,
  description: "add description here"
};

export const QuestionList = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.quiz.quiz);
  const [questionId, setQuestionId] = React.useState(questions.length);

  const addDefaultQuestion = () => {
    const newQuestion = _.cloneDeep(defaultQuestion);
    newQuestion.id = `question-${questionId}`;
    dispatch(addQuestion(newQuestion));
    setQuestionId(questionId + 1);
  };

  const handleRemoveQuestion = (e) => {
    e.preventDefault();
    if (questions.length === 1) {
      return;
    }
    const idArr = e.target.parentElement.id.split('-');
    if (idArr === undefined || idArr.length !== 3) {
      return;
    }
    const idStr = `${idArr[1]}-${idArr[2]}`;
    dispatch(removeQuestion({id: idStr}))
  };

  return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
          order: 1,
          flexGrow: 2,
        }}
        noValidate
        autoComplete="off"
      >
        {Object.entries(questions).map(([questionId, question], i) => (
          <FullAccordion
            key={questionId}
            id={questionId}
            title={`Question ${i+1}`}
            showRemove={Object.entries(questions).length > 1}
            removeHandler={handleRemoveQuestion}
            children={<Question quizQuestion={question} />}
          />
        ))}
        <ManageAddQuestion addQuestion={addDefaultQuestion} />
      </Box>
  );
}
