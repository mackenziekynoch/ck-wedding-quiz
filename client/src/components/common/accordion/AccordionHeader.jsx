import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RemoveButton } from '../buttons/RemoveButton.jsx';

export const AccordionHeader = ({id, title, showRemove, removeHandler}) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      sx={{ display: 'flex', flexGrow: 1}}
    >
      <Typography variant='h6'>{title}</Typography>
      <Box sx={{ flex: '1 1 auto' }} />
      {showRemove &&
        <RemoveButton id={id} clickHandler={removeHandler} />
      }
    </AccordionSummary>
  );
};