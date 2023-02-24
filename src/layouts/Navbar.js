import { NavLink } from 'react-router-dom';
import styles from 'styles/Navbar.module.css';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Books' },
    { path: 'category', text: 'Category' },
  ];

  return (
    <nav className={styles.navbar}>
      <h2>MP Bookstore</h2>
      <ul className={styles.navlinks}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
