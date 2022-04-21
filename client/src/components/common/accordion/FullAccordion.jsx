import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';

import { AccordionHeader } from './AccordionHeader.jsx';


export const FullAccordion = (props) => {
  const {id, title, showRemove, removeHandler, children, handleChange, expanded} = props;

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionHeader
        id={id}
        title={title}
        showRemove={showRemove}
        removeHandler={removeHandler}
      />
      <AccordionDetails>
        { children }
      </AccordionDetails>
    </Accordion>
  );
}

