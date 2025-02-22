import { Box, Button, Fade, Tooltip, Zoom } from '@mui/material';
import { useState } from 'react';

function MyButton({ ...props }) {
  return <button {...props}>Custom button</button>;
}

export default function TooltipComp() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ margin: '4rem' }}>
      <Tooltip
        open
        // open={open}
        // onOpen={() => setOpen(false)}
        // onClose={() => setOpen(false)}
        disableFocusListener
        // disableInteractive
        // followCursor
        // enterDelay={2000}
        title="Create a new entry"
        placement="top"
        arrow
        // slots={{
        //   transition: Zoom,
        // }}
        // slotProps={{
        //   transition: {
        //     timeout: 600,
        //   },
        // }}
      >
        <Button onBlur={() => setOpen(false)} onClick={() => setOpen(true)}>
          Create
        </Button>
      </Tooltip>

      <Tooltip
        slotProps={{
          tooltip: {
            sx: {
              maxWidth: 200, // 'none',
              padding: '15px',
            },
          },
        }}
        title={<MyButton />} // "Custom title"
      >
        <MyButton />
      </Tooltip>
    </Box>
  );
}
