import { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
// import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
// import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

export default function RadioComp() {
  const [value, setValue] = useState('');

  return (
    <FormControl>
      <RadioGroup
        // row
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <FormControlLabel
          value="first"
          control={
            <Radio
              size="small"
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 25,
                },
                color: 'red',
                '&.Mui-checked': {
                  color: 'green',
                },
              }}
              color="secondary"
              // icon={<BrightnessLowIcon />}
              // checkedIcon={<BrightnessHighIcon />}
            />
          }
          label="First"
        />
        <FormControlLabel
          value="second"
          control={<Radio size="small" color="secondary" />}
          label="Second"
        />
        <FormControlLabel
          value="third"
          control={<Radio size="small" color="secondary" />}
          label="Third"
        />
      </RadioGroup>
    </FormControl>
  );
}
