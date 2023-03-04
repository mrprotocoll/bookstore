import Book from 'components/Book';
import Form from 'components/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from 'redux/books/BooksThunk';

const Books = () => {
  const { books } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <ul className="container">
        {
          Object.entries(books).map(([id, book]) => (
            <Book
              key={id}
              title={book[0].title}
              author={book[0].author}
              id={id}
            />
          ))
        }
      </ul>

      <Form />
    </>
  );
};

export default Books;
