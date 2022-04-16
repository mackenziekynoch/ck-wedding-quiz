import * as React from 'react';
import ReactDevicePreview from 'react-device-preview';
import Box from '@mui/material/Box';

export const IPhone8 = (props) => {
  const { sx, children, ...other } = props;
  return (
    <Box sx={sx}>
      <ReactDevicePreview device="iphone8" scale="0.8">
        { children }
      </ReactDevicePreview>
    </Box>
  )
};