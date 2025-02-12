import { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

export default function AutoCompleteExample() {
  const [value, setValue] = useState([]);
  const options = ['Apple', 'Banana', 'Pear', 'Orange'];

  return (
    <Autocomplete
      multiple
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      options={options}
      renderInput={(params) => <TextField {...params} label="Fruit" />}
      slotProps={{
        chip: {
          sx: {
            bgcolor: 'green',
            '& .MuiChip-label': {
              color: '#fff',
              fontFamily: 'Verdana',
              fontSize: '1.5rem',
            },
          },
        },
        paper: {
          sx: {
            bgcolor: 'purple',
            '& .MuiAutocomplete-option': {
              color: '#fff',
              fontFamily: 'Verdana',
              fontSize: '1rem',
            },
          },
        },
      }}
    />
  );
}
