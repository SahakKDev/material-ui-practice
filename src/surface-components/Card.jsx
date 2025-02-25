import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from '@mui/material';

export default function CardComp() {
  return (
    <Card sx={{ width: '33rem' }} raised>
      <CardActionArea
        component="a"
        onClick={() => console.log('Clicked me')}
        sx={{
          '& .MuiTouchRipple-root': {
            color: 'lightblue',
          },
        }}
      >
        <CardHeader
          avatar={<Avatar>Z</Avatar>}
          action={
            <Button
              sx={{ position: 'relative' }}
              variant="contained"
              onMouseDown={(event) => event.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                console.log('clicked on button');
              }}
            >
              Learn more
            </Button>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300"
          image="https://lh5.googleusercontent.com/p/AF1QipOhlFBr8rkkhucqM_fS4fRSND5QVh3rwdWHx2qx=w260-h175-n-k-no"
          alt="Paella dish"
        />
        <CardContent>Here is the main body of my card!</CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button variant="contained">Confirm</Button>
        <Button>Cancel</Button>
      </CardActions>
    </Card>
  );
}
