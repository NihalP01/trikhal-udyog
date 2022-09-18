import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { rows } from '../data/productsData';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// const rows = [
//   // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   // createData('Eclair', 262, 16.0, 24, 6.0),
//   // createData('Cupcake', 305, 3.7, 67, 4.3),
//   // createData('Gingerbread', 356, 16.0, 49, 3.9),
//   {
//     name: 'Frozen yoghurt',
//     calories: 159,
//     fat: 45,
//     carbs: 3,
//     protein: 67,
//   },
//   {
//     name: 'Frozen Ice',
//     calories: 159,
//     fat: 420,
//     carbs: 720,
//     protein: 69,
//   },
// ];

export default function UseTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Size</StyledTableCell>
            <StyledTableCell>Micron</StyledTableCell>
            <StyledTableCell>No. of Pieces per KG</StyledTableCell>
            <StyledTableCell>Carrying Capacity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>
                {row.size}
              </StyledTableCell>
              <StyledTableCell>{row.micron}</StyledTableCell>
              <StyledTableCell>{row.noOfPeices}</StyledTableCell>
              <StyledTableCell>{row.capacity} Kg</StyledTableCell>
            </StyledTableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
