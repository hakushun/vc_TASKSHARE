import React from 'react';
import styles from './index.module.scss';

export type Props = {
  id: string;
  handleEdit: (_activityId: string) => void;
  openConfirmation: () => void;
};
export const ActivityAction: React.VFC<Props> = ({
  id,
  handleEdit,
  openConfirmation,
}) => (
  <div className={styles.root}>
    <button
      type="button"
      className={styles.action}
      onClick={() => handleEdit(id)}>
      <img src="/images/icon-edit.svg" alt="編集する" width="20" height="20" />
    </button>
    <button
      type="button"
      className={styles.action}
      onClick={() => openConfirmation()}>
      <img src="/images/icon-trash.svg" alt="削除する" width="20" height="20" />
    </button>
  </div>
);
