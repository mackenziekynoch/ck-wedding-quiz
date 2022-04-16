import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export const TooltipIconButton = (props) => {
  const { title, onClickHandler, icon, ...other } = props

  return (
    <Tooltip title={title}>
      <IconButton aria-label={title} onClick={onClickHandler} {...other}>
        { icon }
      </IconButton>
    </Tooltip>
  );
}
