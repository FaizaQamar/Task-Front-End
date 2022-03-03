
import React from 'react';
import Navbar from './navbar';
import Books from './books';
import Students from './students';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './Layout';
import StudentDetailsEdit from './StudentDetailsEdit';
import BookDetailsEdit from './BookDetailsEdit';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App(){
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
    <div className="App">      
     <div className="content">
       <Switch>
         <Route exact path='/books'>
            <Books />
         </Route>
         <Route path='/books/edit/:id'>
           <BookDetailsEdit />
         </Route>
         <Route path='/users/edit/:id'>
           <StudentDetailsEdit />
         </Route>
         <Route path='/users'>
            <Students />
         </Route>
       </Switch>
     
     </div>
    </div>
    </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
