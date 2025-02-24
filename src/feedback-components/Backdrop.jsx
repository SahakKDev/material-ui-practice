import { useState } from 'react';
import { Backdrop, Box, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function BackdropComp() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        // sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
