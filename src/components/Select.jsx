import {
  FormControl,
  FormHelperText,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  // NativeSelect,
} from '@mui/material';
import { useState } from 'react';

export default function SelectComp() {
  const [value, setValue] = useState('');
  const options = ['First', 'Second', 'Third', 'Forth', 'Fifth'];

  return (
    <FormControl
      sx={{
        minWidth: '120px',
      }}
    >
      <InputLabel
        sx={{
          color: 'black',
          fontFamily: 'Verdana',
          '&.Mui-focused': {
            color: 'green',
          },
          '&.MuiInputLabel-shrink': {
            color: 'green',
          },
        }}
        htmlFor="demo-simple-select-label"
      >
        Figute
      </InputLabel>
      {/* <NativeSelect */}
      <Select
        // variant="standard"
        // readOnly
        MenuProps={{
          slotProps: {
            paper: {
              sx: {
                bgcolor: 'pink',
                mt: '1.5rem',
              },
            },
          },
        }}
        sx={{
          bgcolor: 'lightblue',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
          },
          '&.MuiInputBase-root': {
            height: '150px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'gold',
            borderWidth: 5,
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'brown',
          },
        }}
        label="Figure"
        labelId="demo-simple-select-label"
        // inputProps={{
        //   id: 'demo-simple-select-label',
        // }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // renderValue={(o) => {
        //   return o ? `${o} option` : 'select option';
        // }}
        // displayEmpty
      >
        {/* <optgroup label="Category 1"></optgroup> */}
        <ListSubheader>Category 1</ListSubheader>
        {options.map((option) => {
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
            // <option key={option} value={option}>
            //   {option}
            // </option>
          );
        })}
        {/* </NativeSelect> */}
      </Select>
      <FormHelperText>Some text here</FormHelperText>
    </FormControl>
  );
}
