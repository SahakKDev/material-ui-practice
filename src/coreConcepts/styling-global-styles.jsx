import Button from '@mui/material/Button';

// Past this in root component and wrap App with ThemeProvider
// const theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         text: {
//           color: 'blue',
//           backgroundColor: 'red',
//           borderRadius: 50,
//           width: '10rem',
//           height: '5rem',
//         },
//       },
//     },
//   },
// });

function App() {
  return (
    <div>
      <Button
        sx={{
          typography: 'blueTextClass',
        }}
        variant="text"
      >
        Contained
      </Button>
    </div>
  );
}

export default App;
