import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInstance } from '../../libs/db/getInstance';
import {
  getActivities,
  remove,
  selectIsLoading,
} from '../../redux/modules/activities';
import { Activity, edit } from '../../redux/modules/activity';
import { toggleConfirmation } from '../../redux/modules/modal';
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
  const isLoading = useSelector(selectIsLoading);
  const db = getInstance();

  const handleEdit = (id: string) => {
    dispatch(edit({ id }));
  };
  const handleRemove = (id: string) => {
    dispatch(remove({ id }));
  };
  const openConfirmation = () => {
    dispatch(toggleConfirmation(true));
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
      isLoading={isLoading}
      handleEdit={handleEdit}
      handleRemove={handleRemove}
      openConfirmation={openConfirmation}
    />
  );
};
