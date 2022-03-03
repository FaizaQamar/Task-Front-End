import { Link } from 'react-router-dom';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BorderColorTwoTone } from '@material-ui/icons';

const BookList = ({ books }) => {
    return (
      <div>
          <h2>Books</h2>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book </TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Borrowed By</TableCell>
            <TableCell >Date of Borrow</TableCell>
            <TableCell >Date of Return</TableCell>
            <TableCell >Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            
            <TableRow className='tr'
              key={book.b_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Link to={`/books/${book.b_id}`}>
              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
              </Link>
              <TableCell >{book.author}</TableCell>
              <TableCell >{book.s_id}</TableCell>
              <TableCell >{book.dob}</TableCell>
              <TableCell >{book.dor}</TableCell>
              <Link to={`/books/edit/${book.b_id}`}>
              <TableCell align="right"><BorderColorTwoTone /></TableCell>
              </Link>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    );
  }
   
  export default BookList;