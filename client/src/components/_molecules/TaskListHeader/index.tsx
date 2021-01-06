import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasksSort, sortTasks } from '../../../redux/modules/sort';
import { TaskListHeader as Presentational } from './TaskListHeader';

type Props = {
  context: 'open' | 'close';
};
export const TaskListHeader: React.VFC<Props> = ({ context }) => {
  const dispatch = useDispatch();
  const tasksSort = useSelector(selectTasksSort);

  const handleSrotTasks = (key: 'status' | 'dueDate') => {
    const order = tasksSort.order === 'up' ? 'down' : 'up';
    dispatch(sortTasks({ key, order }));
  };
  return (
    <Presentational
      context={context}
      tasksSort={tasksSort}
      handleSrotTasks={handleSrotTasks}
    />
  );
};
