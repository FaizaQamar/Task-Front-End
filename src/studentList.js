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


const StudentList = ({ students }) => {
    return (
      <div className="book-preview">
          <h2>Students</h2>
          
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            
            <TableRow className='tr'
              key={student.s_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Link to={`/users/${student.s_id}`}>
              <TableCell>{student.fname}</TableCell>
              </Link>
              <TableCell>{student.lname}</TableCell>
              <Link to={`/users/edit/${student.s_id}`}>
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
   
  export default StudentList;