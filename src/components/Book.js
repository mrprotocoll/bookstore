import { PropTypes } from 'prop-types';

const Book = ({ id, title, author }) => (
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
    <button type="button">Remove</button>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
