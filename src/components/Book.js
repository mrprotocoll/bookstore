import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/booksSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <p>
          Title:
          {title}
        </p>
        <small>
          Author:
          {author}
        </small>
      </div>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
