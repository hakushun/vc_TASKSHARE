import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { BargerMenu } from '../BargerMenu';
import { MenuButton } from '../_atoms/MenuButton';

type Props = {
  isAuth: boolean;
  logout: () => Promise<void>;
};
export const Header: React.VFC<Props> = ({ isAuth, logout }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <h1 className={styles.title}>
        <Link href={isAuth ? '/mypage' : '/'}>
          <a className={styles.titleLink}>TASKSHARE</a>
        </Link>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {!isAuth ? (
            <>
              <li className={styles.navItem}>
                <Link href="/signin">
                  <a className={styles.navLink}>LOGIN</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/signup">
                  <a className={styles.navLink}>SIGNUP</a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className={styles.navItem}>
                <Link href="/projects">
                  <a className={styles.navLink}>Projects</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/tasks">
                  <a className={styles.navLink}>Tasks</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/profile">
                  <a className={styles.navLink}>Profile</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <button
                  type="button"
                  className={styles.navLink}
                  onClick={() => logout()}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
      <MenuButton />
      <BargerMenu />
    </div>
  </header>
);
