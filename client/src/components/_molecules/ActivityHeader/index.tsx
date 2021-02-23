import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/modules/user';
import { ActivityHeader as Presentational } from './ActivityHeader';

type Props = {
  userId: string;
  updatedAt: number;
  id: string;
};
export const ActivityHeader: React.VFC<Props> = ({ userId, updatedAt, id }) => {
  const user = useSelector(selectUser);

  return (
    <Presentational userId={userId} updatedAt={updatedAt} id={id} user={user} />
  );
};
