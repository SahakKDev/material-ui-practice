import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

export default function AppBarComp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
      // sx={{ top: 'auto', bottom: 0 }}
      >
        <Toolbar
          variant="dense"
          sx={{ justifyContent: 'space-between', gap: '5rem', height: '5rem' }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '20rem',
            }}
          >
            <Button color="inherit">Btn 1</Button>
            <Button color="inherit">Btn 2</Button>
            <Button color="inherit">Btn 3</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mt: '2rem' }} />
      <h1>Hello world</h1>
      <div style={{ height: '150rem' }}></div>
    </Box>
  );
}
