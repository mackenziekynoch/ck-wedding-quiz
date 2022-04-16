import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import { TooltipIconButton } from '../buttons/TooltipIconButton.jsx';

export const ModifiableInputList = (props) => {
  const { role, width, onChangeHandler, onRemoveHandler, onAddHandler, inputs, buttonRenderList, ...other } = props

  return (
    <Stack>
      {inputs.map((input, i) => (
        <div key={`option-stack-${input.id}`}>
          <TextField
            required
            id={input.id}
            label={`${role} option ${i + 1}`}
            sx={{width: width}}
            onChange={onChangeHandler}
            defaultValue={input.value}
          />
          {buttonRenderList.map(buttonFunc => buttonFunc(input))}
          { !(i === 0 && inputs.length === 1) &&
            <TooltipIconButton
              title="Remove option"
              onClickHandler={onRemoveHandler}
              id={input.id}
              icon={<RemoveCircleOutlineRoundedIcon id={input.id} />}
            />
          }
          { inputs.length - 1 === i &&
            <TooltipIconButton
              title="Add option"
              onClickHandler={onAddHandler}
              id={input.id}
              icon={<AddCircleOutlineRoundedIcon />}
            />
          }
        </div>
      ))}
    </Stack>
  );
}
