import { Autocomplete, svgIconClasses, TextField } from '@mui/material';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppleIcon from '@mui/icons-material/Apple';

const textStyles = {
  color: '#fff',
  fontSize: '1rem',
  fontFamily: 'Verdana',
};

export default function AutocompleteComp() {
  const [value, setValue] = useState([]);
  const options = [
    { name: 'Apple', year: 2022 },
    { name: 'Banana', year: 2020 },
    { name: 'Pear', year: 2020 },
    { name: 'Orange', year: 2022 },
  ];

  return (
    <Autocomplete
      sx={{
        width: '15rem',
        bgcolor: 'lightblue',
        '& .MuiInputBase-input': {
          // height: '5rem',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'red',
          borderRadius: 0,
          borderWidth: 2,
        },
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'blue',
          },
        },
        '& .MuiAutocomplete-clearIndicator .MuiSvgIcon-root': {
          fill: 'red',
        },
        '& .MuiAutocomplete-popupIndicator': {
          '& svg': {
            fill: 'blue',
          },
        },
        '& .MuiFormLabel-root': {
          color: 'purple',
          fontSize: '1rem',
          fontFamily: 'Verdana',
          '&.Mui-focused': {
            color: 'green',
          },
        },
      }}
      slotProps={{
        paper: {
          sx: {
            bgcolor: 'purple',
            '.MuiAutocomplete-option': {
              ...textStyles,
              borderBottom: '1px solid #fff',
            },
            '& .MuiListSubheader-root': {
              bgcolor: 'black',
              color: '#fff',
            },
          },
        },
        chip: {
          sx: {
            bgcolor: 'blue',
            [`& .${svgIconClasses.root}`]: {
              color: '#fff',
            },
          },
          deleteIcon: <AppleIcon />,
        },
      }}
      groupBy={(option) => option.year}
      noOptionsText={<span style={textStyles}>Custom Response</span>}
      popupIcon={<AppleIcon />}
      clearIcon={<AccountCircleIcon />}
      multiple
      options={options
        .map((option) => ({ ...option }))
        .sort((a, b) => a.year - b.year)}
      getOptionLabel={(option) => {
        return typeof option === 'object'
          ? `${option.name} - ${option.year}`
          : option;
      }}
      value={value}
      onChange={(e, newValue) => {
        console.log(newValue);
        setValue(newValue);
      }}
      // onBlur={(e) => {
      //   e.target.value !== value ? setValue(e.target.value) : [];
      // }}
      renderInput={(params) => <TextField {...params} label="Fruit" />}
    />
  );
}
