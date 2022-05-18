import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';

export const QuizSkeleton = (props) => {
  const { headerColor, pageStepperColor, questionOptionColor, title, checked, onChange } = props;
  return (
    <Card sx={{ width: 130 }}>
      <CardContent>
        <Stack spacing={1}>
          <Skeleton animation="wave" variant="rectangular" width={100} height={20} sx={{bgcolor: headerColor}}/>
          <Stack spacing={4} direction="row">
            <Skeleton animation="wave" variant="circular" width={10} height={10} sx={{bgcolor: pageStepperColor}} />
            <Skeleton animation="wave" variant="circular" width={10} height={10} sx={{bgcolor: pageStepperColor}} />
            <Skeleton animation="wave" variant="circular" width={10} height={10} sx={{bgcolor: pageStepperColor}} />
          </Stack>
          <Skeleton animation="wave" variant="rectangular" width={100} height={10} sx={{bgcolor: questionOptionColor}} />
          <Skeleton animation="wave" variant="rectangular" width={100} height={10} sx={{bgcolor: questionOptionColor}} />
          <Skeleton animation="wave" variant="rectangular" width={100} height={10} sx={{bgcolor: questionOptionColor}} />
        </Stack>
      </CardContent>
      <CardActions>
        <FormControl>
          <FormControlLabel
            value={title}
            control={<Radio size="small" checked={checked === title} />}
            onChange={(e) => onChange(e.target.value)}
            label={title}
            labelPlacement="start"
          />
        </FormControl>
      </CardActions>
    </Card>
  );
};