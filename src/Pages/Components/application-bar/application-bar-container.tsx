import {
  AppBar,
  AppBarProps,
  styled,
} from '@mui/material';

export type AplicationBarContainerProps = AppBarProps & {
  open?: boolean;
  drawerWidth:number;
};

const ApplicationBarContainer = styled(AppBar, {
})<AplicationBarContainerProps>(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default ApplicationBarContainer;
