import React from 'react';
import styles from './index.module.scss';

type Props = {
  target: string;
  id?: string;
  handleAdd?: () => void;
  handleAddWithId?: (_id: string) => void;
};
export const AddButton: React.VFC<Props> = ({
  target,
  id,
  handleAdd,
  handleAddWithId,
}) => (
  <>
    {id && handleAddWithId && (
      <button
        type="button"
        className={styles.root}
        onClick={() => handleAddWithId(id)}>
        <img
          src="/images/icon-circle-plus.svg"
          alt={`${target}を追加する`}
          width="30"
          height="30"
        />
      </button>
    )}
    {handleAdd && (
      <button type="button" className={styles.root} onClick={() => handleAdd()}>
        <img
          src="/images/icon-circle-plus.svg"
          alt={`${target}を追加する`}
          width="30"
          height="30"
        />
      </button>
    )}
  </>
);
