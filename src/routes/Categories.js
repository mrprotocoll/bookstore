import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from 'redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.category);
  return (
    <div className="container">
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      <span>{categories}</span>
    </div>
  );
};

export default Categories;
