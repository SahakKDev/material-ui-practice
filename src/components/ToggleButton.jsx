import { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

export default function ToggleButtonComp() {
  const [alignment, setAlignment] = useState(['low']);

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={(e, newValue) => setAlignment(newValue)}
      sx={{
        bgcolor: 'green',
        '& button': {
          borderColor: 'red',
        },
        '& button.Mui-selected': {
          bgcolor: 'pink',
        },
        '& button:hover.Mui-selected': {
          bgcolor: 'pink',
        },
        '& button:hover:not(.Mui-selected)': {
          bgcolor: 'red',
        },
        '& button > svg': {
          fill: 'burlywood',
        },
      }}
    >
      <ToggleButton value="low">
        <BrightnessLowIcon />
      </ToggleButton>
      <ToggleButton value="high">
        <BrightnessHighIcon />
      </ToggleButton>
      <ToggleButton value="auto">
        <BrightnessAutoIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
