import Book from 'components/Book';
import Form from 'components/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from 'redux/books/booksSlice';

const Books = () => {
  const { books } = useSelector((store) => store.book);
  const bookItems = Object.keys(books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <h2>Books</h2>
      <ul>
        {
          bookItems.map((item) => {
            const book = books[item][0];
            return (
              <Book
                key={item}
                title={book.title}
                author={book.author}
                id={item}
              />
            );
          })
        }
      </ul>
      <h2>Form</h2>
      <Form />
    </>
  );
};

export default Books;
