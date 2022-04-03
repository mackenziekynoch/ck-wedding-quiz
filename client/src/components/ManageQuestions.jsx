import * as React from 'react';
import _ from 'lodash';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

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
  const [questions, setQuestions] = React.useState(props.questions ? props.questions : [_.cloneDeep(defaultQuestion)]);
  const [questionId, setQuestionId] = React.useState(props.questions ? props.questions.length : 1)

  const addDefaultQuestion = () => {
    const newQuestion = _.cloneDeep(defaultQuestion);
    newQuestion.id = `question-${questionId}`;
    const questionsCopy = _.cloneDeep(questions);
    questionsCopy.push(newQuestion);
    setQuestions(questionsCopy);
    setQuestionId(questionId + 1);
  };

  const handleRemoveQuestion = (e) => {
    e.preventDefault();
    if (questions.length === 1) {
      return;
    }
    const idStr = e.target.parentElement.id.split('-')[2];
    if (idStr === undefined || idStr === null) {
      return;
    }
    let questionsCopy = _.cloneDeep(questions);
    const id = parseInt(idStr, 10);
    if (!isNaN(id)) {
      questionsCopy.splice(id, 1);
      setQuestions(questionsCopy);
    }
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
        {questions.map((question, i) => (
          <React.Fragment key={question.id}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ display: 'flex', flexGrow: 1}}
              >
                <Typography sx={{ display: 'flex', order: 0, marginRight: '80%' }}>{`Question ${i+1}`}</Typography>
                {questions.length > 1 &&
                  <ClearRoundedIcon onClick={handleRemoveQuestion} color='error' id={`remove-${question.id}`} sx={{ display: 'flex', order: 1 }}/>
                }
              </AccordionSummary>
              <AccordionDetails>
                <ManageQuestion quizQuestion={question} />
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        ))}
        <ManageAddQuestion addQuestion={addDefaultQuestion} />
      </Box>
    </React.Fragment>
  );
}
