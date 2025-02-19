import { TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function TextFieldComp() {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="First Name"
      placeholder="Enter your first name"
      // error={value.length < 4}
      helperText={value.length < 4 ? 'Enter your first name' : ''}
      // multiline
      // maxRows={3}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment onClick={() => setVisible(!visible)}>
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </InputAdornment>
          ),
          sx: {
            bgcolor: 'lightblue',
            fontFamily: 'Verdana',
            color: '#000',
            '& .MuiInputBase-input::placeholder': {
              color: 'darkorange',
              opacity: 1,
              fontSize: '1rem',
              fontFamily: 'Verdana',
            },
          },
        },
      }}
      required
      sx={{
        '& .MuiInputAdornment-root': {
          marginLeft: '10px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'blue',
          borderWidth: '5px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'green !important',
        },
        '& .MuiFormLabel-root.MuiInputLabel-shrink': {
          color: 'brown',
        },
        '& svg': {
          color: 'red',
        },
        '& .MuiFormLabel-asterisk': {
          color: 'yellow',
        },
      }}
    />
  );
}
