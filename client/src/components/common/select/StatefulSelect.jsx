import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const StatefulSelect = (props) => {
  const { defaultValue, label, options, handler } = props;
  const [value, setValue] = React.useState(defaultValue);
  return (
    <Select
      labelId={label}
      label={label}
      key={label}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        handler(e.target.value);
      }}
    >
      {options.map((option, i) => <MenuItem value={option.value} key={i}>{option.visual}</MenuItem>)}
    </Select>
  );
};