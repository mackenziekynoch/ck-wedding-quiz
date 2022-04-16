import * as React from 'react';
import Alert from '@mui/material/Alert';

export const SeverityAlert = (props) => {
  const { status, posMessage, negMessage, ...other } = props;
  if (status === true) {
    return <Alert severity="success">{posMessage}</Alert>
  } else if (status === false) {
    return <Alert severity="error">{negMessage}</Alert>
  } else {
    return null;
  }
};