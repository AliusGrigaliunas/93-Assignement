import {
  styled, CSSObject, Theme,
} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

export type DrawerProps = {
  drawerWidth: number,
  openMix: (theme:Theme) => CSSObject,
  closeMix: (theme:Theme) => CSSObject,
};

const Drawer = styled(
  MuiDrawer,
  { shouldForwardProp: (prop) => prop !== 'open' },
)<DrawerProps>(
  ({
    theme, open, drawerWidth, openMix, closeMix,
  }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openMix(theme),
      '& .MuiDrawer-paper': openMix(theme),
    }),
    ...(!open && {
      ...closeMix(theme),
      '& .MuiDrawer-paper': closeMix(theme),
    }),
  }),
);

export default Drawer;
