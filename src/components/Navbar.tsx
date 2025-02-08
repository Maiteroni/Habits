import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">О приложении</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;