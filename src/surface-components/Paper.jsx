import { Box, Paper } from '@mui/material';

export default function PaperComp() {
  return (
    <Box margin={5}>
      <Paper elevation={8} square sx={{ maxWidth: 500, p: '5rem' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo explicabo
        suscipit voluptatum aut eaque fugit delectus est eos consequuntur
        cupiditate, quis odit repudiandae commodi veniam, eum placeat libero.
        Minus ratione magni natus non laboriosam expedita ex accusantium
        exercitationem sunt, eius laborum eaque sed placeat facilis deleniti qui
        voluptas, nulla optio.
      </Paper>
    </Box>
  );
}
