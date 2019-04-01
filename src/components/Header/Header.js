import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';

const Header = () => {
  return (
    <header className={styles.content}>
      <Link to='/'>
        <Logo className={styles.logo} />
      </Link>
    </header>
  );
};

export default Header;
