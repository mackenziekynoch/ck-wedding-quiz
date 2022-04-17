import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
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
      <Typography sx={{ display: 'flex', order: 0, marginRight: '80%', minWidth: 300 }}>{title}</Typography>
      {showRemove &&
        <RemoveButton id={id} clickHandler={removeHandler} />
      }
    </AccordionSummary>
  );
};