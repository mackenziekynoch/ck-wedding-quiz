import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import QRCode from "react-qr-code";

export const PreviewQR = () => {
  return (
    <Box>
      <Typography variant="h5" mb={2}>Preview on your own device</Typography>
      <QRCode value='helloworld' />
    </Box>
  )
};