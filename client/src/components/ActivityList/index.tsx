import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInstance } from '../../libs/db/getInstance';
import {
  getActivities,
  remove,
  selectIsLoading,
} from '../../redux/modules/activities';
import { Activity } from '../../redux/modules/activity';
import { ActivityList as Presentational } from './ActivityList';

type Props = {
  activities: Activity[];
};
export const ActivityList: React.VFC<Props> = ({ activities }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const db = getInstance();

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
      isLoading={isLoading}
      handleRemove={handleRemove}
    />
  );
};
