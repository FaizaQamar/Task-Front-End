import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
    return (
      <div className="book-list">
          <h2>Books</h2>
        {books.map(book => (            
          <div className="book-preview" key={book.b_id} >
              <Link to={`/books/${book.b_id}`}>
            <h2>{ book.title }</h2>
            <p>Written by { book.author }</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default BookList;