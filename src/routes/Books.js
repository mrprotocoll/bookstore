import Book from 'components/Book';
import Form from 'components/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from 'redux/books/booksSlice';

const Books = () => {
  const { books } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <h2>Books</h2>
      <ul>
        {
          books.map((book) => (
            <Book
              key={book.item_id}
              title={book.title}
              author={book.author}
              id={book.item_id}
            />
          ))
        }
      </ul>
      <h2>Form</h2>
      <Form />
    </>
  );
};

export default Books;
