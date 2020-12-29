import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { navList } from '../../config/navList';

type Props = {
  isOpened: boolean;
  toggleMenu: () => void;
  logout: () => Promise<void>;
};
export const BargerMenu: React.VFC<Props> = ({
  isOpened,
  toggleMenu,
  logout,
}) => (
  <nav
    className={clsx(styles.nav, isOpened && styles.isOpened)}
    aria-hidden={!isOpened}>
    <ul className={styles.navList}>
      {navList.map((item) => (
        <li className={styles.navItem} key={item.id}>
          <Link href={item.href}>
            {/* eslint-disable jsx-a11y/click-events-have-key-events  */}
            <a className={styles.navLink} onClick={() => toggleMenu()}>
              {item.label}
            </a>
          </Link>
        </li>
      ))}
      <li className={styles.navItem}>
        <button
          type="button"
          className={styles.navLink}
          onClick={() => logout()}>
          Logout
        </button>
      </li>
    </ul>
  </nav>
);
