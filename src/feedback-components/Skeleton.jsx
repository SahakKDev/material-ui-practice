import { Skeleton } from '@mui/material';

export default function SkeletonComp() {
  const div = (
    <div
      style={{ width: '8rem', height: '8rem', backgroundColor: 'red' }}
    ></div>
  );

  return (
    <div>
      <Skeleton
        variant="circular"
        animation="wave"
        width={'5rem'}
        height={'5rem'}
        sx={{
          backgroundColor: 'rgba(255,0,0,0.25)',
        }}
      />
      <Skeleton width={'5rem'} />

      <Skeleton variant="rectangular">{div}</Skeleton>
    </div>
  );
}
