import { Outlet } from 'react-router-dom';
import Navbar from 'layouts/Navbar';

const Layout = () => (
  <div className="container">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
