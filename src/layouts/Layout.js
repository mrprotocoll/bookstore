import { Outlet } from 'react-router-dom';
import Navbar from 'layouts/Navbar';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;
