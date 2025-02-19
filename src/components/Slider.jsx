import { Slider, Box } from '@mui/material';
import { useState } from 'react';

export default function SliderComp() {
  // const [value, setValue] = useState(10);
  const [value, setValue] = useState([10, 30]);
  const marks = [
    { label: 'very dissatisfiled', value: 10 },
    { label: 'dissatisfied', value: 30 },
    { label: 'neutral', value: 50 },
    { label: 'very satisfiled', value: 90 },
  ];

  return (
    <Box sx={{ height: '30rem', mt: '3rem' }}>
      <Slider
        // disabled
        sx={{
          '&.Mui-disabled': {
            color: 'gray',
          },
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
          },
          color: 'red',
          height: 20,
          '&:not(.Mui-disabled) .MuiSlider-rail': {
            color: '#080',
            opacity: 1,
            height: 10,
          },
          '& .MuiSlider-mark': {
            width: 5,
            height: 10,
            borderRadius: 0,
          },
          '& .MuiSlider-markActive': {
            bgcolor: 'blue',
            height: 20,
          },
          '& :not(.MuiSlider-markActive).MuiSlider-mark': {
            bgcolor: 'white',
            fontSize: 30,
          },
          '& .MuiSlider-thumb[data-index="0"]': {
            bgcolor: 'purple',
            height: 50,
            width: 50,
          },
          '& .MuiSlider-thumb[data-index="1"]': {
            bgcolor: 'pink',
            height: 50,
            width: 50,
          },
          '&:not(.Mui-disabled) .MuiSlider-track': {
            bgcolor: 'yellow',
          },
        }}
        // disabled
        valueLabelDisplay="auto"
        disableSwap
        // track="inverted" // false
        // orientation="vertical"
        step={10} // null
        scale={(value) => 2 * value}
        min={10}
        max={90}
        color="secondary"
        marks={marks}
        size="small"
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />
    </Box>
  );
}
