import { Button, ButtonGroup } from '@mui/material';

export default function ButtonGroupComp() {
  return (
    <ButtonGroup
      disableElevation
      variant="outlined"
      // color="error"
      sx={{
        '& .MuiButtonBase-root': {
          borderColor: 'red',
          borderWidth: 3,
          ':hover': {
            bgcolor: 'greenyellow',
            color: '#000',
            borderColor: 'green',
          },
        },
      }}
    >
      <Button>One</Button>
      <Button>Two</Button>
      {/* <ButtonGroup orientation="vertical">
        <Button>Two-1</Button>
        <Button>Two-2</Button>
      </ButtonGroup> */}
      <Button>Three</Button>
      <Button>Four</Button>
      <Button>Five</Button>
    </ButtonGroup>
  );
}
