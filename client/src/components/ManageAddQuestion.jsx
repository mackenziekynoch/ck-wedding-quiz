import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DynamicFormRoundedIcon from '@mui/icons-material/DynamicFormRounded';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';

const actions = [
  { icon: <DynamicFormRoundedIcon />, name: 'Add Question' },
  { icon: <CachedRoundedIcon />, name: 'Reorder' },
];

export default function ManageAddQuestion() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="add item menu"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}