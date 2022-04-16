import * as React from 'react';
import _ from 'lodash';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion, removeQuestion } from '../../redux/store.js';
import Box from '@mui/material/Box';

import { FullAccordion } from '../common/accordion/FullAccordion.jsx';
import { Question } from './Question.jsx';
import ManageAddQuestion from '../ManageAddQuestion.jsx';

export const QuestionList = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.quiz.quiz);

  const addDefaultQuestion = () => {
    const answerOptionId = uuid();
    const newQuestion = {
      id: uuid(),
      question: "add question here",
      answerOptions: [
        {id: answerOptionId, text: "option"},
      ],
      answer: answerOptionId,
      description: "add description here"
    };
    dispatch(addQuestion(newQuestion));
  };

  const handleRemoveQuestion = (e) => {
    e.preventDefault();
    if (questions.length === 1) {
      return;
    }
    const targetId = e.target.parentElement.id;
    if (idArr === undefined) {
      return;
    }
    dispatch(removeQuestion({id: targetId}));
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
