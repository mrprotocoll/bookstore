import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/BooksThunk';
import styles from 'styles/Book.module.css';
import ProgressBar from './ProgressBar';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const percentage = 86;
  return (
    <li className={styles.book}>
      <div className={styles.details}>
        <span className={styles.category}>category</span>
        <h2>{title}</h2>
        <span className={styles.author}>{author}</span>
        <div className={styles.action}>
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <ProgressBar percentage={percentage} />

      <div className={styles.chapter}>
        <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
      </div>

    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
