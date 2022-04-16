import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import { SketchPicker } from 'react-color';


export const TargetColorPicker = (props) => {
  const { defaultValue, title, handleColorChange } = props;
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState(defaultValue);
  const changeHandler = (color) => {
    setColor(color.hex);
    handleColorChange(color.hex);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button sx={{backgroundColor: color, height: 20}} onClick={handleClick} />
        <Dialog open={open}>
          <DialogTitle>{title}</DialogTitle>
          <SketchPicker color={color} onChangeComplete={changeHandler} />
          <Button variant="outlined" onClick={handleClose}>Close</Button>
        </Dialog>
      </Grid>
    </Grid>
  );
};