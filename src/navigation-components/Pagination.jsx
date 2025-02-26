import { Pagination, PaginationItem } from '@mui/material';
import { useState } from 'react';

export default function PaginationComp() {
  const [page, setPage] = useState(1);
  const data = [
    'Article 1',
    'Article 2',
    'Article 3',
    'Article 4',
    'Article 5',
  ];

  return (
    <Pagination
      count={5}
      renderItem={(item) => {
        return <PaginationItem {...item} page={data[item.page - 1]} />;
      }}
      page={page}
      onChange={(e, newPage) => setPage(newPage)}
      color="secondary"
      shape="rounded"
      variant="outlined"
      showFirstButton
      showLastButton
      siblingCount={2}
    />
  );
}
