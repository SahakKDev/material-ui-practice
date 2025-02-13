import { useState } from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
// import Battery20Icon from '@mui/icons-material/Battery20';
// import BatteryFullIcon from '@mui/icons-material/BatteryFull';
// import AppleIcon from '@mui/icons-material/Apple';

export default function CheckboxComp() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <FormControl>
      <FormGroup
        row
        sx={{
          '&.MuiFormGroup-root': {
            '& .MuiFormControlLabel-root': {
              '& .MuiSvgIcon-root': {
                fontSize: 40,
              },
              color: 'red',

              '& .MuiCheckbox-root': {
                '&.Mui-checked': {
                  color: 'green',
                },
                '&.Mui-disabled': {
                  color: 'black',
                },
              },
            },
          },
        }}
      >
        <FormControlLabel
          label="First Value"
          // labelPlacement="start"
          // sx={{
          //   '& .MuiTypography-root': {
          //     color: 'red',
          //     fontSize: '2rem',
          //   },
          // }}
          control={
            <Checkbox
              disabled
              disableRipple
              inputprops={{ 'aria-label': 'Checkbox 1' }}
              checked={checked}
              aria-label="asd"
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
              // sx={{
              //   '& .MuiSvgIcon-root': {
              //     fontSize: 40,
              //   },
              //   color: 'red',

              //   '&.Mui-checked': {
              //     color: 'green',
              //   },
              //   '&.Mui-disabled': {
              //     color: 'black',
              //   },
              // }}
              // checkedIcon={<BatteryFullIcon />}
              // icon={<Battery20Icon />}
              // indeterminate
              // indeterminateIcon={<AppleIcon />}
            />
          }
        />
        <FormControlLabel
          label="My Second Value"
          // labelPlacement="start"
          control={
            <Checkbox
              checked={checked2}
              onChange={(e) => {
                setChecked2(e.target.checked);
              }}
            />
          }
        />
        <FormControlLabel
          label="My Second Value"
          // labelPlacement="start"
          control={
            <Checkbox
              checked={checked3}
              onChange={(e) => {
                setChecked3(e.target.checked);
              }}
            />
          }
        />
      </FormGroup>
    </FormControl>
  );
}
