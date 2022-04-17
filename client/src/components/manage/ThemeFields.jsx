import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { FullAccordion } from '../../components/common/accordion/FullAccordion.jsx';
import { TargetColorPicker } from '../../components/common/colorPicker/TargetColorPicker.jsx';


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
      <Slider key={`${title}-font-size`} defaultValue={14} />
    );
  }
  if (other?.font !== undefined) {
    children.push(
      <Autocomplete
        key='font'
        disablePortal
        id="select-text-font"
        options={['1', '2', '3']}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Font" />}
      />
    );
  }
  if (other?.select !== undefined) {
    children.push(
      <Select
        labelId={other.select.label}
        label={other.select.label}
        key={other.select.label}
        value=''
      >
        {other.select.options.map((option, i) => <MenuItem value={option} key={i}>{option}</MenuItem>)}
      </Select>
    );
  }
  return (
    <FullAccordion
      id={title}
      title={title}
      showRemove={false}
      removeHandler={()=>{}}
      children={children}
    />
  );
}