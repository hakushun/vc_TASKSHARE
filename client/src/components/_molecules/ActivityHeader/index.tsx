import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/modules/user';
import { ActivityAction } from '../ActivityAction';
import { ActivityInfo } from '../ActivityInfo';
import styles from './index.module.scss';

type Props = {
  userId: string;
  updatedAt: number;
  id: string;
};
export const ActivityHeader: React.VFC<Props> = ({ userId, updatedAt, id }) => {
  const user = useSelector(selectUser);

  return (
    <div className={styles.root}>
      <ActivityInfo userId={userId} updatedAt={updatedAt} />
      {user.id === userId && <ActivityAction id={id} />}
    </div>
  );
};
