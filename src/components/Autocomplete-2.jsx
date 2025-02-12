import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

export default function AutocompleteComp() {
  const [value, setValue] = useState(null);
  const options = [
    { name: 'Apple', year: 2022 },
    { name: 'Banana', year: 2020 },
    { name: 'Pear', year: 2020 },
    { name: 'Orange', year: 2022 },
  ];

  return (
    <Autocomplete
      // renderOption={(props, option) => {
      //   return (
      //     <div
      //       {...props}
      //       key={props.key}
      //       style={{
      //         backgroundColor: option.label.toLowerCase().includes('p')
      //           ? 'red'
      //           : undefined,
      //       }}
      //     >
      //       {option.label}
      //     </div>
      //   );
      // }}
      // groupBy={(option) => option.year}
      // getOptionDisabled={(option) => option.year !== 2020}
      // limitTags={2}
      // multiple
      options={options
        .map((option) => ({ ...option }))
        .sort((a, b) => a.year - b.year)}
      getOptionLabel={(option) => {
        return typeof option === 'object'
          ? `${option.name} - ${option.year}`
          : option;
      }}
      // size="small"
      value={value}
      freeSolo
      onChange={(e, newValue) => setValue(newValue)}
      onBlur={(e) =>
        e.target.value !== value ? setValue(e.target.value) : null
      }
      renderInput={(params) => <TextField {...params} label="Fruit" />}
    />
  );
}
