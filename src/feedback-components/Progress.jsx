import { Box, Button, CircularProgress, LinearProgress } from '@mui/material';
import { useState } from 'react';

export default function ProgressComp() {
  const [loading, setLoading] = useState(false);

  return (
    <div
      style={{
        height: '500px',
        width: '100%',
      }}
    >
      <CircularProgress
        value={25}
        variant="determinate"
        thickness={10}
        disableShrink
      />
      <LinearProgress valueBuffer={80} value={60} variant="buffer" />

      <Button variant="contained" onClick={() => setLoading(!loading)}>
        {loading ? <CircularProgress color="secondary" /> : 'Click me'}
      </Button>
      <br />
      <br />
      <CircularProgress
        sx={{
          color: 'green',
          animationDuration: '10s',
          '& .MuiCircularProgress-circle': {
            animationDuration: '10s',
          },
        }}
      />
      <br />
      <br />
      <Box sx={{ width: '25rem' }}>
        <LinearProgress
          sx={{
            height: '1rem',
            bgcolor: 'red',

            '& .MuiLinearProgress-bar': {
              bgcolor: 'darkblue',
            },
          }}
        />
      </Box>
    </div>
  );
}
