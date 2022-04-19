import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

export const RemoveButton = ({ id, clickHandler }) => {
  return (
    <Tooltip title='Remove question'>
      <IconButton aria-label='remove question' id={`remove-${id}`} onClick={clickHandler}>
        <ClearRoundedIcon color='error' id={`${id}`} sx={{ display: 'flex', order: 1 }}/>
      </IconButton>
    </Tooltip>
  );
};