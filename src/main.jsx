import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008000',
    },
    secondary: {
      main: '#ffa500',
    },
    customColors: {
      royalBlue: '#4169e1',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        outlined: ({ theme, ownerState }) => ({
          color: ownerState.mycustom
            ? 'red'
            : theme.palette.customColors.royalBlue,
        }),
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
