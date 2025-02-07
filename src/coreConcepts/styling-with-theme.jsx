import { Checkbox, styled, useTheme } from '@mui/material';
import Button from '@mui/material/Button';

//Move this to root component and wrap App with ThemeProvider
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#008000',
//     },
//     secondary: {
//       main: '#ffa500',
//     },
//     customColors: {
//       royalBlue: '#4169e1',
//     },
//   },
//   components: {
//     MuiButton: {
//       defaultProps: {
//         disableRipple: true,
//       },
//       styleOverrides: {
//         outlined: ({ theme, ownerState }) => ({
//           color: ownerState.mycustom
//             ? 'red'
//             : theme.palette.customColors.royalBlue,
//         }),
//       },
//     },
//   },
// });

const CustomButton = styled(Button)(({ theme }) => {
  return theme.unstable_sx({
    backgroundColor: theme.palette.customColors?.royalBlue,
    boxShadow: theme.shadows[15],
    mb: {
      xs: 4,
      md: 2,
      lg: 1,
      xl: 0,
    },
  });
});

function App() {
  const theme = useTheme();

  console.log(theme);
  return (
    <div>
      <CustomButton variant="text">Contained</CustomButton>
      <Button variant="outlined" mycustom="true">
        My Button
      </Button>
      <div>Some extra text</div>
      <Checkbox color="secondary" />
    </div>
  );
}

export default App;
