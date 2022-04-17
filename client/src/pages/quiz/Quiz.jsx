import * as React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Header } from '../../components/quiz/Header.jsx';
import { SeverityAlert } from '../../components/common/alert/SeverityAlert.jsx';
import { PageStepper } from '../../components/common/stepper/PageStepper.jsx';
import { Question } from '../../components/quiz/Question.jsx';
import { PaginatedTable } from '../../components/common/table/PaginatedTable.jsx';

import data from "../../../../database/mock_leaders.json";


export const Quiz = (props) => {
  const { editMode, ...other } = props;
  const quiz = useSelector((state) => state.quiz.quiz);
  const eventName = useSelector(state => state.event.eventName);
  const [activeStep, setActiveStep] = React.useState(0);
  const [status, setStatus] = React.useState(null);

  const handlePageChange = (pageNumber) => {
    setActiveStep(pageNumber);
    setStatus(null);
  };
  const handleAnswer = (isCorrect) => {
    setStatus(isCorrect);
  };

  return (
    <React.Fragment>
      <Header title={eventName} />
      <PageStepper
        stepCount={Object.keys(quiz).length}
        handleStep={handlePageChange}
        editMode={editMode}
        page={activeStep === Object.keys(quiz).length ? (
          <Box sx={{width: '100%'}}>
            <Typography sx={{ mt: 2, mb: 1, ml: 1 }}>
              Quiz completed!
            </Typography>
            <PaginatedTable rowsPerPage={5} rows={data.rows} title='Quiz Leaderboard' />
          </Box>
        ) : (
          <Box sx={{ width: '100%' }}>
            { status !== null &&
              <Box mt={2}>
                <SeverityAlert status={status} posMessage='Correct!' negMessage='Incorrect!' />
              </Box>
            }
            <Question
              question={Object.values(quiz)[activeStep]}
              handleAnswer={handleAnswer}
              isEdit={editMode}
            />
          </Box>
        )}
      />
    </React.Fragment>
  );
}
