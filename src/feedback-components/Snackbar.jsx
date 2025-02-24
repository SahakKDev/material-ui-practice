import { Button, Snackbar, Zoom } from '@mui/material';
import { useState } from 'react';

export default function SnackbarComp() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Snackbar</Button>
      <Snackbar
        open={true}
        message="Note archived"
        onClose={() => setOpen(false)}
        autoHideDuration={4000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        TransitionComponent={Zoom}
        sx={{
          bgcolor: 'transparent',
          '& .MuiPaper-root': {
            color: 'blue',
            bgcolor: 'red',
          },
        }}
        action={
          <Button onClick={() => setOpen(false)} variant="contained">
            Undo
          </Button>
        }
      />
    </div>
  );
}
