import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { FullAccordion } from '../../components/common/accordion/FullAccordion.jsx';
import { TargetColorPicker } from '../../components/common/colorPicker/TargetColorPicker.jsx';
import { StepSlider } from '../common/slider/StepSlider.jsx';
import { StatefulSelect } from '../common/select/StatefulSelect.jsx';
import { AlignTextButtons } from './AlignTextButtons.jsx';


export const ThemeFields = (props) => {
  const { title, ...other } = props;
  const children = [];
  if (other?.bgColor !== undefined) {
    children.push(
      <TargetColorPicker
        key={`bg-color-${title}`}
        defaultValue={other.bgColor.defaultValue}
        title={`${title} background color`}
        handleColorChange={other.bgColor.handler}
      />
    );
  }
  if (other?.fontColor !== undefined) {
    children.push(
      <TargetColorPicker
        key={`font-color-${title}`}
        defaultValue={other.fontColor.defaultValue}
        title={`${title} font color`}
        handleColorChange={other.fontColor.handler}
      />
    );
  }
  if (other?.fontSize !== undefined) {
    children.push(
      <StepSlider
        defaultValue={other.fontSize.defaultValue}
        title={`${title} font size`}
        key={`${title}-font-size`}
        handleChange={other.fontSize.handler}
        min={1}
        max={7}
      />
    );
  }
  if (other?.select !== undefined) {
    children.push(
      <StatefulSelect
        key={other.select.label}
        label={other.select.label}
        options={other.select.options}
        defaultValue={other.select.options[0].value}
        handler={other.select.handler}
      />
    );
  }
  if (other?.align !== undefined) {
    children.push(
      <AlignTextButtons
        key={`${title}-align-items`}
        handleChange={other.align.handler}
        defaultValue={other.align.defaultValue}
      />
    );
  }
  if (other?.fontWeight !== undefined) {
    children.push(
      <StepSlider
        defaultValue={other.fontWeight.defaultValue}
        title={`${title} font weight`}
        key={`${title}-font-weight`}
        handleChange={other.fontWeight.handler}
        min={1}
        max={3}
      />
    )
  }
  return (
    <FullAccordion
      key={title}
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