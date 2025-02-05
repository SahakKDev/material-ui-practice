import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const MySpecialBox = (props) => {
  return (
    <Box>
      label: {props.label}
      {props.children}
    </Box>
  );
};

function App() {
  return (
    <div>
      <Button
        sx={{ bgcolor: 'green' }}
        variant="contained"
        onClick={() => console.log('Clicked me')}
        disableElevation
      >
        My Button
      </Button>
      <MySpecialBox label="Special Box">
        <Button variant="contained">My Box</Button>
      </MySpecialBox>
    </div>
  );
}

export default App;
