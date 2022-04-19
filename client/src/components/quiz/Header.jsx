import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({theme}) => ({
  backgroundColor: theme?.components?.header?.color || theme.palette.primary.main,
  color: theme?.components?.header?.fontColor || theme.palette.primary.contrastText,
  alignItems: theme?.components?.header?.alignItems || 'start',
}));

const StyledAppTitle = styled(Typography)(({theme}) => ({
  fontSize: theme.typography[theme?.components?.header?.fontSize]?.fontSize || theme.typography.h6.fontSize,
  fontWeight: theme?.components?.header?.fontWeight || theme.typography.fontWeightRegular
}));

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
