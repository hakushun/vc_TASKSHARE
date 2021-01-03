import React from 'react';
import styles from './index.module.scss';

type Props = {
  target: string;
  id: string;
  width: string;
  height: string;
  handleEdit: (_id: string) => void;
};
export const EditButton: React.VFC<Props> = ({
  target,
  id,
  width,
  height,
  handleEdit,
}) => (
  <button type="button" className={styles.root} onClick={() => handleEdit(id)}>
    <img
      src="/images/icon-edit.svg"
      alt={`${target}を編集する`}
      width={width}
      height={height}
    />
  </button>
);
