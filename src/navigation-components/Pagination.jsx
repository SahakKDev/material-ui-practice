import { Pagination, PaginationItem } from '@mui/material';
import { useState } from 'react';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import RoundaboutRightIcon from '@mui/icons-material/RoundaboutRight';

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
        return (
          <PaginationItem
            {...item}
            page={data[item.page - 1]}
            slots={{
              previous: ReplyAllIcon,
              next: RoundaboutRightIcon,
            }}
          />
        );
      }}
      page={page}
      onChange={(e, newPage) => setPage(newPage)}
      color="secondary"
      shape="rounded"
      variant="outlined"
      showFirstButton
      showLastButton
      // siblingCount={2}
      // disabled
      sx={{
        '& .MuiPaginationItem-page.Mui-selected:not(.Mui-disabled)': {
          bgcolor: 'orange',
          borderColor: '#000',
          color: '#fff',
          ':hover': {
            bgcolor: '#000',
          },
        },
      }}
    />
  );
}
