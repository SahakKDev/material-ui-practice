import { Box, Typography } from '@mui/material';

// Put this in main.jsx file
// const theme = createTheme({
//   typography: {
//     h6: {
//       color: '#fff',
//       fontFamily: 'Verdana',
//       fontSize: '1rem',
//     },
//     blueText: {
//       color: 'blue',
//       fontSize: '2rem',
//       fontFamily: 'Verdana',
//     },
//   },
//   components: {
//     MuiTypography: {
//       defaultProps: {
//         variantMapping: {
//           h6: 'h3',
//           blueText: 'h6',
//         },
//       },
//     },
//   },
// });

export default function TypographyComp() {
  return (
    <Box sx={{ textAlign: 'center', mt: '1rem' }}>
      <div style={{ backgroundColor: 'red', width: '15rem', height: '2rem' }}>
        <Typography
          gutterBottom
          variant="h6"
          // variantMapping={{ h6: 'h1' }}
          noWrap
        >
          HelloHelloHelloHelloHelloHelloHello
        </Typography>
      </div>
      <Typography variant="blueText">
        Some text which is overrided from theme
      </Typography>
    </Box>
  );
}
