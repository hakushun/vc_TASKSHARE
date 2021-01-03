import React from 'react';
import { useDispatch } from 'react-redux';
import { edit } from '../../../redux/modules/activity';
import { toggleConfirmation } from '../../../redux/modules/modal';
import styles from './index.module.scss';

type Props = {
  id: string;
};
export const ActivityAction: React.VFC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const handleEdit = (activityId: string) => {
    dispatch(edit({ id: activityId }));
  };
  const openConfirmation = () => {
    dispatch(toggleConfirmation(true));
  };

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.action}
        onClick={() => handleEdit(id)}>
        <img
          src="/images/icon-edit.svg"
          alt="編集する"
          width="20"
          height="20"
        />
      </button>
      <button
        type="button"
        className={styles.action}
        onClick={() => openConfirmation()}>
        <img
          src="/images/icon-trash.svg"
          alt="削除する"
          width="20"
          height="20"
        />
      </button>
    </div>
  );
};
