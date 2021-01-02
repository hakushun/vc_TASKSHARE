import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInstance } from '../../libs/db/getInstance';
import { getActivities, remove } from '../../redux/modules/activities';
import { Activity, edit } from '../../redux/modules/activity';
import { selectUser } from '../../redux/modules/user';
import { selectUsers } from '../../redux/modules/users';
import { ActivityList as Presentational } from './ActivityList';

type Props = {
  activities: Activity[];
};
export const ActivityList: React.VFC<Props> = ({ activities }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const user = useSelector(selectUser);
  const db = getInstance();

  const handleEdit = (id: string) => {
    dispatch(edit({ id }));
  };
  const handleRemove = (id: string) => {
    dispatch(remove({ id }));
  };

  useEffect(() => {
    db.collection('activities').onSnapshot((snapshot) => {
      const items: Activity[] = [];
      snapshot.forEach((doc) => items.push(doc.data() as Activity));
      dispatch(getActivities(items));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Presentational
      activities={activities}
      users={users}
      user={user}
      handleEdit={handleEdit}
      handleRemove={handleRemove}
    />
  );
};
