import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ManageQuestions() {
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
      <div>
        <TextField
          required
          fullWidth
          id="question-field"
          label="Question"
        />
        <TextField
          required
          fullWidth
          multiline
          id="description-field"
          label="Description"
          helperText="Description/answer to show after respondent makes selection"
        />
        <TextField
          required
          id="answer-option-1"
          label="Answer option 1"
          sx={{width: '50ch'}}
        />
      </div>
    </Box>
  );
}
