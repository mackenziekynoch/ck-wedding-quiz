import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export const VerticalButtonGroup = (props) => {
  const { role, buttons } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
        width: 300
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label={`${role} button group`}
        fullWidth
      >
        { buttons }
      </ButtonGroup>
    </Box>
  );
}
