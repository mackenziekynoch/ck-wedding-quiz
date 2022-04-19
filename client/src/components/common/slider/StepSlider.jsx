import * as React from 'react';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const StepSlider = (props) => {
  const {defaultValue, title, handleChange, min, max} = props;
  const [value, setValue] = React.useState(defaultValue);
  return (
    <Stack direction='row' spacing={2}>
      <Typography>{title}</Typography>
      <Slider
        key={`${title}-font-size`}
        value={value}
        min={min}
        max={max}
        step={1}
        marks
        valueLabelDisplay="auto"
        onChange={(e) => {
          handleChange(e.target.value);
          setValue(e.target.value);
        }} />
    </Stack>
  );
};