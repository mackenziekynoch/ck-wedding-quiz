import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export default function QuestionOption(props) {
  const { id, value, isAnswer, includeAddButton, includeRemoveButton, updateQuestionAnswer, addQuestionOption, removeQuestionOption, updateQuestionOption } = props
  return (
    <div>
      <TextField
        required
        id={`answer-option-${id}`}
        label={`Answer option ${id + 1}`}
        sx={{width: '50ch'}}
        onChange={updateQuestionOption}
        defaultValue={value}
      />
      <Tooltip title="Correct answer">
        <IconButton aria-label="correct-answer-indicator" id={id} onClick={updateQuestionAnswer}>
          {!isAnswer &&
            <CheckCircleOutlineRoundedIcon color="default" id={id} />
          }
          {isAnswer &&
            <CheckCircleRoundedIcon color="success" id={id} />
          }
        </IconButton>
      </Tooltip>
      { includeRemoveButton &&
        <Tooltip title="Remove option">
          <IconButton aria-label="delete-option" onClick={removeQuestionOption} id={id}>
            <RemoveCircleOutlineRoundedIcon id={id} />
          </IconButton>
        </Tooltip>
      }
      { includeAddButton &&
        <Stack direction="row" spacing={1}>
          <Tooltip title="Add option">
            <IconButton aria-label="add-option" onClick={addQuestionOption} id={id}>
              <AddCircleOutlineRoundedIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      }
    </div>
  );
}
