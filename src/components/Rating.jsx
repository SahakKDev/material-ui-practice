import { Rating } from '@mui/material';
import { useState } from 'react';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';

export default function RatingComp() {
  const [value, setValue] = useState(1);
  return (
    <>
      <Rating
        // readOnly
        // disabled
        sx={{
          '& .MuiRating-iconEmpty': {
            color: 'black',
          },
          '& .MuiRating-iconFilled': {
            color: 'red',
          },
        }}
        getLabelText={() => 'asd'}
        precision={0.5}
        max={6}
        value={value}
        name="Brightness"
        // highlightSelectedOnly
        icon={<BrightnessHighIcon />}
        emptyIcon={<BrightnessLowIcon />}
        onChange={(e, newValue) => setValue(newValue)}
        // onChangeActive={(event, newHover) => {
        //   console.log(newHover);
        // }}
      />
      <span>Rate me</span>
    </>
  );
}
