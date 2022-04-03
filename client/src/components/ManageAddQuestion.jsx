import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DynamicFormRoundedIcon from '@mui/icons-material/DynamicFormRounded';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

export default function ManageAddQuestion(props) {
  const actions = [
    { icon: <DynamicFormRoundedIcon />, name: 'Add Question', action: props.addQuestion },
    { icon: <CachedRoundedIcon />, name: 'Reorder' },
  ];
  return (
    <Box sx={{ height: 300, transform: 'translateZ(0px)', flexGrow: 1 }}>
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
            onClick={action.action}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}