import React from 'react';
import { Userdata } from '../../../redux/modules/users';
import { ActivityAction } from '../ActivityAction';
import { ActivityInfo } from '../ActivityInfo';
import styles from './index.module.scss';

export type Props = {
  userId: string;
  updatedAt: number;
  id: string;
  user: Userdata;
};
export const ActivityHeader: React.VFC<Props> = ({
  userId,
  updatedAt,
  id,
  user,
}) => (
  <div className={styles.root}>
    <ActivityInfo userId={userId} updatedAt={updatedAt} />
    {user.id === userId && <ActivityAction id={id} />}
  </div>
);
