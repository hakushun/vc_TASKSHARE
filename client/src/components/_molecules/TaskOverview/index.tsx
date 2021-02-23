import React from 'react';
import { useSelector } from 'react-redux';
import { selectTask } from '../../../redux/modules/task';
import {
  selectAssignUser,
  selectUserCreateTask,
} from '../../../redux/modules/users';
import { TaskOverview as Presentational } from './TaskOverview';

export const TaskOverview: React.VFC = () => {
  const task = useSelector(selectTask);
  const assignUer = useSelector(selectAssignUser);
  const createUer = useSelector(selectUserCreateTask);

  return (
    <Presentational task={task} assignUer={assignUer} createUer={createUer} />
  );
};
