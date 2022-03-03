import { Link } from 'react-router-dom';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StudentList = ({ students }) => {
    return (
      <div className="book-list">
          <h2>Last Name</h2>
        {students.map(student => (
          <div className="book-preview" key={student.s_id} >
            <Link to={`/users/${student.s_id}`}>
            <h2>{ student.fname }</h2>
            <p>Written by { student.lname }</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default StudentList;