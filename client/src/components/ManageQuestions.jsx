import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ManageQuestion from './ManageQuestion.jsx';
import ManageAddQuestion from './ManageAddQuestion.jsx';


export default function ManageQuestions() {
  const [questions, setQuestions] = React.useState([]);

  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
          order: 1,
          flexGrow: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Question 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ManageQuestion />
          </AccordionDetails>
        </Accordion>
        <ManageAddQuestion />
      </Box>
    </React.Fragment>
  );
}
