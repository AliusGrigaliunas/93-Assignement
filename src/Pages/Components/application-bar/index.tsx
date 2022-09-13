import React from 'react';
import {
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import ApplicationBarContainer, { type AplicationBarContainerProps } from './application-bar-container';

type ApplicationBarProps = {
  AplicationBarContainerProps: Omit<AplicationBarContainerProps, 'fixed' | 'open'>,
  DrawerOpen: VoidFunction,
  open: boolean;
};

const ApplicationBar: React.FC<ApplicationBarProps> = ({
  AplicationBarContainerProps,
  open,
  DrawerOpen,
}) => (
  <ApplicationBarContainer position="fixed" open={open} {...AplicationBarContainerProps}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={DrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Mini variant drawer
      </Typography>
    </Toolbar>
  </ApplicationBarContainer>
);

export default ApplicationBar;
