import Layout from 'layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import Books from 'routes/Books';
import Categories from 'routes/Categories';
import PageNotFound from 'routes/PageNotFound';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="category" element={<Categories />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </>
);
export default App;
