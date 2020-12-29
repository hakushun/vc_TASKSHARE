import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

type Props = {
  isOpened: boolean;
  toggleMenu: () => void;
};
export const MenuBar: React.VFC<Props> = ({ isOpened, toggleMenu }) => (
  <button
    type="button"
    aria-label="メニュー開閉"
    className={clsx(styles.root, isOpened && styles.isOpened)}
    onClick={() => toggleMenu()}>
    <span className={clsx(styles.bar, isOpened && styles.isOpened)}></span>
  </button>
);
