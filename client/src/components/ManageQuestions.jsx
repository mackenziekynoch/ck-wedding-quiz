import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import ManageQuestion from './ManageQuestion.jsx';

export default function ManageQuestions() {
  const [questions, setQuestions] = React.useState([]);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
        order: 1,
        flexGrow: 2
      }}
      noValidate
      autoComplete="off"
    >
      <ManageQuestion />
    </Box>
  );
}
