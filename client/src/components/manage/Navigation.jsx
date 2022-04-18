import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Navigation = (props) => {

  return (
    <Box sx={{width: '100%', mb: 2, padding: 1, boxShadow: '0px 1px #D3D3D3'}}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Button startIcon={<ArrowBackIcon />}>
            Back to Events
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ flex: '1 1 auto' }} />
        </Grid>
        <Grid item xs={2}>
          <ButtonGroup variant='contained'>
            <Button >Preview</Button>
            <Button >Save</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
};