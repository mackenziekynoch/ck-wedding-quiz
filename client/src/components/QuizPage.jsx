import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const QuizPage = ({question, handleAnswer}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [active, setActive] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
    setActive(false);
    setShowDescription(true);
    handleAnswer(parseInt(e.target.getAttribute('answer'), 10) === question.answer);
  }

  useEffect(() => {
    setActive(true);
    setShowDescription(false);
  }, [question]);

  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <h3>{question.question}</h3>
        <Stack spacing={1} alignItems="stretch" justifyContent="flex-start">
          {question.answerOptions.map(option => {
            if (active) {
              return <Button variant="contained" answer={option.id} key={option.id} onClick={handleClick}>{option.text}</Button>
            } else {
              return <Button disabled variant="contained" answer={option.id} key={option.id} onClick={handleClick}>{option.text}</Button>
            }
          })}
        </Stack>
        { showDescription &&
          <Typography sx={{ mt: 2, mb: 1 }}>{question.description}</Typography>
        }
      </Box>
    </React.Fragment>
  );
};

export default QuizPage;