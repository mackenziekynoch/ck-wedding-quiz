import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Question = (props) => {
  const { question, handleAnswer, isEdit } = props;
  const [showDescription, setShowDescription] = useState(isEdit);
  const [active, setActive] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setActive(false);
    setShowDescription(true);
    handleAnswer(e.target.getAttribute('answer') === question.answer);
  }

  useEffect(() => {
    setActive(true);
    setShowDescription(isEdit ? true : false);
  }, [question]);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography sx={{ marginTop: 2, marginLeft: 2, marginBottom: 2 }} variant='h6'>{question.question}</Typography>
      <Stack spacing={2} alignItems="normal" justifyContent="flex-start">
        {question.answerOptions.map(option => (
          <Button disabled={!active} variant="contained" answer={option.id} key={option.id} onClick={handleClick}>{option.value}</Button>
        ))}
      </Stack>
      { showDescription &&
        <Typography variant="body1" sx={{ mt: 2, mb: 1, ml: 1, mr: 1 }}>{question.description}</Typography>
      }
    </Box>
  );
};