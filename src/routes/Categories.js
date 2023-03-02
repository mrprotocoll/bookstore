import { useDispatch } from 'react-redux';
import { checkStatus } from 'redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};

export default Categories;
