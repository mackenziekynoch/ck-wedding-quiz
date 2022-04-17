import * as React from 'react';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const LabeledSlider = (props) => {
  const {defaultValue, max, title, handleChange} = props;
  return (
    <Stack direction='row' spacing={2}>
      <Typography>{title}</Typography>
      <Slider
        key={`${title}-font-size`}
        defaultValue={defaultValue}
        max={max}
        valueLabelDisplay="auto"
        onChange={(e) => handleChange(e.target.value)} />
    </Stack>
  );
};