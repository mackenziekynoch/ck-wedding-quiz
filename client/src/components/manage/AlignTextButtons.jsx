import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

export const AlignTextButtons = (props) => {
  const { handleChange, defaultValue } = props;
  const [selected, setSelected] = React.useState(defaultValue);

  const handleButtonClick = (button) => {
    setSelected(button);
    handleChange(button);
  };

  return (
    <ButtonGroup >
      <Button
        variant={selected === 'start' ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick('start')}
        aria-label='left-align'
        startIcon={<FormatAlignLeftIcon />}
      >
        Left
      </Button>
      <Button
        variant={selected === 'center' ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick('center')}
        aria-label='center-align'
        startIcon={<FormatAlignCenterIcon />}
      >
        Center
      </Button>
      <Button
        variant={selected === 'end' ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick('end')}
        aria-label='right-align'
        startIcon={<FormatAlignRightIcon />}
      >
        Right
      </Button>
    </ButtonGroup>

  );
};