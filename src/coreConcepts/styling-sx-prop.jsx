import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <Button
        sx={{
          bgcolor: 'green',
          typography: 'h6',
          margin: 2,
          borderStyle: 'solid',
          borderWidth: 5,
          borderColor: (theme) => theme.palette.success.dark,
        }}
        color="secondary"
        variant="contained"
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
