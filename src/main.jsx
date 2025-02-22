import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@mui/material';
import './style.css';

const theme = createTheme({
  typography: {
    h6: {
      color: '#fff',
      fontFamily: 'Verdana',
      fontSize: '1rem',
    },
    blueText: {
      color: 'blue',
      fontSize: '2rem',
      fontFamily: 'Verdana',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h6: 'h3',
          blueText: 'h6',
        },
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
