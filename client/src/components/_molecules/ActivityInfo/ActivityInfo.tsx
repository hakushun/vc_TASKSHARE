import React from 'react';
import { Userdata, getUsername } from '../../../redux/modules/users';
import { getStringTimestamp } from '../../../libs/date';
import styles from './index.module.scss';

export type Props = {
  userId: string;
  updatedAt: number;
  users: Userdata[];
};
export const ActivityInfo: React.VFC<Props> = ({
  userId,
  updatedAt,
  users,
}) => (
  <div className={styles.root}>
    <span>{getUsername(users, userId)}</span>
    <span className={styles.date}>{getStringTimestamp(updatedAt)}</span>
  </div>
);
