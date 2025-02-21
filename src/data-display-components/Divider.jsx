import { Box, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function DividerComp() {
  return (
    <div>
      <h1>Some text</h1>
      <Divider
        variant="middle"
        textAlign="right"
        variant="inset"
        sx={{
          '&:before': {
            borderColor: 'red',
            borderWidth: 2,
            borderStyle: 'dashed',
          },
          '&:after': {
            borderColor: 'red',
            borderWidth: 2,
            borderStyle: 'dashed',
          },
        }}
      >
        My Divider
      </Divider>
      <h2>Start editing</h2>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '10rem',
          width: '10rem',
          bgcolor: 'lightblue',
        }}
      >
        <AddIcon />
        <Divider
          sx={{
            // with child element
            // '&:before': {
            //   height: '100%',
            // },
            // '&:after': {
            //   height: '2rem',
            // },
            // justifyContent: 'center',
            // '& .MuiDivider-wrapper': {
            //   color: '#fff',
            //   fontFamily: 'Verdana',
            //   fontSize: '1.5rem',
            //   padding: 0,
            // },
            // without child element
            height: 'auto',
            marginTop: '2rem',
            borderColor: 'red',
            borderWidth: 2,
            borderStyle: 'dashed',
          }}
          orientation="vertical"
          flexItem
          variant="middle"
        >
          {/* x */}
        </Divider>
        <RemoveIcon />
      </Box>
    </div>
  );
}
