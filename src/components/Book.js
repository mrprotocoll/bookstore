import { PropTypes } from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    <div>
        <p>{title}</p>
        <span>{author}</span>
    </div>
    <button type='button'>Remove</button>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
