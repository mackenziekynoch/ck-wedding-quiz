import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({theme}) => ({
  backgroundColor: theme?.components?.header?.color || theme.palette.primary.main,
  color: theme?.components?.header?.fontColor || theme.palette.primary.contrastText,
  fontFamily: theme?.components?.header?.fontFamily || theme.typography.fontFamily,
}));

const StyledAppTitle = styled(Typography)(({theme}) => ({
  fontSize: theme?.components?.header?.fontSize || theme.typography.h6.fontSize,
  fontFamily: theme?.components?.header?.fontFamily || theme.typography.fontFamily,
}))

export const Header = (props) => {
  const { title, ...other } = props;
  return (
    <Box sx={{ flexGrow: 1 }} mb={3}>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledAppTitle>{title}</StyledAppTitle>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
