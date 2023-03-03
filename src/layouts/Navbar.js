import { NavLink } from 'react-router-dom';
import styles from 'styles/Navbar.module.css';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    { path: '/', text: 'BOOKS' },
    { path: 'category', text: 'CATEGORIES' },
  ];

  return (
    <nav>
      <div className={`container ${styles.navbar}`}>
        <ul className={styles.navlinks}>
          <li><h2>MP Bookstore</h2></li>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.user}>
          <FaUserAlt />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
