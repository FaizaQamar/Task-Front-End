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

const BookDetailsEdit = () => {
  const classes = useStyles()
  const { id } = useParams();
  const { data: book, error, isPending } = useFetch('/books/'+ id);
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [dob, setDob] = useState('');
  const [dor, setDor] = useState('');
  const [sid, setSid] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author && dob && dor, sid) {
      fetch(`/books/edit/${book.b_id}`, {
        method: 'PUT',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, author, dob, dor, sid })
      }).then(() => history.push('/books'))
    } 
  }

  return (
    <div className="book-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { book && (
        <Container size="sm">
        <Typography
          variant="h6" 
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Edit Book's Data
        </Typography>
        
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField className={classes.field}
            onChange={(e) => setTitle(e.target.value)}
            value={title}            
            label={`Previous Title: ${book.title}`} 
            variant="outlined" 
            color="secondary" 
            fullWidth
            //error={titleError}
          />
          <TextField className={classes.field}
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
            
            label={`Previous Last Name: ${book.author}`} 
            variant="outlined"
            color="secondary"
            fullWidth
            //error={detailsError}
          />
          <TextField className={classes.field}
          onChange={(e) => setDob(e.target.value)}
          value={dob}
            
            label={`Previous Borrow Date: ${book.dob}`} 
            variant="outlined"
            color="secondary"
            fullWidth
            //error={detailsError}
          />

          <TextField className={classes.field}
          onChange={(e) => setDor(e.target.value)}
          value={dor}
            
            label={`Previous Borrow Date: ${book.dor}`} 
            variant="outlined"
            color="secondary"
            fullWidth
            //error={detailsError}
          />   
          <TextField className={classes.field}
          onChange={(e) => setSid(e.target.value)}
          value={sid}
            
            label={`Previous Borrow Date: ${book.s_id}`} 
            variant="outlined"
            color="secondary"
            fullWidth
            //error={detailsError}
          />      
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
 
export default BookDetailsEdit;