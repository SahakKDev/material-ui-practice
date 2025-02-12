import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

export default function RadioGroupExample() {
  return (
    <FormControl>
      <RadioGroup
        sx={{
          '& .MuiFormControlLabel-label': {
            color: 'red',
            fontFamily: 'Verdana',
            fontSize: '1.5rem',
          },
          '& .MuiRadio-root': {
            '&.Mui-checked': {
              color: 'greenyellow',
            },
            '&.Mui-disabled': {
              color: 'grey',
            },
          },
        }}
      >
        <FormControlLabel value="first" control={<Radio />} label="First" />
        <FormControlLabel value="second" control={<Radio />} label="Second" />
        <FormControlLabel value="third" control={<Radio />} label="Third" />
      </RadioGroup>
    </FormControl>
  );
}
