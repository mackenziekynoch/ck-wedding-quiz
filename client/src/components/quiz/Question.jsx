import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const QuestionTitle = styled(Typography)(({theme}) => ({
  color: theme?.components?.questionTitle?.fontColor || theme.palette.text.primary,
  fontSize: theme?.components?.questionTitle?.fontSize || theme.typography.h6.fontSize,
}));

const QuestionOption = styled(Button)(({theme}) => ({
  color: theme?.components?.questionOption?.fontColor || theme.palette.primary.contrastText,
  fontSize: theme?.components?.questionOption?.fontSize || theme.typography.body1.fontSize,
  backgroundColor: theme?.components?.questionOption?.color || theme.palette.primary.main,
}));

const QuestionDescription = styled(Typography)(({theme}) => ({
  color: theme?.components?.questionDescription?.fontColor || theme.palette.text.primary,
  fontSize: theme?.components?.questionDescription?.fontSize || theme.typography.body1.fontSize,
}));

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
      <QuestionTitle sx={{ marginTop: 2, marginLeft: 2, marginBottom: 2 }} variant='h6'>{question.question}</QuestionTitle>
      <Stack spacing={2} alignItems="normal" justifyContent="flex-start">
        {question.answerOptions.map(option => (
          <QuestionOption disabled={!active} variant="contained" answer={option.id} key={option.id} onClick={handleClick}>{option.value}</QuestionOption>
        ))}
      </Stack>
      { showDescription &&
        <QuestionDescription variant="body1" sx={{ mt: 2, mb: 1, ml: 1, mr: 1 }}>{question.description}</QuestionDescription>
      }
    </Box>
  );
};