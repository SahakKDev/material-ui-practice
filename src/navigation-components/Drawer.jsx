import { Box, Button, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 200;

const iOS =
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function DrawerComp() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiPaper-root': {
            width: drawerWidth,
          },
        }}
        // anchor="right"
        open={open}
        onClose={handleClose}
        ModalProps={{
          keepMounted: false,
        }}
      >
        <ul>
          <li onClick={handleClose}>First</li>
          <li onClick={handleClose}>Second</li>
          <li onClick={handleClose}>Third</li>
        </ul>
      </SwipeableDrawer>
      <Box
        sx={{
          flexGrow: 1,
          ml: open ? `${drawerWidth}px` : 0,
          transition: 'all 0.25s ease',
        }}
      >
        <h1>Lorem, ipsum dolor.</h1>
        <Button onClick={() => setOpen(!open)}>Open Drawer</Button>
      </Box>
    </div>
  );
}
