import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Box,
} from '@mui/material';
import { useState } from 'react';

export default function TableComp() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  function createData(date, total, status) {
    return { date, total, status };
  }

  const rows = [
    createData(new Date(), 9.99, 'processing'),
    createData(new Date('February 1 2025'), 19.99, 'shipping'),
    createData(new Date('December 1 2024'), 29.99, 'delivered'),
    createData(new Date(), 9.99, 'processing'),
    createData(new Date('February 1 2025'), 19.99, 'shipping'),
    createData(new Date('December 1 2024'), 29.99, 'delivered'),
    createData(new Date(), 9.99, 'processing'),
    createData(new Date('February 1 2025'), 19.99, 'shipping'),
    createData(new Date('December 1 2024'), 29.99, 'delivered'),
    createData(new Date(), 9.99, 'processing'),
    createData(new Date('February 1 2025'), 19.99, 'shipping'),
    createData(new Date('December 1 2024'), 29.99, 'delivered'),
    createData(new Date(), 9.99, 'processing'),
    createData(new Date('February 1 2025'), 19.99, 'shipping'),
    createData(new Date('December 1 2024'), 29.99, 'delivered'),
    createData(new Date(), 9.99, 'processing'),
    createData(new Date('February 1 2025'), 19.99, 'shipping'),
    createData(new Date('December 1 2024'), 29.99, 'delivered'),
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table
          //  stickyHeader
          sx={{ minWidth: 650 }}
        >
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} align="center">
                Order History
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              // .slice(rowsPerPage * page, rowsPerPage * page + rowsPerPage)
              .map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      day: '2-digit',
                      month: '2-digit',
                    }).format(row.date)}
                  </TableCell>
                  <TableCell>{row.total}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            {/* <TableRow>
              <TableCell rowSpan={3} />
              <TableCell>Total orders</TableCell>
              <TableCell>{rows.length}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Cost</TableCell>
              <TableCell>
                {rows.reduce((acc, cur) => acc + cur.total, 0).toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Delivered orders</TableCell>
              <TableCell>
                {rows.reduce(
                  (acc, cur) => (cur.status === 'delivered' ? acc + 1 : acc),
                  0,
                )}
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
