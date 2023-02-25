import Book from 'components/Book';
import Form from 'components/Form';

const Books = () => (
  <>
    <h2>Books</h2>
    <ul>
      <Book title="Hello World" author="Mr Protocoll" />
      <Book title="Book 2" author="Mr Protocoll" />
      <Book title="Book 3" author="Mr Protocoll" />
      <Book title="Book 4" author="Mr Protocoll" />
    </ul>
    <h2>Form</h2>
    <Form />
  </>
);

export default Books;
