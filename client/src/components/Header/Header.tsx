import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { BargerMenu } from '../BargerMenu';

type Props = {
  isAuth: boolean;
  logout: () => Promise<void>;
  handletoggle: () => void;
};
export const Header: React.VFC<Props> = ({ isAuth, logout, handletoggle }) => (
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
                  <a className={styles.navLink}>SignIn</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/signup">
                  <a className={styles.navLink}>SignUp</a>
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
      <button
        className={styles.menuButton}
        type="button"
        onClick={() => handletoggle()}>
        <img
          src="/images/icon-menu.svg"
          alt="メニューボタン"
          width="44"
          height="44"
          className={styles.menu}
        />
      </button>
      <BargerMenu />
    </div>
  </header>
);
