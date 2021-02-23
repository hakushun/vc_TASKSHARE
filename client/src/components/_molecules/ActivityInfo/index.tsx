import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../../redux/modules/users';
import { ActivityInfo as Presentational } from './ActivityInfo';

type Props = {
  userId: string;
  updatedAt: number;
};
export const ActivityInfo: React.VFC<Props> = ({ userId, updatedAt }) => {
  const users = useSelector(selectUsers);

  return <Presentational userId={userId} updatedAt={updatedAt} users={users} />;
};
