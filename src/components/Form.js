const Form = () => (
  <form>
    <input type="text" placeholder="Enter title" />
    <input type="text" placeholder="Enter author name" />
    <button type="submit" aria-label="Add todo item" className="pointer">
      submit
    </button>
  </form>
);

export default Form;
