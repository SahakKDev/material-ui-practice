import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Zoom,
} from '@mui/material';
import { useState } from 'react';

export default function DialogComp() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Open Dialog</Button>
      <Dialog
        // fullScreen
        // fullWidth
        // maxWidth="md"
        slots={{
          transition: Zoom,
        }}
        slotProps={{
          transition: {
            timeout: 1000,
          },
          paper: {
            sx: {
              bgcolor: 'lightblue',
              height: '20rem',
            },
          },
        }}
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDialogTitle-root': {
            color: 'red',
            fontSize: '2rem',
            fontFamily: 'Verdana',
          },
        }}
        // scroll="body" set a lot of content to test
      >
        <DialogTitle color="primary">Are you sure?</DialogTitle>
        <DialogContent
          dividers
          sx={{
            borderWidth: '2px',
            borderColor: 'greenyellow',
          }}
        >
          <DialogContentText
            sx={{
              color: 'green',
            }}
          >
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
            You&apos;re about to delete this item, this action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'flex-start',
          }}
        >
          <Button color="error" variant="contained">
            Delete
          </Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
