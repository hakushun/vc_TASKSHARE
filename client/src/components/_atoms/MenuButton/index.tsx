import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleBargerMenu } from '../../../redux/modules/bargerMenu';
import styles from './index.module.scss';

export const MenuButton = () => {
  const dispatch = useDispatch();

  const handletoggle = () => {
    dispatch(toggleBargerMenu());
  };
  return (
    <button
      className={styles.root}
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
  );
};
