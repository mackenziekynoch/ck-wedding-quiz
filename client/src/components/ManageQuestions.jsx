import * as React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion, removeQuestion } from '../redux/store.js';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';

import { AccordionHeader } from './common/accordion/AccordionHeader.jsx';
import ManageQuestion from './ManageQuestion.jsx';
import ManageAddQuestion from './ManageAddQuestion.jsx';

const defaultQuestion = {
  id: "question-default",
  question: "add question here",
  answerOptions: [
    {id: 0, text: "option"},
  ],
  answer: 0,
  description: "add description here"
};

export default function ManageQuestions(props) {
  const questions = useSelector(state => state.quiz.quiz);
  const dispatch = useDispatch();
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
    <React.Fragment>
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
        {Object.entries(questions).map((entry, i) => (
          <React.Fragment key={entry[0]}>
            <Accordion>
              <AccordionHeader
                id={entry[0]}
                title={`Question ${i+1}`}
                showRemove={Object.entries(questions).length > 1}
                removeHandler={handleRemoveQuestion}
              />
              <AccordionDetails>
                <ManageQuestion quizQuestion={entry[1]} />
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        ))}
        <ManageAddQuestion addQuestion={addDefaultQuestion} />
      </Box>
    </React.Fragment>
  );
}
