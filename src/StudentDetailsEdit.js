import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
////
import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

const StudentDetailsEdit = () => {
  const classes = useStyles()
  const { id } = useParams();
  const { data: user, error, isPending } = useFetch('/users/' + id);
  const history = useHistory();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    if (fname && lname) {
      fetch(`/users/edit/${user.s_id}`, {
        method: 'PUT',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ fname, lname })
      }).then(() => history.push('/users'))
    } 
  }

  return (
    <div className="book-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { user && (
        <Container size="sm">
        <Typography
          variant="h6" 
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Edit Student's Data
        </Typography>
        
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField className={classes.field}
            onChange={(e) => setFname(e.target.value)}
            value={fname}            
            label={`Previous First Name: ${user.fname}`} 
            variant="outlined" 
            color="secondary" 
            fullWidth
            //error={titleError}
          />
          <TextField className={classes.field}
          onChange={(e) => setLname(e.target.value)}
          value={lname}
            
            label={`Previous Last Name: ${user.lname}`} 
            variant="outlined"
            color="secondary"
            fullWidth
            //error={detailsError}
          />
  
          {/* <Radio value="hello" />
          <Radio value="goodbye" /> */}
  
          <Button
            type="submit" 
            color="secondary" 
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}>
            Submit
          </Button>
        </form>
  
        
      </Container>
      )}
    </div>
  );
}
 
export default StudentDetailsEdit;