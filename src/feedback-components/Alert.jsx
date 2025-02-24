import {
  Alert,
  AlertTitle,
  // Button,
  Collapse,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

export default function AlertComp() {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Alert
        variant="filled"
        severity="error"
        color="secondary"
        // action={<Button variant="contained">Del</Button>}
        onClose={() => {
          console.log('close');
          setOpen(false);
        }}
        icon={<CheckIcon fontSize="inherit" />}
        sx={{
          width: '30rem',
          height: '10rem',
          fontSize: '1.5rem',
          fontFamily: 'Verdana',
          color: '#000',
          bgcolor: 'orange',
        }}
      >
        <AlertTitle sx={{ color: '#fff', fontFamily: 'Verdana' }}>
          My Alert
        </AlertTitle>
        Something went wrong!
      </Alert>
    </Collapse>
  );
}
