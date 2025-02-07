// import { styled } from '@mui/material';
import Button from '@mui/material/Button';

// export const MyStyledButton = styled(Button)({
//   color: 'red',
//   backgroundColor: 'blue',
//   borderRadius: 10,
//   padding: 8,
// });

// export const MyStyledButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.primary.main,
//   backgroundColor: theme.palette.secondary.main,
//   borderRadius: 10,
//   padding: 8,
// }));

// const MyReusableComp = (props) => {
//   return (
//     <Button
//       sx={{
//         color: props.color,
//         bgcolor: props.color === '#fff' ? '#000' : 'blue',
//       }}
//     >
//       {props.children}
//     </Button>
//   );
// };

const blueTextClass = { color: 'blue', bgcolor: 'red', borderRadius: 8 };

function App() {
  return (
    <div>
      <Button sx={{ ...blueTextClass }} variant="contained">
        Contained
      </Button>

      {/* <MyStyledButton>I'm styled!</MyStyledButton> */}
      {/* <MyReusableComp color="#fff">Resusable</MyReusableComp> */}
    </div>
  );
}

export default App;
