import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../redux/modules/activities';
import { Activity, edit } from '../../redux/modules/activity';
import { selectUsers } from '../../redux/modules/users';
import { ActivityList as Presentational } from './ActivityList';

type Props = {
  activities: Activity[];
};
export const ActivityList: React.VFC<Props> = ({ activities }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleEdit = (id: string) => {
    dispatch(edit({ id }));
  };
  const handleRemove = (id: string) => {
    dispatch(remove({ id }));
  };
  return (
    <Presentational
      activities={activities}
      users={users}
      handleEdit={handleEdit}
      handleRemove={handleRemove}
    />
  );
};
