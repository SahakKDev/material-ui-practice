import { Breadcrumbs, Link, Typography } from '@mui/material';

export default function BreadcrumbsComp() {
  return (
    <Breadcrumbs
      // separator="-"
      maxItems={2}
      sx={{
        '& .MuiBreadcrumbs-separator': {
          color: 'purple',
          fontSize: '1.5rem',
        },
        '& .MuiLink-root': {
          color: 'green',
        },
        '& button[aria-label="Show path"]': {
          bgcolor: 'red',
          color: 'yellow',
        },
      }}
    >
      <Link underline="hover" href="g/shopping">
        Shopping
      </Link>
      <Link underline="hover" href="/shopping/apparel">
        Apparel
      </Link>
      <Link underline="hover" href="/shopping/apparel/hats">
        Hats
      </Link>
      <Typography variant="body1">All</Typography>
    </Breadcrumbs>
  );
}
