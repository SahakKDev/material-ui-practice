import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButton() {
  return (
    <Fab
      disableRipple
      variant="extended"
      size="medium"
      // color="warning"
      sx={{
        bgcolor: 'green',
        color: '#fff',
        fontSize: '2rem',
        fontFamily: 'Verdana',
        ':hover': {
          bgcolor: 'pink',
          color: '#000',
        },
      }}
    >
      <AddIcon />
      New User
    </Fab>
  );
}
