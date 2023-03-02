import Book from 'components/Book';
import Form from 'components/Form';
import { useSelector } from 'react-redux';

const Books = () => {
  const { books } = useSelector((store) => store.book);
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
