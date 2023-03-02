import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/books/booksSlice';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(
        addBook({
          item_id: uuidv4(),
          title,
          author,
          category: '',
        }),
      );

      // reset title and author
      setTitle("");
      setAuthor("");
      setErrorMessage('');
    }else{
      setErrorMessage('Book title and author are required');
    }
  };
  return (
    <form>
      <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
      <input type="text" onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author name" />
      <button
        type="submit"
        aria-label="Add todo item"
        className="pointer"
        onClick={handleSubmit}
      >
        submit
      </button>
      <span className="error">{errorMessage}</span>
    </form>
  );
};

export default Form;
