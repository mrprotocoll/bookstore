import Layout from 'layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import Books from 'routes/Books';
import Category from 'routes/Category';
import PageNotFound from 'routes/PageNotFound';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="category" element={<Category />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </>
);
export default App;
