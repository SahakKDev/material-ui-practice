import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  // components: {
  //   MuiAvatarGroup: {
  //     styleOverrides: {
  //       root: {
  //         '& .MuiAvatarGroup-avatar': {
  //           backgroundColor: 'blue',
  //         },
  //       },
  //     },
  //   },
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         '&.Mui-disabled': {
  //           backgroundColor: 'red',
  //         },
  //       },
  //     },
  //   },
  // },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
