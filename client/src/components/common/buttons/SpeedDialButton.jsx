import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

export const SpeedDialButton = (props) => {
  const { role, actions, sx, ...other } = props;

  return (
    <SpeedDial
      ariaLabel={`${role} menu`}
      sx={Object.assign({ position: 'absolute'}, sx)}
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
  );
}