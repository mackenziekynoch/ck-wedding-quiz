import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

export default function QuestionOption(props) {
  const { id, includeAddButton, includeRemoveButton , addQuestionOption, removeQuestionOption, updateQuestionOption } = props
  return (
    <div>
      <TextField
        required
        id={`answer-option-${id}`}
        label={`Answer option ${id + 1}`}
        sx={{width: '50ch'}}
        onChange={updateQuestionOption}
      />
      { includeRemoveButton &&
        <IconButton aria-label="delete-option" onClick={removeQuestionOption} id={id}>
          <RemoveCircleOutlineRoundedIcon id={id}/>
        </IconButton>
      }
      { includeAddButton &&
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="add-option" onClick={addQuestionOption} id={id}>
            <AddCircleOutlineRoundedIcon />
          </IconButton>
        </Stack>
      }
    </div>
  );
}
