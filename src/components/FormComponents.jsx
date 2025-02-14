import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material';

export default function FormComponents() {
  return (
    <FormControl
      sx={{
        // '& > *': {
        //   color: 'blue',
        // },
        '& .Mui-error': {
          color: 'orange',
        },
        '& .MuiFormControlLabel-label': {
          color: 'purple',
        },
      }}
      error
    >
      <FormLabel
        sx={{
          '&.Mui-focused': {
            color: 'red',
          },
          // '&.Mui-error': {
          //   color: 'orange',
          //   '& .Mui-error': {
          //     color: 'orange',
          //   },
          // },
          color: 'blue',
        }}
        required
      >
        My Form
      </FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="My Value 1" />
        <FormControlLabel control={<Checkbox />} label="My Value 2" />
        <FormControlLabel control={<Checkbox />} label="My Value 3" />
        <FormControlLabel control={<Checkbox />} label="My Value 4" />
      </FormGroup>
      <FormHelperText
        sx={{
          color: 'green',
        }}
      >
        Please select a value
      </FormHelperText>
    </FormControl>
  );
}
