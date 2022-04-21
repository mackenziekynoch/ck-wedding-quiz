import * as React from 'react';
import _ from 'lodash';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion, removeQuestion } from '../../redux/store.js';
import Box from '@mui/material/Box';
import DynamicFormRoundedIcon from '@mui/icons-material/DynamicFormRounded';

import { AccordianList } from '../common/accordion/AccordianList.jsx';
import { SpeedDialButton } from '../common/buttons/SpeedDialButton.jsx';
import { Question } from './Question.jsx';

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
    if (targetId === undefined) {
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
          width: '100%'
        }}
        noValidate
        autoComplete="off"
      >
        <AccordianList items={Object.entries(questions).map(([questionId, question], i) => ({
            id: questionId,
            title: `Question ${i+1}`,
            showRemove: Object.entries(questions).length > 1,
            children: <Question quizQuestion={question} />,
          }))}
          removeHandler={handleRemoveQuestion}
          />
        <SpeedDialButton
          role='manage question'
          actions={[
            { icon: <DynamicFormRoundedIcon />, name: 'Add Question', action: addDefaultQuestion }
          ]}
          sx={{marginTop: 5, right: '38%'}}
        />
      </Box>
  );
}
