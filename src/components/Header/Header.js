import React from 'react';

import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';

const Header = () => {
  return (
    <header className={styles.content}>
      <Logo className={styles.logo} />
    </header>
  );
};

export default Header;
