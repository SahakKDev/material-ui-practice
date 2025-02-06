import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState();

  return (
    <div>
      <Button
        sx={[
          {
            typography: 'h6',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: (theme) => theme.palette.success.dark,
            width: 1,
            maxWidth: 'xl',
            borderRadius: 2,
            bgcolor: { xs: 'green', sm: 'purple' },
            boxShadow: 20,
            '&:hover': {
              bgcolor: 'blue',
            },
            // '&:not(.Mui-disabled)': {
            //   bgcolor: 'red',
            // },
            '& > p,h5': {
              color: 'error.main',
            },
          },
          open && {
            bgcolor: 'red',
            fontSize: '2rem',
          },
        ]}
        color="secondary"
        variant="contained"
        onClick={() => setOpen(!open)}
      >
        My Button
        <p>My paragraph</p>
        <h5>My h5 text</h5>
      </Button>
    </div>
  );
}

export default App;
