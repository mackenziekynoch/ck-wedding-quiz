import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function QuizAlert({status}) {
  if (status === true) {
    return <Alert severity="success">Correct!</Alert>
  } else if (status === false) {
    return <Alert severity="error">Incorrect!</Alert>
  } else {
    return null;
  }
}