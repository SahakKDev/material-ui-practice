import { Grid2 as Grid, Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function GridComp() {
  return (
    <Grid
      container
      // alignItems="center"
      // justifyContent="space-between"
      sx={{
        height: '15rem',
      }}
    >
      <Grid
        container
        size={{
          xs: 12,
          md: 6,
        }}
        justifyContent="space-between"
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
      </Grid>

      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <Item>Item 3</Item>
      </Grid>

      {/* <Grid size={4}>
        <Item>size=4</Item>
      </Grid>
      <Grid size={8}>
        <Item>size=8</Item>
      </Grid> */}
    </Grid>
  );
}
