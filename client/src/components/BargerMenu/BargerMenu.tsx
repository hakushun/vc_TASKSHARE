import Link from 'next/link';
import React from 'react';
import { Overlay } from '../Overlay';
import styles from './index.module.scss';

type Props = {
  isAuth: boolean;
  logout: () => Promise<void>;
  handletoggle: () => void;
};
export const BargerMenu: React.VFC<Props> = ({
  isAuth,
  logout,
  handletoggle,
}) => (
  <Overlay>
    <nav className={styles.nav}>
      <button
        type="button"
        aria-label="閉じる"
        className={styles.close}
        onClick={() => handletoggle()}>
        <img src="/images/icon-x.svg" alt="閉じる" width="40" height="40" />
      </button>
      <ul className={styles.navList}>
        {!isAuth ? (
          <>
            <li className={styles.navItem}>
              <Link href="/signin">
                <a
                  className={styles.navLink}
                  onClick={() => handletoggle()}
                  onKeyPress={() => handletoggle()}>
                  SignIn
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/signup">
                <a
                  className={styles.navLink}
                  onClick={() => handletoggle()}
                  onKeyPress={() => handletoggle()}>
                  SignUp
                </a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className={styles.navItem}>
              <Link href="/projects">
                <a
                  className={styles.navLink}
                  onClick={() => handletoggle()}
                  onKeyPress={() => handletoggle()}>
                  Projects
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/tasks">
                <a
                  className={styles.navLink}
                  onClick={() => handletoggle()}
                  onKeyPress={() => handletoggle()}>
                  Tasks
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/profile">
                <a
                  className={styles.navLink}
                  onClick={() => handletoggle()}
                  onKeyPress={() => handletoggle()}>
                  Profile
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => logout()}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  </Overlay>
);
