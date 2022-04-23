import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { updateName } from '../../redux/store.js';

import { ImageUpload } from '../../components/manage/ImageUpload.jsx';

export const EventEditor = (props) => {
  const dispatch = useDispatch();
  const eventName = useSelector(state => state.event.eventName);

  const handleChange = (e) => {
    dispatch(updateName(e.target.value));
  };
  return (
    <Box>
      <TextField required id='event-name' label='Event Name' value={eventName} fullWidth onChange={handleChange} />
      <ImageUpload eventName={eventName} />
    </Box>
  );
}