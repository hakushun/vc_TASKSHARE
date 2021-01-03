import React from 'react';
import { useSelector } from 'react-redux';
import { getStringTimestamp } from '../../../libs/date';
import { selectUsers, getCommenter } from '../../../redux/modules/users';
import styles from './index.module.scss';

type Props = {
  userId: string;
  updatedAt: number;
};
export const ActivityInfo: React.VFC<Props> = ({ userId, updatedAt }) => {
  const users = useSelector(selectUsers);

  return (
    <div className={styles.root}>
      <span>{getCommenter(users, userId)}</span>
      <span className={styles.date}>{getStringTimestamp(updatedAt)}</span>
    </div>
  );
};
