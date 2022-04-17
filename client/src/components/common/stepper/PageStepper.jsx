import * as React from 'react';
import _ from 'lodash';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import CircleIcon from '@mui/icons-material/Circle';
import CheckIcon from '@mui/icons-material/Check';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import FavoriteIcon from '@mui/icons-material/Favorite';

const iconOptions = {
  'default': (props) => <CircleIcon {...props} />,
  'checkmark': (props) => <CheckIcon {...props} />,
  'flower': (props) => <FilterVintageIcon {...props} />,
  'bounce': (props) => <AirlineStopsIcon {...props} />,
  'smile': (props) => <EmojiEmotionsIcon {...props} />,
  'ski': (props) => <DownhillSkiingIcon {...props} />,
  'love': (props) => <FavoriteIcon {...props} />,
};

const CustomPageIconRoot = styled('div')(({theme}) => ({
  color: theme.palette.primary.contrastText,
  display: 'flex',
  height: 22,
  alignItems: 'center',
  '& .CustomPageIcon-completedIcon': {
    color: theme?.components?.stepper?.color || theme.palette.primary.main,
    zIndex: 1,
    fontSize: 30,
  },
  '& .CustomPageIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme?.components?.stepper?.color || theme.palette.primary.main,
  },
}));
const CustomPageIcon = (props) => {
  const { active, completed, className } = props;
  const theme = useSelector(state => state.theme.theme);
  const iconName = _.get(theme, ['components', 'stepper', 'icon']);
  const iconGenerator = iconOptions[iconName];
  return (
    <CustomPageIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        iconGenerator({className: 'CustomPageIcon-completedIcon'})
      ) : (
        <div className="CustomPageIcon-circle" />
      )}
    </CustomPageIconRoot>
  );
}

export const PageStepper = (props) => {
  const { stepCount, handleStep, page, editMode = false, ...other } = props;
  const theme = useSelector(state => state.theme.theme);
  const iconName = _.get(theme, ['components', 'stepper', 'icon']);
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
          if (iconName && iconName !== 'default') {
            return (
              <Step key={label}>
                <StepLabel StepIconComponent={CustomPageIcon}></StepLabel>
              </Step>
            );
          } else {
            return (
              <Step key={label}>
                <StepLabel ></StepLabel>
              </Step>
            )
          }
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
