import React from 'react';
import styles from './index.module.scss';

export type Props = {
  handletoggle: () => void;
};
export const MenuButton: React.VFC<Props> = ({ handletoggle }) => (
  <button className={styles.root} type="button" onClick={() => handletoggle()}>
    <img
      src="/images/icon-menu.svg"
      alt="メニューボタン"
      width="44"
      height="44"
      className={styles.menu}
    />
  </button>
);
