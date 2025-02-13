import { Button, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ButtonComp() {
  return (
    <>
      <Button
        onClick={() => console.log('clicked')}
        sx={{
          color: '#000',
          borderWidth: 2,
          borderRadius: 0,
          ':hover': {
            bgcolor: 'pink',
          },
          '&.Mui-disabled': {
            backgroundColor: 'black',
            color: '#fff',
          },
        }}
        disableElevation
        disableRipple
        variant="outlined"
        size="large"
        color="secondary"
        endIcon={<ArrowForwardIcon />}
        // component="a"
        // href="https://google.com"
        // target="_blank"
        // disabled
      >
        Publish
      </Button>

      <IconButton disableRipple color="secondary">
        <ArrowForwardIcon />
      </IconButton>
    </>
  );
}
