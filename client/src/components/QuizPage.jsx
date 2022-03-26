import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const QuizPage = ({question, answerOptions, handleNext}) => {
  const handleClick = (e) => {
    e.preventDefault()
    handleNext()
  }
  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <h3>{question}</h3>
        <Stack spacing={1} alignItems="stretch" justifyContent="flex-start">
          {answerOptions.map(option => <Button variant="contained" key={option.id} onClick={handleClick}>{option.text}</Button>)}
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default QuizPage;