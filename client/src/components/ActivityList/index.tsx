import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFirestore } from '../../libs/db/useFirestore';
import { remove } from '../../redux/modules/activities';
import { Activity, edit } from '../../redux/modules/activity';
import { selectUsers } from '../../redux/modules/users';
import { ActivityList as Presentational } from './ActivityList';

type Props = {
  activities: Activity[];
};
export const ActivityList: React.VFC<Props> = ({ activities }) => {
  const dispatch = useDispatch();
  const { fetchActivities } = useFirestore();
  const users = useSelector(selectUsers);

  const handleEdit = (id: string) => {
    dispatch(edit({ id }));
  };
  const handleRemove = (id: string) => {
    dispatch(remove({ id }));
  };

  useEffect(() => {
    fetchActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Presentational
      activities={activities}
      users={users}
      handleEdit={handleEdit}
      handleRemove={handleRemove}
    />
  );
};
