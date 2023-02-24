import { Outlet } from 'react-router-dom';
import NavBar from 'layouts/NavBar';

const Layout = () => (
  <div className="container">
    <NavBar />
    <Outlet />
  </div>
);

export default Layout;
