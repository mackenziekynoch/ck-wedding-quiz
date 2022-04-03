import * as React from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import QuizPage from "../components/QuizPage.jsx";
import QuizHeader from "../components/QuizHeader.jsx";
import QuizLeaderboard from '../components/QuizLeaderboard.jsx';
import QuizAlert from '../components/QuizAlert.jsx';

import data from "../../../database/mock_leaders.json";


export default function Quiz({quiz, editMode}) {
  const steps = [...Array(Object.entries(quiz).length).keys()];
  const [activeStep, setActiveStep] = React.useState(0);
  const [status, setStatus] = React.useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setStatus(null);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setStatus(null);
  };

  const handleReset = () => {
    setActiveStep(0);
    setStatus(null);
  };

  const handleAnswer = (isCorrect) => {
    setStatus(isCorrect);
  };

  return (
    <React.Fragment>
      <QuizHeader />
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            );
          })}
        </Stepper>
        { status !== null &&
          <Box mt={2}>
            <QuizAlert status={status} />
          </Box>
        }
        {activeStep === steps.length ? (
          <React.Fragment>
            <Box sx={{width: '100%'}}>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Quiz completed!
              </Typography>
              <QuizLeaderboard rows={data.rows} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <QuizPage
              question={quiz[`question-${activeStep}`]}
              handleAnswer={handleAnswer}>
            </QuizPage>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              {editMode &&
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
              }
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </React.Fragment>
  );
}
