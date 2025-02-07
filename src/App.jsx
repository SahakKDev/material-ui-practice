import { Checkbox, styled } from '@mui/material';
import Button from '@mui/material/Button';

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
