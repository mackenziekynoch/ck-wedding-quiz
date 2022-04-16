import * as React from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';


export const PageStepper = (props) => {
  const { stepCount, handleStep, page, editMode = false, ...other } = props;
  const steps = [...Array(stepCount).keys()];
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => handleStep(activeStep), [activeStep]);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
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
      { page }
      {activeStep === steps.length ? (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleReset}>Reset</Button>
        </Box>
      ) : (
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
      )}
    </Box>
  );
}
