import React from 'react';
import styles from './index.module.scss';

type Props = {
  target: string;
  handleOpen: () => void;
};
export const DeleteButton: React.VFC<Props> = ({ target, handleOpen }) => (
  <div>
    <button type="button" className={styles.root} onClick={() => handleOpen()}>
      Delete
      <img
        src="/images/icon-trash.svg"
        alt={`${target}を削除する`}
        width="20"
        height="20"
      />
    </button>
  </div>
);
