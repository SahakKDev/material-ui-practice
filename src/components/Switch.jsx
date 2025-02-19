import { FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';

export default function SwitchComp() {
  const [checked, setChecked] = useState(false);

  return (
    <FormControlLabel
      control={
        <Switch
          value={checked}
          onChange={(event) => setChecked(event.target.checked)}
          sx={{
            '& :not(.Mui-checked)': {
              '& .MuiSwitch-thumb': {
                color: 'red',
              },

              '&.MuiSwitch-track': {
                bgcolor: 'red',
              },
            },
          }}
        />
      }
      label="My Switch"
    />
  );
}
