import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import { FullAccordion } from '../../components/common/accordion/FullAccordion.jsx';
import { TargetColorPicker } from '../../components/common/colorPicker/TargetColorPicker.jsx';
import { LabeledSlider } from '../common/slider/LabeledSlider.jsx';


export const ThemeFields = (props) => {
  const { title, ...other } = props;
  const children = [];
  if (other?.bgColor !== undefined) {
    children.push(
      <TargetColorPicker
        key={`bg-color-${title}`}
        defaultValue='#1976d2'
        title={`${title} background color`}
        handleColorChange={other.bgColor.handler}
      />
    );
  }
  if (other?.fontColor !== undefined) {
    children.push(
      <TargetColorPicker
        key={`font-color-${title}`} defaultValue='#1976d2' title={`${title} font color`} handleColorChange={other.fontColor.handler} />
    );
  }
  if (other?.fontSize !== undefined) {
    children.push(
      <LabeledSlider defaultValue={14} max={30} key={`${title}-font-size`} title={`${title} font size`} handleChange={other.fontSize.handler} />
    );
  }
  if (other?.font !== undefined) {
    children.push(
      <Autocomplete
        key='font'
        disablePortal
        id="select-text-font"
        options={['Helvetica', 'Arial', 'Times']}
        renderInput={(params) => <TextField {...params} label="Font" />}
        renderOption={(props, option) => (
          <MenuItem value={option} {...props}>
            <Typography sx={{fontFamily: option}}>{option}</Typography>
          </MenuItem>
        )}
        onChange={(e, newValue) => {other.font.handler(newValue)}}
      />
    );
  }
  if (other?.select !== undefined) {
    children.push(
      <Select
        labelId={other.select.label}
        label={other.select.label}
        key={other.select.label}
        // value={other.select.options[0].value}
        onChange={(e) => {other.select.handler(e.target.value)}}
      >
        {other.select.options.map((option, i) => <MenuItem value={option.value} key={i}>{option.visual}</MenuItem>)}
      </Select>
    );
  }
  return (
    <FullAccordion
      id={title}
      title={title}
      showRemove={false}
      removeHandler={()=>{}}
      children={
        <Stack spacing={2} direction='column' divider={<Divider orientation='horizontal' flexItem />}>
          { children }
        </Stack>
      }
    />
  );
}