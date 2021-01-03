import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

type Props = {
  context?: string;
  handleClose: () => void;
};
export const CloseButton: React.VFC<Props> = ({ context, handleClose }) => (
  <button
    type="button"
    aria-label="閉じる"
    className={clsx(context === 'menu' ? styles.menu : styles.root)}
    onClick={() => handleClose()}>
    <img src="/images/icon-x.svg" alt="閉じる" width="40" height="40" />
  </button>
);
