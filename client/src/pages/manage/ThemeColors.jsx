import * as React from 'react';
import Box from '@mui/material/Box';
import { TargetColorPicker } from '../../components/common/colorPicker/TargetColorPicker.jsx';
import { VerticalButtonGroup } from '../../components/common/buttons/VerticalButtonGroup.jsx';

export const ThemeColors = (props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <VerticalButtonGroup
        role='theme colors'
        buttons={[
          <TargetColorPicker key='global' defaultValue='#1976d2' title='Global color' handleColorChange={()=>{}} />,
          <TargetColorPicker key='titleBar' defaultValue='#1976d2' title='Title bar color' handleColorChange={()=>{}} />,
          <TargetColorPicker key='questionOption' defaultValue='#1976d2' title='Question option color' handleColorChange={()=>{}} />,
        ]}
      />
    </Box>
  );
}