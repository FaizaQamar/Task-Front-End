import BookList from "./bookList";
import useFetch from "./useFetch";

const Books = () => {
  const { error, isPending, data: books } = useFetch('/books')

  return (
    <div className="books">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { books && <BookList books={books} /> }
    </div>
  );
}
export default Books;