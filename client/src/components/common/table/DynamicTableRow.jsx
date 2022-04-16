import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const DynamicTableRow = (props) => {
  const { cells, rowNum, rowName, pageNum, rowsPerPage, ...other } = props;

  return (
    <TableRow key={rowName}>
      <TableCell component="th" scope="row">
        {pageNum * rowsPerPage + (rowNum + 1)}
      </TableCell>
      {cells.map((cell, i) => (
        <TableCell key={i} align={i === 0 ? "left" : "center"}>{cell}</TableCell>
      ))}
    </TableRow>
  );
}
