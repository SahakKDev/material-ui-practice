import { Container } from '@mui/material';

export default function ContainerComp() {
  return (
    <Container
      sx={{ bgcolor: 'lightblue' }}
      maxWidth={false}
      fixed
      disableGutters
    >
      <h1>Lorem, ipsum.</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </Container>
  );
}
