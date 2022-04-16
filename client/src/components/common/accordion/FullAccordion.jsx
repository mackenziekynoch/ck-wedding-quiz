import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';

import { AccordionHeader } from './AccordionHeader.jsx';


export const FullAccordion = ({id, title, showRemove, removeHandler, children}) => (
  <Accordion>
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

